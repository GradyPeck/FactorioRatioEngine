import { Component, OnInit } from '@angular/core';
import { denseIng } from '../recipebank.service';
import { toolkit } from '../../toolkit';

@Component({
  selector: 'app-cruncherframe',
  templateUrl: './cruncherframe.component.html',
  styleUrls: ['./cruncherframe.component.css']
})
export class CruncherframeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //local name for toolkit for the template to use
  tooly = toolkit;

  crunchy: number[] = [0];
  crunchers: denseIng[][] = [[]];
  grandTotal: denseIng[];
  toIgnore: string[] = [];

  public addCruncher() {
    this.crunchers.push([]);
    this.crunchy.push(0);
  }

  public removeCruncher() {
    this.crunchy.pop();
    this.crunchers.pop();
    this.updateTotal(-1);
  }

  public updateTotal(id: number, newResults?: denseIng[]) {
    this.toIgnore = [];
    this.grandTotal = [];
    if (id != -1) this.crunchers.splice(id, 1, newResults);
    //for each array of denseings in crunchers
    for (let i = 0; i < this.crunchers.length; i++) {
      //for each denseing in the array of denseings
      for (let z = 0; z < this.crunchers[i].length; z++) {
        let found: boolean = false;
        //for each denseIng in grandtotal;
        for (let thingy of this.grandTotal) {
          if (thingy.name == this.crunchers[i][z].name) {
            thingy.quantity = thingy.quantity + this.crunchers[i][z].quantity;
            found = true;
          }
        }
        if (!found) {
          //construct a new densIng so you don't accidentally make an alias instead of a copy
          this.grandTotal.push({ name: this.crunchers[i][z].name, quantity: this.crunchers[i][z].quantity, producer: this.crunchers[i][z].producer });
        }
      }
    }
  }

  public perfectRatio(results: denseIng[]): denseIng[] {
    let safeResults: denseIng[] = [];
    this.safeCopy(results, safeResults);
    let resStrings: string[] = [];
    for (let result of safeResults) {
      if (!this.toIgnore.includes(result.name)) {
        resStrings.push(this.tooly.dec2frac(result.quantity));
      }
    }
    let resFracs: number[] = [];
    let primeFracs: Object = new Object();
    for (let resulty of resStrings) {
      if (resulty.includes("/")) {
        let fracTail: number = Number(resulty.slice(resulty.indexOf("/") + 1));
        if (resFracs.includes(fracTail) == false) {
          resFracs.push(fracTail);
          let someFracs: Object = this.tooly.primeFactor(fracTail);
          for (let frac in someFracs) {
            if (primeFracs.hasOwnProperty(frac)) {
              if (someFracs[frac] > primeFracs[frac]) primeFracs[frac] = someFracs[frac];
            }
            else primeFracs[frac] = someFracs[frac];
          }
        }
      }
    }
    //multiply results by denominators
    //let perfTotals: denseIng[] = [];
    let jackalopes = [];
    this.safeCopy(results, jackalopes);
    let greatMultiple: number = 1;
    for (let frac in primeFracs) {
      greatMultiple = greatMultiple * Number(frac) ** primeFracs[frac];
    }
    for (let i = 0; i < jackalopes.length; i++) {
      jackalopes[i].quantity = Number(this.tooly.fixFloat(jackalopes[i].quantity * greatMultiple));
    }

    let factors: Object[] = [];
    for (let i = 0; i < results.length; i++) {
      factors[i] = this.tooly.primeFactor(results[i].quantity);
    }
    let greatDivisor: number = 1;
    //iterate through the first row of factors
    for (let firstfac in factors[0]) {
      let minfac: number = factors[0][firstfac];
      let bustloop: boolean = false;
      //check if it appears in EVERY row, removing as you find
      for (let i = 1; i < factors.length; i++) {
        if(factors[i].hasOwnProperty(firstfac)) {
          minfac = Math.min(factors[i][firstfac], minfac);
        }
        else {
          bustloop = true;
          break;
        }
      }
      if (bustloop) continue;
      //multiply it into greatDivisor
      greatDivisor = greatDivisor * Number(firstfac) ** minfac;
    }
    //console.log(factors);
    for (let tot of jackalopes) {
      tot.quantity = tot.quantity / greatDivisor;
    }
    return jackalopes;
  }

  //copies an array without creating any aliases
  public safeCopy(toCopy: denseIng[], copyTo: denseIng[]) {
    //let toReturn: denseIng[] = [];
    for (let item of toCopy) {
      let newItem: denseIng = { name: item.name, quantity: item.quantity, producer: item.producer };
      copyTo.push(newItem);
    }
  }

  public togglePerf(toToggle: string) {
    console.log(toToggle);
    if (this.toIgnore.includes(toToggle)) {
      this.toIgnore.splice(this.toIgnore.indexOf(toToggle), 1);
    }
    else {
      this.toIgnore.push(toToggle);
    }
    console.log(this.toIgnore);
  }

}
