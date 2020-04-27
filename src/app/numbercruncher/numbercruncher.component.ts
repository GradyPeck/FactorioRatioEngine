import { Component, OnInit, Input } from '@angular/core';

import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';

interface IRecipe {
  name : string;
  ingredients : Object;
  products : Object;
  data : Object;
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

  parsley (inpoot : File) {
    this.csvparser.parse(inpoot, { header: false, delimiter: '@' })
      .pipe().subscribe((result: Array<string[]>) => {
        //console.log('Result', result);
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
            newRow[1] = JSON.parse(newRow[1]);
            for (let key in newRow[1]) {
              newRow[1][key] = Number(newRow[1][key]);
            }
            newRow[2] = JSON.parse(newRow[2]);
            for (let key in newRow[2]) {
              newRow[2][key] = Number(newRow[2][key]);
            }
            this.recipes.push({name : newRow[0], ingredients : newRow[1], products : newRow[2], data : newRow[3]});
          }
          //push resources to resources
          else {
            this.resources.push({name: newRow[0], data: newRow[3]});
          }
          /* testing stuff
          for (let key in this.recipes[this.recipes.length-1].ingredients) {
            console.log(key + ": " + this.recipes[this.recipes.length-1].ingredients[key]);
          }*/
        }
        //manually add oil processing...
        this.recipes.push({name: "Advanced Oil Processing", ingredients : {"Time" : 5, "Crude oil" : 100, "Water" : 50}, products : {"Heavy oil" : 25, "Light oil" : 45, "Petroleum gas" : 55}, data : {"Produced by" : "Oil refinery"}});
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    }

    public processForm() : void {
      this.parsley(this.form.fileIn);
    }
  
}

