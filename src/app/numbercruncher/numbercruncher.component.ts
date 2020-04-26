import { Component, OnInit, Input } from '@angular/core';

import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-numbercruncher',
  templateUrl: './numbercruncher.component.html',
  styleUrls: ['./numbercruncher.component.css']
})

export class NumbercruncherComponent implements OnInit {

  public form: {
		name: string;
		email: string;
		resume: File | null;
	};

  constructor(private csvparser : NgxCsvParser) { 
    this.form = {
			name: "",
			email: "",
			resume: null
		};
  }

  ngOnInit() {
  }

  honk : FileList;

  csvRecords = [];

  parsley (inpoot : File) {
    this.csvparser.parse(inpoot, { header: false, delimiter: '@' })
      .pipe().subscribe((result: Array<any>) => {
 
        //console.log('Result', result);
        this.csvRecords = result;
        for (let row of this.csvRecords) {
          // let newRow : string[] = this.fixRow(row);
           for (let item of row) {
             console.log(item);
           }
          console.log(row);
        }
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
      
    }

    public processForm() : void {
 
      console.group( "Form View-Model" );
      console.log( "Name:", this.form.name );
      console.log( "Email:", this.form.email );
      console.log( "Resume:", this.form.resume);
      console.groupEnd();
      console.log(this.form.resume);
      this.parsley(this.form.resume);
    }

    public fixRow (row : string[]) : string[] {
      if(row.length < 4) {
        row[0] = row[0].slice(0, row[0].indexOf("No Ingredients")-1);
      }
      else {
        for (let i = 0; i < 3; i++) {
          row[i] = row[i].slice(0, row[i].length - 2);
        }
        for (let i = 1; i < 4; i++) {
          row[i] = "{" + row[i];
        }
        row[3] = row[3].slice(0, row[3].length - 1);
      }
      return row;
    }
  
}

