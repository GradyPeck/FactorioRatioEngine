import { Component, OnInit } from '@angular/core';

import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { RecipebankService } from '../recipebank.service';
import { IRecipe } from '../recipebank.service';
import { denseIng } from '../recipebank.service';

@Component({
  selector: 'app-csvloader',
  templateUrl: './csvloader.component.html',
  styleUrls: ['./csvloader.component.css']
})
export class CsvloaderComponent implements OnInit {

  public form: {
		fileIn: File | null;
	};

  constructor(private csvparser : NgxCsvParser, public recipeBank : RecipebankService) { 
    this.form = {
			fileIn: null
		};
  }

  ngOnInit() {
  }

  csvRecords = [];

  public processForm() : void {
    this.parsley(this.form.fileIn);
  }

  parsley (inpoot : File) {
    //reset everything in case this isn't the first time
    this.csvRecords = [];
    this.recipeBank.recipes = [];
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
            this.recipeBank.recipes.push({name : newRow[0], ingredients : newRow[1], products : newRow[2], data : newRow[3], time: newRow[4]});
          }
          //push resources to resources
          else {
            //this.resources.push({name: newRow[0], data: newRow[3]});
            if(newRow[3]["Mining time"] != undefined) {
              this.recipeBank.recipes.push({name: newRow[0], ingredients: {}, products: {[newRow[0]]: 1}, data: newRow[3], time: newRow[3]["Mining time"]});
            }
            else {
              this.recipeBank.recipes.push({name: newRow[0], ingredients: {}, products: {[newRow[0]]: 1}, data: newRow[3], time: 1});
            }
          }
        }
        //manually add oil processing...
        //this.recipeBank.recipes.push({name: "Advanced Oil Processing", ingredients : {"Crude oil" : 100, "Water" : 50}, products : {"Heavy oil" : 25, "Light oil" : 45, "Petroleum gas" : 55}, data : {"Produced by" : "Oil refinery"}, time: 5});
        //...and space science packs
        this.recipeBank.recipes.push({name: "Space science pack", ingredients : {"Rocket part" : 100, "Satellite" : 1}, products : {"Space science pack" : 1000}, data : {"Produced by" : "Rocket silo"}, time: 40.33});
        //and fudge some things:
        //add sulfuric acid to uranium ore's ingredients and double the mining time
        this.recipeBank.recipes.find((a) => a.name == "Uranium ore").ingredients = {"Sulfuric acid": 1};
        //change the batch size of water to 1200
        this.recipeBank.recipes.find((a) => a.name == "Water").products = {"Water": 1200};
        //make uranium isotopes not horribly crashy
        this.recipeBank.recipes.find((a) => a.name == "Uranium processing").products = {"Uranium-238": 1};
        this.recipeBank.recipes.push({name: "Uranium enrichment", ingredients : {"Uranium-238": 3}, products : {"Uranium-235" : 1}, data : {"Produced by" : ["Centrifuge"]}, time: 60});

        //hunt down some problematic Uranium recipes
        for (let i = 0; i < this.recipeBank.recipes.length; i++) {
          if (this.recipeBank.recipes[i].name == "Uranium-235" ||
          this.recipeBank.recipes[i].name == "Uranium-238" ||
          this.recipeBank.recipes[i].name == "Nuclear fuel reprocessing" ||
          this.recipeBank.recipes[i].name == "Kovarex enrichment process") {
            this.recipeBank.recipes.splice(i, 1);
            i--;
          }
        }
        //1 fuel cell = 80,000 units of steam
        //like all uranium recipes, this causes crashes
        //this.recipeBank.recipes.push({name: "Used up uranium fuel cell", ingredients: {water: 80000, "Uranium fuel cell": 1}, products: {"Used up uranium fuel cell": 1, "Steam": 80000}, data: {"Produced by": "Nuclear reactor"}, time: 200});
        
        //this.printRecipes();
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    //this isn't missing a bracket, this function is just indented weird for readability
  }
    
  //for debugging
  public printRecipes () {
    for (let recipe of this.recipeBank.recipes) {
      let recipeOut: string = recipe.name + ": ";
      for (let keyy in recipe.data) {
        if(keyy.includes("speed")) {
          recipeOut = recipeOut + keyy + ": " + recipe.data[keyy];
          console.log (recipeOut);
        }
      }
    }
  }

}
