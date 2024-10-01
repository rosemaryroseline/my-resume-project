import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
const isLoggedIn=this.checkStatus();

if(!isLoggedIn){
  alert('please do sign-in')
  this.router.navigate(['/home']);
  return true;
}
return false;
    }
    checkStatus():boolean{
      return false;
    }
}
