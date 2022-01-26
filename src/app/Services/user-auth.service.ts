import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isloggedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.isloggedSubject=new BehaviorSubject<boolean> (this.isUserLogged);
   }

  login(userName: string, password: string)
  {
    // Call login API, and get Access Token
    let usrToken='123456789';
    localStorage.setItem("token", usrToken);
    this.isloggedSubject.next(true);
  }

  logout()
  {
    localStorage.removeItem("token");
    this.isloggedSubject.next(false);
  }

  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('token'))? true: false
  }

  getloggedStatus(): Observable<boolean>
  {
    return this.isloggedSubject.asObservable();
  }
}
