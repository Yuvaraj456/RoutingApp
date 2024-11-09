import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { SecondComponent } from '../Component/second/second.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ThirdComponent } from '../Component/third/third.component';

@Injectable({
  providedIn:'root'
})

export class canLeaveGuard implements CanDeactivate<ThirdComponent> {


  canDeactivate(component: ThirdComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
      console.log(currentRoute);
      console.log(currentState);
      console.log(nextState);

    if(component.myForm.dirty && !confirm("Are you sure to leave the page, without saving data..."))
      {
        //if form modified + also user confirms no then dont leave the page
        return false;
      }
      else
      {
        //if form not modified, then true, and if form modified + user confirms yes then true
        return true;
      }
  }
  
 
}
