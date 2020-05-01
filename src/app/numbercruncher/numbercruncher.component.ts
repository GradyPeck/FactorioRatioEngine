import { Component, OnInit } from '@angular/core';

import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';

interface IRecipe {
  name : string;
  ingredients : Object;
  products : Object;
  data : Object;
  time : number;
}

interface denseIng {
  name : string;
  quantity : number;
}

interface IResource {
  name : string;
  data : Object;
}

@Component({
  selector: 'app-numbercruncher',
  templateUrl: './numbercruncher.component.html',
  styleUrls: ['./numbercruncher.component.css']
})

export class NumbercruncherComponent implements OnInit {

  public form: {
		fileIn: File | null;
	};

  constructor(private csvparser : NgxCsvParser) { 
    this.form = {
			fileIn: null
		};
  }

  ngOnInit() {
  }

  csvRecords = [];

  recipes : IRecipe[] = [];
  resources : IResource[] = [];

  selection : string;
  selectAmount : number;
  
  crunchResult : denseIng[] = [];

  parsley (inpoot : File) {
    //reset everything in case this isn't the first time
    this.csvRecords = [];
    this.recipes = [];
    this.resources = [];
    //parse dat file
    this.csvparser.parse(inpoot, { header: false, delimiter: '@' })
      .pipe().subscribe((result: Array<string[]>) => {
        this.csvRecords = result;
        let newRow = [];
        for (let row of this.csvRecords) {
          newRow = [];
          //turn all single quotes to double quotes for JSON format, then parse data
          for (let item of row) {
            item = item.replace(/'/g, '"');
            newRow.push(item);
          }
          newRow[3] = JSON.parse(newRow[3]);
          //if not a resource, parse ingredients and products, cast numbers, then push to recipes
          if (row[1] != "No Ingredients") {
            //parse and cast ingredients
            newRow[1] = JSON.parse(newRow[1]);
            for (let key in newRow[1]) {
              newRow[1][key] = Number(newRow[1][key]);
            }
            //parse and cast products
            newRow[2] = JSON.parse(newRow[2]);
            for (let key in newRow[2]) {
              newRow[2][key] = Number(newRow[2][key]);
            }

            //make time its own property and banish it from ingredients
            newRow[4] = newRow[1]["Time"]
            delete newRow[1]["Time"];

            //push to recipes
            this.recipes.push({name : newRow[0], ingredients : newRow[1], products : newRow[2], data : newRow[3], time: newRow[4]});
          }
          //push resources to resources
          else {
            this.resources.push({name: newRow[0], data: newRow[3]});
          }
        }
        //manually add oil processing...
        this.recipes.push({name: "Advanced Oil Processing", ingredients : {"Crude oil" : 100, "Water" : 50}, products : {"Heavy oil" : 25, "Light oil" : 45, "Petroleum gas" : 55}, data : {"Produced by" : "Oil refinery"}, time: 5});
        //and some resources
        this.resources.push({name : "Wood", data : {}});
        this.resources.push({name : "Time", data : {}});
        this.recipes.push({name: "Iron ore", ingredients: {}, products: {"Iron ore": 1}, data: {}, time: 2});
        this.recipes.push({name: "Copper ore", ingredients: {}, products: {"Copper ore": 1}, data: {}, time: 2});
        this.recipes.push({name: "Coal", ingredients: {}, products: {"Coal": 1}, data: {}, time: 2});
        this.recipes.push({name: "Stone", ingredients: {}, products: {"Stone": 1}, data: {}, time: 2});
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    }

    //for debugging - currently unused
    public printRecipes () {
      for (let recipe of this.recipes) {
        console.log(recipe.name);
        for (let ingredient in recipe.ingredients) {
          console.log(recipe.ingredients[ingredient]);
        }
        for (let product in recipe.products) {
          console.log(recipe.products[product]);
        }
      }
    }

    public searchRecipe (selecty : string) : IRecipe {
      for (let recipe of this.recipes) {
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
        //raw demandrate of the recipe
        let demandRate : number = recipe.ingredients[ingy];
        //multiply by the overall demand to get TRUE demandRate
        demandRate = demandRate*dRate;
        let ingyRecipe : IRecipe = this.searchRecipe(ingy);
        if(ingyRecipe != null) {
          //divide the demandRate over the batch size
          demandRate = demandRate/ingyRecipe.products[ingy];
          //demandRate is multiplied by time to yield number of machines
          totalIngrees.push({name: ingy, quantity: demandRate * ingyRecipe.time});
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

    public processForm() : void {
      this.parsley(this.form.fileIn);
    }
  
}
