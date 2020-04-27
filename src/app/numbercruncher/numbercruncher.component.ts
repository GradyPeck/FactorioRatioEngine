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
          for (let item of row) {
            item = item.replace(/'/g, '"');
            newRow.push(item);
          }
          if (row[1] != "No Ingredients") {
            this.recipes.push({name : newRow[0], ingredients : JSON.parse(newRow[1]), products : JSON.parse(newRow[2]), data : JSON.parse(newRow[3])});
          }
          else {
            this.resources.push({name: newRow[0], data: JSON.parse(newRow[3])});
          }
        }
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    }

    public processForm() : void {
      this.parsley(this.form.fileIn);
    }
  
}

