import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './services/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  token:any;
constructor( private authService: AuthguardService, private router: Router ){}

  canActivate(): boolean{
    if(!this.authService.getToken()){
      this.router.navigateByUrl('/login');
    }
    this.token = this.authService.getToken();
    if(this.token != null){
      return true;
    }
    return false;
  }
  
}
