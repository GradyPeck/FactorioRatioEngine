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
          this.grandTotal.push({ name: this.crunchers[i][z].name, quantity: this.crunchers[i][z].quantity });
        }
      }
    }
  }

  public perfectRatio(results: denseIng[]): denseIng[] {
    let safeResults = this.safeCopy(results);
    let resStrings: string[] = [];
    for (let result of safeResults) {
      if (result.name.includes("plate") == false && result.name.includes("ore") == false && result.name != "Crude oil" && result.name != "Water" && result.name != "Coal" && result.name != "Stone") resStrings.push(this.tooly.dec2frac(result.quantity));
    }
    let resFracs: number[] = [];
    for (let resulty of resStrings) {
      if (resulty.includes("/")) {
        let fracTail: number = Number(resulty.slice(resulty.indexOf("/") + 1));
        if (resFracs.includes(fracTail) == false) resFracs.push(fracTail);
      }
    }
    //multiply results by denominators
    let perfTotals: denseIng[] = this.safeCopy(results);
    for (let total of perfTotals) {
      for (let frac of resFracs) {
        total.quantity = this.tooly.fixFloat(total.quantity * frac);
      }
    }
    //console.log(perfTotals);
    let factors: number[][] = [];
    //list all the prime factors
    for (let totaly of perfTotals) {
      if (totaly.name.includes("plate") == false && totaly.name.includes("ore") == false && totaly.name != "Crude oil" && totaly.name != "Water" && totaly.name != "Coal" && totaly.name != "Stone") {
        factors.push(this.tooly.primeFactor(totaly.quantity));
        //console.log(totaly.name + ", subfactors: " + this.tooly.primeFactor(totaly.quantity));
      }
    }
    let greatDivisor: number = 1;
    for (let i = 0; i < factors[0].length; i++) {
      let faccount: number = 1;
      for (let z = 1; z < factors.length; z++) {
        for (let w = 0; w < factors[z].length; w++) {
          if (factors[z][w] == factors[0][i]) {
            factors[z].splice(w, 1);
            faccount++;
            break;
          }
        }
      }
      if (faccount == factors.length) {
        greatDivisor = greatDivisor * factors[0][i];
      }
    }
    //console.log(factors);
    for (let tot of perfTotals) {
      tot.quantity = tot.quantity / greatDivisor;
    }
    return perfTotals;
  }

  //copies an array without creating any aliases
  public safeCopy(toCopy: denseIng[]): denseIng[] {
    let toReturn: denseIng[] = [];
    for (let item of toCopy) {
      let newItem: denseIng = { name: item.name, quantity: item.quantity };
      toReturn.push(newItem);
    }
    return toReturn;
  }
}
