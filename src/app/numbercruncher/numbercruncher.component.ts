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
  viewedRecipe : string = "";

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
        //this.recipes.push({name: "Advanced Oil Processing", ingredients : {"Time" : 5, "Crude oil" : 100, "Water" : 50}, products : {"Heavy oil" : 25, "Light oil" : 45, "Petroleum gas" : 55}, data : {"Produced by" : "Oil refinery"}});
        //and some resources
        this.resources.push({name : "Wood", data : {}});
        this.resources.push({name : "Time", data : {}});
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    }

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

    /*
    public searchRecipe (selecty : string, demandRate : number) : IRecipe {
      for (let recipe of this.recipes) {
        for (let prod in recipe.products) {
          if (prod.toUpperCase() === selecty.toUpperCase()) {
            //find the amount of the item this recipe produces per second
            let prodRate : number = recipe.products[prod] / recipe.time;

            //convert to number of machines needed to meet given demand
            prodRate = demandRate / prodRate;
            // console.log(recipe.name + ": " + prodRate);

            //stuff below here currently makes no goddamn sense
            //lesson learned: whiteboard, THEN code

            //add ingredients to total ingredient list multiplied by that number
            let multIngredients : IRecipe = recipe;
            for (let ingredient in multIngredients.ingredients) {
              multIngredients.ingredients[ingredient] = prodRate;
            }
            for (let mult in multIngredients.ingredients) {
             // console.log(mult + ": " + multIngredients.ingredients[mult]);
            }
            return multIngredients;
          }
        }
      }
      //console.log("search for " + selecty + " returning null");
      return null;
    }

    public recurseRecipe (recipe : IRecipe) : denseIng[] {
      if (recipe === null) {return [];}
      let totalIgrees : denseIng[] = [];
      for (let ingy in recipe.ingredients) {
        let demandRate : number = recipe.ingredients[ingy] / recipe.time;
        totalIgrees = [...totalIgrees, ...this.recurseRecipe(this.searchRecipe(ingy, demandRate)), {name: ingy, quantity: recipe.ingredients[ingy]}];
      }
      return totalIgrees;
    }
    */

    public searchRecipe (selecty : string) : IRecipe {
      for (let recipe of this.recipes) {
        for (let prod in recipe.products) {
          if (prod.toUpperCase() === selecty.toUpperCase()) {
            console.log("found " + prod);
            return recipe;
          }
        }
      }
      //console.log("search for " + selecty + " returning null");
      return null;
    }

    public recurseRecipe (recipe : IRecipe, dRate : number) : denseIng[] {
      if (recipe === null) {
        console.log("nullreturn");
        return [];
      }
      let totalIngrees : denseIng[] = [];
      for (let ingy in recipe.ingredients) {
        //raw demandrate of the recipe
        let demandRate : number = recipe.ingredients[ingy];
        //multiply by the overall demand to get TRUE demandRate
        demandRate = demandRate*dRate;
        totalIngrees.push({name: ingy, quantity: demandRate});
        totalIngrees.push(...this.recurseRecipe(this.searchRecipe(ingy), demandRate));
      }
      //console.log(totalIngrees);
      return totalIngrees;
    }

    public firstDomino (searchTerm : string) {
      console.log("first domino falls");
      let ary : denseIng[] = this.recurseRecipe(this.searchRecipe(searchTerm), 1);
      console.log(searchTerm + ": " + 1);
      for (let thingy of ary) {
        console.log(thingy.name + ": " + thingy.quantity);
      }
    }

    public processForm() : void {
      this.parsley(this.form.fileIn);
    }
  
}
