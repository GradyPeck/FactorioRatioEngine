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
            this.recipeBank.recipes.push({name : newRow[0], ingredients : newRow[1], products : newRow[2], data : newRow[3], time: newRow[4], prodType: this.findProdType(newRow[3])});
          }
          //push resources to resources
          else {
            //this.resources.push({name: newRow[0], data: newRow[3]});
            if(newRow[3]["Mining time"] != undefined) {
              this.recipeBank.recipes.push({name: newRow[0], ingredients: {}, products: {[newRow[0]]: 1}, data: newRow[3], time: newRow[3]["Mining time"]*2, prodType: this.findProdType(newRow[3])});
            }
            else {
              this.recipeBank.recipes.push({name: newRow[0], ingredients: {}, products: {[newRow[0]]: 1}, data: newRow[3], time: 1, prodType: this.findProdType(newRow[3])});
            }
          }
        }
        //manually add oil processing...
        this.recipeBank.recipes.push({name: "Advanced Oil Processing", ingredients : {"Crude oil" : 100, "Water" : 50}, products : {"Heavy oil" : 25, "Light oil" : 45, "Petroleum gas" : 55}, data : {"Produced by" : ["Oil refinery"]}, time: 5, prodType: this.findProdType({"Produced by" : ["Oil refinery"]})});
        //...and space science packs
        this.recipeBank.recipes.push({name: "Space science pack", ingredients : {"Rocket part" : 100, "Satellite" : 1}, products : {"Space science pack" : 1000}, data : {"Produced by" : ["Rocket silo"]}, time: 40.33, prodType: this.findProdType({"Produced by" : ["Rocket silo"]})});
        //and fudge some things:
        //add sulfuric acid to uranium ore's ingredients and double the mining time
        this.tweakRecipe("Uranium ore", {name: "Uranium ore", ingredients: {"Sulfuric acid": 1}, products: {"Uranium ore": 1}, data: {"Produced by" : ["Electric mining drill"]}, time: 4, prodType: this.findProdType({"Produced by" : ["Electric mining drill"]})});
        //change the batch size of water to 1200
        this.tweakRecipe("Water", {name: "Water", ingredients: {}, products: {"Water": 1200}, data: {"Produced by" : ["Offshore pump"]}, time: 1, prodType: this.findProdType({"Produced by" : ["Offshore pump"]})});
        //make crude oil 1:1:1 so it's literally the crude oil amount (because it's impossible to calculate pumpjacks)
        this.tweakRecipe("Crude oil", {name: "Crude oil", ingredients: {}, products: {"Crude oil": 1}, data: {"Produced by" : ["Pumpjack"]}, time: 1, prodType: this.findProdType({"Produced by" : ["Pumpjack"]})});

        //hunt down some problematic Uranium recipes
        for (let i = 0; i < this.recipeBank.recipes.length; i++) {
          if (this.recipeBank.recipes[i].name == "Uranium-235" ||
          this.recipeBank.recipes[i].name == "Uranium-238" ||
          this.recipeBank.recipes[i].name == "Nuclear fuel reprocessing" ||
          this.recipeBank.recipes[i].name == "Kovarex enrichment process") {
            this.recipeBank.recipes.splice(i, 1);
            i--;
          }
        }//1 fuel cell = 80,000 units of steam
        //for some reason this crashes everything horribly
        //this.tweakRecipe("Used up uranium fuel cell", {name: "Used up uranium fuel cell", ingredients: {water: 80000, "Uranium fuel cell": 1}, products: {"Used up uranium fuel cell": 1, "Steam": 80000}, data: {"Produced by": ["Nuclear reactor"]}, time: 200, prodType: this.findProdType({"Produced by": ["Nuclear reactor"]})});
        //this.printRecipes();
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    //this isn't missing a bracket, this function is just indented weird for readability
  }

  public tweakRecipe (nom: string, newVersion: IRecipe) {
    for (let i = 0; i < this.recipeBank.recipes.length; i++) {
      if (this.recipeBank.recipes[i].name == nom) {
        this.recipeBank.recipes[i] = newVersion;
      }
    }
  }
    
  //for debugging
  public printRecipes () {
    for (let recipe of this.recipeBank.recipes) {
      let recipeOut: string = "";
      for (let keyy in recipe) {
        recipeOut = recipeOut + keyy + ": ";
        if(keyy == "products" || keyy == "ingredients") {
          for (let keyo in recipe[keyy]) {
            recipeOut = recipeOut + keyo + ": " + recipe[keyy][keyo] + ", ";
          }
        }
        else {
          recipeOut = recipeOut + recipe[keyy];
        }
      }
      console.log (recipeOut);
    }
  }

  public findProdType (databloc: Object) : string{
    let producedBy: string[] = databloc["Produced by"];
    for (let i = 0; i < producedBy.length; i++) {
      if (producedBy[i] == "Crafting#Manual crafting") {
        producedBy.splice(i, 1);
        i--;
      }
      else {
        return producedBy[i];
      }
    }
  }

}
