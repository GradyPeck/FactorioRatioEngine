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

  crunchy : number[] = [0];
  crunchers : denseIng[][] = [[]];
  grandTotal : denseIng[];

  public addCruncher () {
    this.crunchers.push([]);
    this.crunchy.push(0);
  }

  //most of this code is currently unused
  /*it was for removing ANY calculator, not just the last one, but when one was removed the DISPLAYED
    calculators wouldn't reflect the removal - the LAST would disappear and the "removed" one would remain
    visually in place while the DATA was updated correctly and the grand total changed accordingly. 
  */
  public removeCruncher (toWhack: number) {
    this.crunchy.splice(toWhack, 1);
    for (let i = toWhack; i < this.crunchers.length - 1; i++) {
      this.crunchers[i] = this.crunchers[i + 1];
    }
    this.crunchers.pop();
    this.updateTotal(-1);
  }

  public updateTotal (id: number, newResults?: denseIng[]) {
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
          this.grandTotal.push({name: this.crunchers[i][z].name, quantity: this.crunchers[i][z].quantity});
        }
      }
    }
  }

}
