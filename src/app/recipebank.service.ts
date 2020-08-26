import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecipebankService {

  constructor() { }

  recipes : IRecipe[] = [];

}

export interface IRecipe {
  name : string;
  ingredients : Object;
  products : Object;
  data : Object;
  time : number;
}

export interface denseIng {
  name : string;
  quantity : number;
  producer : string;
}
