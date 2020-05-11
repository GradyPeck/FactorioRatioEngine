import { Component, OnInit } from '@angular/core';

import { RecipebankService } from '../recipebank.service';
import { IRecipe } from '../recipebank.service';
import { denseIng } from '../recipebank.service';

@Component({
  selector: 'app-numbercruncher',
  templateUrl: './numbercruncher.component.html',
  styleUrls: ['./numbercruncher.component.css']
})

export class NumbercruncherComponent implements OnInit {

  constructor(public recipeBank : RecipebankService) { }

  ngOnInit() {
    this.chooseMachines();
  }

  selection : string = "";
  selectAmountItems : number;
  selectAmountMachines : number;

  assemblyChoice : number = 2;
  furnaceChoice : number = 2;
  drillChoice : number = 2;
  
  crunchResult : denseIng[] = [];

  chosenMachines : Object = {
    //always "chosen"
    "Centrifuge" : 1,
    "Chemical plant" : 1,
    "Oil refinery" : 1,
    "Nuclear reactor" : 1,
    "Pumpjack" : 1,
    "Offshore pump" : 1,
    "Rocket silo" : 1
  }

  public searchRecipe (selecty : string) : IRecipe {
    for (let recipe of this.recipeBank.recipes) {
      for (let prod in recipe.products) {
        if (prod.toUpperCase() === selecty.toUpperCase()) {
          return recipe;
        }
      }
    }
    return null;
  }

  public recurseRecipe (recipe : IRecipe, dRate : number) : denseIng[] {
    if (recipe === null) {
      //this shouldn't happen anymore. If it does you probably have no data loaded. 
      console.log("nullreturn");
      return [];
    }
    let totalIngrees : denseIng[] = [];
    for (let ingy in recipe.ingredients) {
      //raw rate at which recipe demands ingredient
      let demandRate : number = recipe.ingredients[ingy];
      //multiply by the overall demand to get current demand rate
      demandRate = demandRate*dRate;
      let ingyRecipe : IRecipe = this.searchRecipe(ingy);
      if(ingyRecipe != null) {
        //divide the demandRate over the batch size of ingredient's recipe
        demandRate = demandRate/ingyRecipe.products[ingy];
        //demandRate is multiplied by time to yield number of machines
        totalIngrees.push({name: ingy, quantity: demandRate * (ingyRecipe.time/this.getCraftSpeed(ingyRecipe))});
        //cue up the next layer
        totalIngrees.push(...this.recurseRecipe(ingyRecipe, demandRate));
      }
      else {
        //catch raw resources and broken things
        totalIngrees.push({name: ingy, quantity: demandRate});
      }
    }
    return totalIngrees;
  }

  public firstDomino (searchTerm : string) {
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
    let ary : denseIng[] = this.recurseRecipe({name: "fake", ingredients: {[searchTerm]: 1}, products: {}, data: {}, time: 1}, this.selectAmountItems);

    //#region ObjectConsolidation
    /* object-based result consolidation (Bring back if you want an ary object)
    consolidate results
    let newAry = {};
    for (let thingy of ary) {
      if(newAry[thingy.name] == undefined) {
        newAry[thingy.name] = thingy.quantity;
      }
      else {
        newAry[thingy.name] = newAry[thingy.name] + thingy.quantity;
      }
    }*/
    //#endregion
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
    for (let item of ary) {
      item.quantity = this.fixFloat(item.quantity);
    }
    this.crunchResult = ary;
  }

  public getCraftSpeed(recipe : IRecipe) : number {
    let producedBy : string[] = recipe.data["Produced by"];
    for (let i = 0; i < producedBy.length; i++) {
      if(producedBy[i] == "Crafting#Manual crafting") {
        producedBy.splice(i, 1);
        i--;
      }
    }
    for (let producer in this.chosenMachines) {
      if (producedBy.includes(producer)) {
        return this.chosenMachines[producer];
      }
    }
  }

  public chooseMachines () {
    //set to only invariable values
    this.chosenMachines = {
      "Centrifuge" : 1,
      "Chemical plant" : 1,
      "Oil refinery" : 1,
      "Nuclear reactor" : 1,
      "Pumpjack" : 1,
      "Offshore pump" : 1,
      "Rocket silo" : 1
    };
    switch(this.assemblyChoice) {
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
    switch(this.furnaceChoice) {
      case 1: 
        this.chosenMachines["Stone furnace"] = 1;
        break;
      case 2: 
        this.chosenMachines["Steel furnace"] = 2;
        break;
    }
    switch(this.drillChoice) {
      case 1: 
        this.chosenMachines["Burner mining drill"] = 1;
        break;
      case 2: 
        this.chosenMachines["Electric mining drill"] = 2;
        break;
    }
  }

  //round floats that differ from a shorter decimal by a very small amount (ie, errors)
  public fixFloat (toFix : number) : number {
    for (let places = 1; places < 5; places++) {
      let fewPlaces = (Math.round(toFix*10**places))/(10**places);
      //Rounds out differences lesser than the threshold value set in isClose
      if (this.isClose(toFix, fewPlaces)) {
        console.log(`${fewPlaces} : ${toFix} @ ${places}`);
        return fewPlaces;
      }
    }
    return toFix;
  }

  //convert simple fractions to mixed number form - for display only
  public fractionalize (toFix : number) : string {
    let leftSide = Math.trunc(toFix);
    for (let i = 2; i <= 1000; i++) {
      for (let z = 1; z <= 999; z++) {
        if(z >= i) {break;}
        if (this.isClose(toFix - leftSide, z/i)) {
          if (leftSide == 0) {
            return `${z}/${i}`;
          }
          else {
            return `${leftSide} + ${z}/${i}`;
          }
        }
      }
    }
    return String(toFix);
  }

  //this function largely exists so I can automatically use the same arbitrary threshold consistently
  public isClose (num1 : number, num2 : number) : boolean {
    //threshold is the arbitrary number of significant digits to check
    let threshold : number = 0.0000001;
    if (Math.abs(num1 - num2) < threshold) {
      return true;
    }
    else {
      return false;
    }
  }

  public EqualizeInputs (modi : string) {
    let inQuestion = this.searchRecipe(this.selection);
    if (inQuestion == null) {return;}
    if (modi == 'I') {
      this.selectAmountMachines = this.selectAmountItems/((this.getCraftSpeed(inQuestion)*inQuestion.products[this.selection])/inQuestion.time);
    }
    else if (modi == 'M') {
      this.selectAmountItems = this.selectAmountMachines*((this.getCraftSpeed(inQuestion)*inQuestion.products[this.selection])/inQuestion.time);
    }
  }

}
