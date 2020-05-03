import { Component, OnInit } from '@angular/core';

import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { RecipebankService } from '../recipebank.service';
import { IRecipe } from '../recipebank.service';
import { denseIng } from '../recipebank.service';

@Component({
  selector: 'app-numbercruncher',
  templateUrl: './numbercruncher.component.html',
  styleUrls: ['./numbercruncher.component.css']
})

export class NumbercruncherComponent implements OnInit {

  constructor(private recipeBank : RecipebankService) { }

  ngOnInit() {
  }

  selection : string;
  selectAmount : number;
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
    let ary : denseIng[] = this.recurseRecipe({name: "fake", ingredients: {[searchTerm]: 1}, products: {}, data: {}, time: 1}, this.selectAmount);

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

}
