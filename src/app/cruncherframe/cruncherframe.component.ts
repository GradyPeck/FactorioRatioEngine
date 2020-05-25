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

  //most of this code is currently unused
  /*it was for removing ANY calculator, not just the last one, but when one was removed the DISPLAYED
    calculators wouldn't reflect the removal - the LAST would disappear and the "removed" one would remain
    visually in place while the DATA was updated correctly and the grand total changed accordingly. 
  */
  public removeCruncher(toWhack: number) {
    this.crunchy.splice(toWhack, 1);
    for (let i = toWhack; i < this.crunchers.length - 1; i++) {
      this.crunchers[i] = this.crunchers[i + 1];
    }
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
          this.grandTotal.push({ name: this.crunchers[i][z].name, quantity: this.crunchers[i][z].quantity, prodType: this.crunchers[i][z].prodType });
        }
      }
    }
  }

  public perfectRatio(results: denseIng[]): denseIng[] {
    let safeResults = this.safeCopy(results);
    let resStrings: string[] = [];
    for (let result of safeResults) {
      if (result.name.includes("plate") == false && result.name.includes("ore") == false && result.name.includes("Crude") == false && result.name.includes("Water") == false) resStrings.push(this.tooly.dec2frac(result.quantity));
    }
    let resFracs: number[] = [];
    for (let resulty of resStrings) {
      if (resulty.includes("/")) {
        let fracTail: number = Number(resulty.slice(resulty.indexOf("/") + 1));
        if (resFracs.includes(fracTail) == false) resFracs.push(fracTail);
      }
    }
    //cull duplicate denominators
    /*for (let i = 0; i < resFracs.length; i++) {
      for (let z = i + 1; z < resFracs.length; z++) {
        if (resFracs[i] == resFracs[z]) {
          //remove result b
          resFracs.splice(z, 1);
          //back up the index to avoid skipping
          z--;
        }
      }
    }*/
    //multiply results by denominators
    let perfTotals: denseIng[] = this.safeCopy(results);
    for (let total of perfTotals) {
      for (let frac of resFracs) {
        total.quantity = total.quantity * frac;
      }
    }
    console.log(perfTotals);
    let factors: number[][] = [];
    //list all the prime factors of 
    for (let totaly of perfTotals) {
      if (totaly.name.includes("plate") == false && totaly.name.includes("ore") == false && totaly.name.includes("Crude") == false && totaly.name.includes("Water") == false) {
        factors.push(this.tooly.primeFactor(totaly.quantity));
        //console.log(totaly.name + ", subfactors: " + this.tooly.primeFactor(totaly.quantity));
      }
    }
    //console.log("factors: " + factors);
    //multiply doubled-up primes to catch perfect squares, cubes, etc
    //find all distinct prime factors
    let distinctFactors: number[] = [];
    for (let faccy of factors) {
      console.log(faccy);
      for (let i = 0; i < faccy.length; i++) {
        let faccount: number = 1;
        for (let z = 0; z < faccy.length; z++) {
          if (i != z && faccy[i] == faccy[z]) faccount++;
        }
        for (let y = 1; y <= faccount; y++) {
          console.log(y);
          if(!distinctFactors.includes(Math.pow(faccy[i], y))) distinctFactors.push(Math.pow(faccy[i], y));
          if(y > 1) faccy.push(Math.pow(faccy[i], y));
        }
      }
      /*for (let factum of faccy) {
        if (!distinctFactors.includes(factum)) distinctFactors.push(factum);
      }*/
    }
    console.log("factors: " + factors);
    console.log("distinct prime factors: " + distinctFactors);
    //filter down to only common distinct prime factors
    let dcpFactors: number[] = [];
    for (let facto of distinctFactors) {
      let commonFactor: boolean = true;
      for (let faccy of factors) {
        if (faccy.includes(facto) == false) commonFactor = false;
      }
      if (commonFactor) dcpFactors.push(facto);
    }
    console.log("dcp factors: " + dcpFactors);
    //multiply those together to get the reduction factor
    let dcpfProduct: number = 1;
    for (let df of dcpFactors) {
      dcpfProduct = dcpfProduct * df;
    }
    console.log("distinct common factor product: " + dcpfProduct);
    for (let totaloo of perfTotals) {
      totaloo.quantity = totaloo.quantity / dcpfProduct;
    }
    return perfTotals;
  }

  public safeCopy(toCopy: denseIng[]): denseIng[] {
    let toReturn: denseIng[] = [];
    for (let item of toCopy) {
      let newItem: denseIng = { name: item.name, quantity: item.quantity, prodType: item.prodType };
      toReturn.push(newItem);
    }
    return toReturn;
  }
}
