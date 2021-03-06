import { Component, OnInit, Input, Output } from '@angular/core';

import { RecipebankService } from '../recipebank.service';
import { IRecipe } from '../recipebank.service';
import { denseIng } from '../recipebank.service';
import { toolkit } from '../../toolkit';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbercruncher',
  templateUrl: './numbercruncher.component.html',
  styleUrls: ['./numbercruncher.component.css']
})

export class NumbercruncherComponent implements OnInit {

  constructor(public recipeBank: RecipebankService) { }

  ngOnInit() {
    this.chooseMachines();
  }

  //a local name for the toolkit class for the template to use
  tooly = toolkit;

  @Input() crunchID: number;
  @Input() lasty: boolean;
  @Output() calculate: EventEmitter<any> = new EventEmitter();

  selection: string = "";
  //selectionGood: boolean = false;
  selectedResult: number = -1;
  selectAmountItems: number;
  selectAmountMachines: number;
  //selectAmountGood: boolean = false;

  assemblyChoice: number = 2;
  furnaceChoice: number = 2;
  drillChoice: number = 2;

  crunchResult: denseIng[] = [];

  chosenMachines: Object = {
    //always "chosen"
    "Centrifuge": 1,
    "Chemical plant": 1,
    "Oil refinery": 1,
    "Nuclear reactor": 1,
    "Pumpjack": 1,
    "Offshore pump": 1,
    "Rocket silo": 1
  }

  public searchRecipe(selecty: string): IRecipe {
    for (let recipe of this.recipeBank.recipes) {
      for (let prod in recipe.products) {
        if (prod.toUpperCase() === selecty.toUpperCase()) {
          return recipe;
        }
      }
    }
    return null;
  }

  public recurseRecipe(recipe: IRecipe, dRate: number): denseIng[] {
    if (recipe === null) {
      //this shouldn't happen anymore. If it does you probably have no data loaded. 
      console.log("nullreturn");
      return [];
    }
    let totalIngrees: denseIng[] = [];
    for (let ingy in recipe.ingredients) {
      //raw rate at which recipe demands ingredient
      let demandRate: number = recipe.ingredients[ingy];
      //multiply by the overall demand to get current demand rate
      demandRate = demandRate * dRate;
      let ingyRecipe: IRecipe = this.searchRecipe(ingy);
      if (ingyRecipe != null) {
        //divide the demandRate over the batch size of ingredient's recipe
        demandRate = demandRate / ingyRecipe.products[ingy];
        //find producer
        let myproducer: string = this.getCraftSpeed(ingyRecipe);
        //demandRate is multiplied by time to yield number of machines
        totalIngrees.push({ name: ingy, quantity: demandRate * (ingyRecipe.time / this.chosenMachines[myproducer]), producer: myproducer });
        //cue up the next layer
        totalIngrees.push(...this.recurseRecipe(ingyRecipe, demandRate));
      }
      else {
        //catch raw resources and broken things
        totalIngrees.push({ name: ingy, quantity: demandRate, producer: "Steam" });
      }
    }
    return totalIngrees;
  }

  public firstDomino(searchTerm: string) {
    //set up chosenMachines
    this.chooseMachines();

    //obnoxiously extract the correct form of the search term so I can use it in the next step
    let topRecipe = this.searchRecipe(searchTerm);
    for (let product in topRecipe.products) {
      if (product.toUpperCase() == searchTerm.toUpperCase()) {
        searchTerm = product;
      }
    }
    //kick off the recursion with a fake recipe so the top layer gets included in the results
    let ary: denseIng[] = this.recurseRecipe({ name: "fake", ingredients: { [searchTerm]: 1 }, products: {}, data: {}, time: 1 }, this.selectAmountItems);

    //consolidate results
    for (let i = 0; i < ary.length; i++) {
      for (let z = i + 1; z < ary.length; z++) {
        if (ary[i].name == ary[z].name) {
          //add result b to result a
          ary[i].quantity = ary[i].quantity + ary[z].quantity;
          //remove result b
          ary.splice(z, 1);
          //back up the index to avoid skipping
          z--;
        }
      }
    }
    //round everything to the nearest meaningful place to fix floating point errors
    //also find the oil products  
    let oilFractions: {} = {"Heavy oil": 0, "Light oil": 0, "Petroleum gas": 0};
    for (let item of ary) {
      item.quantity = toolkit.fixFloat(item.quantity);
      if (item.name == "Heavy oil" || item.name == "Light oil" || item.name == "Petroleum gas") {
        oilFractions[item.name] = item.quantity;
      }
    }
    //process oil products
    let oilStuff = this.tooly.refine(oilFractions["Heavy oil"], oilFractions["Light oil"], oilFractions["Petroleum gas"]);
    if(oilStuff.Refineries) ary.push({name: "Advanced oil processing", quantity: oilStuff.Refineries, producer: "Oil refinery"});
    if(oilStuff.LC) ary.push({name: "Heavy oil cracking", quantity: oilStuff.LC, producer: "Chemical plant"});
    if(oilStuff.GC) ary.push({name: "Light oil cracking", quantity: oilStuff.GC, producer: "Chemical plant"});

    //take out the original oil entries
    for (let z = 0; z < ary.length; z++) {
      if (ary[z].name == "Heavy oil" || ary[z].name == "Light oil" || ary[z].name == "Petroleum gas") {
        //remove old entry
        ary.splice(z, 1);
        //back up the index to avoid skipping
        z--;
      }
    }
    

    this.calculate.emit({ id: this.crunchID, results: ary });
    this.crunchResult = ary;
  }

  public getCraftSpeed(recipe: IRecipe): string {
    let producedBy: string[] = recipe.data["Produced by"];
    for (let i = 0; i < producedBy.length; i++) {
      if (producedBy[i] == "Crafting#Manual crafting") {
        producedBy.splice(i, 1);
        i--;
      }
    }
    for (let producer in this.chosenMachines) {
      if (producedBy.includes(producer)) {
        return producer;
      }
    }
    //things that can't find their producer will display a steam cloud
    return "Steam";
  }

  public chooseMachines() {
    //set to only invariable values
    this.chosenMachines = {
      "Centrifuge": 1,
      "Chemical plant": 1,
      "Oil refinery": 1,
      "Nuclear reactor": 1,
      "Pumpjack": 1,
      "Offshore pump": 1,
      "Rocket silo": 1
    };
    switch (this.assemblyChoice) {
      case 1:
        this.chosenMachines["Assembling machine 1"] = 0.5;
        break;
      case 2:
        this.chosenMachines["Assembling machine 2"] = 0.75;
        break;
      case 3:
        this.chosenMachines["Assembling machine 3"] = 1.25;
        break;
    }
    switch (this.furnaceChoice) {
      case 1:
        this.chosenMachines["Stone furnace"] = 1;
        break;
      case 2:
        this.chosenMachines["Steel furnace"] = 2;
        break;
    }
    switch (this.drillChoice) {
      case 1:
        this.chosenMachines["Burner mining drill"] = 0.25;
        break;
      case 2:
        this.chosenMachines["Electric mining drill"] = 0.5;
        break;
    }
  }

  public EqualizeInputs(modi: string) {
    let inQuestion = this.searchRecipe(this.selection);
    //obnoxiously extract the correct form of the search term so I can use it in the next step
    for (let product in inQuestion.products) {
      if (product.toUpperCase() == this.selection.toUpperCase()) {
        this.selection = product;
      }
    }
    //if (inQuestion == null) { return; }
    if (modi == 'I') {
      this.selectAmountMachines = this.selectAmountItems / ((this.chosenMachines[this.getCraftSpeed(inQuestion)] * inQuestion.products[this.selection]) / inQuestion.time);
    }
    else if (modi == 'M') {
      this.selectAmountItems = this.selectAmountMachines * ((this.chosenMachines[this.getCraftSpeed(inQuestion)] * inQuestion.products[this.selection]) / inQuestion.time);
    }
  }

  //this would just be an alternate mode for searchRecipe, but I want to improve it eventually to do close matches
  public filterRecipes(searchTerm: string): string[] {
    let resulty: string[] = [];
    /*potential priority order:
      - exact match
      - begins with
      - contains
      - "close to" (allowing errors)
    */
    //but I'm happy with this for now
    for (let recipe of this.recipeBank.recipes) {
      for (let prod in recipe.products) {
        if (prod.toUpperCase().includes(searchTerm.toUpperCase())) {
          //results that START with the string go at the start of the list
          if (prod.toUpperCase().startsWith(searchTerm.toUpperCase())) {
            resulty.unshift(prod);
          }
          else {
            //results that don't go at the end
            resulty.push(prod);
          }
        }
      }
    }
    if(resulty.length > 10) resulty = resulty.slice(0, 10);
    return resulty;
  }

  public selectionKey(keyIn: string) {
    if(this.selection == "") {
      this.selectedResult = -1;
    }
    switch (keyIn) {
      case "ArrowUp":
        this.selectedResult = Math.max(-1, this.selectedResult - 1);
        break;
      case "ArrowDown":
        this.selectedResult = Math.min(this.filterRecipes(this.selection).length - 1, this.selectedResult + 1);
        break;
      case "Enter":
        if (this.selectedResult >= 0) {
          this.selection = this.filterRecipes(this.selection)[this.selectedResult];
        }
        break;
      default:
        this.selectedResult = -1;
        break;
    }
    //if (!this.selection && this.searchRecipe(this.selection) == null){
      this.selectAmountItems = undefined;
      this.selectAmountMachines = undefined;
      this.crunchResult = [];
    //}
  }

  public setSelection (toSet: string) {
    this.selection = toSet;
    this.selectAmountItems = undefined;
    this.selectAmountMachines = undefined;
    this.crunchResult = [];
  }

}
