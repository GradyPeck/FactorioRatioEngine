import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipebankService } from './recipebank.service';

@Injectable({
  providedIn: 'root'
})
export class CheckCsvGuard implements CanActivate {
  constructor (private recipeBank : RecipebankService, private router : Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCsv();
  }

  checkCsv () : boolean {
    if (this.recipeBank.recipes.length > 0) {
      return true;
    }
    else {
      this.router.navigate(['/csv']);
      return false;
    }
  }
  
}
