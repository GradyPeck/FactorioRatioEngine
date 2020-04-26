import { Component, OnInit, Input } from '@angular/core';

import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';

interface IRecipe {
  name : string;
  ingredients : string;
  products : string;
  data : string;
}

@Component({
  selector: 'app-numbercruncher',
  templateUrl: './numbercruncher.component.html',
  styleUrls: ['./numbercruncher.component.css']
})

export class NumbercruncherComponent implements OnInit {

  public form: {
		resume: File | null;
	};

  constructor(private csvparser : NgxCsvParser) { 
    this.form = {
			resume: null
		};
  }

  ngOnInit() {
  }

  csvRecords = [];

  recipes : IRecipe[] = [];

  parsley (inpoot : File) {
    this.csvparser.parse(inpoot, { header: false, delimiter: '@' })
      .pipe().subscribe((result: Array<any>) => {
 
        //console.log('Result', result);
        this.csvRecords = result;
        for (let row of this.csvRecords) {
           this.recipes.push({'name' : row[0], 'ingredients' : row[1], 'products' : row[2], 'data' : row[3]});
        }
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
      
    }

    public processForm() : void {
      this.parsley(this.form.resume);
    }
  
}

