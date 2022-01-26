import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLogged:boolean;
  constructor(private authService:UserAuthService) {
    this.isUserLogged=this.authService.isUserLogged;
    console.log(this.isUserLogged);
   }

  ngOnInit(): void {
    // this.isUserLogged=this.authService.isUserLogged;
    this.authService.getloggedStatus().subscribe(status=>{
      this.isUserLogged=status;
      console.log(this.isUserLogged);
    });
  }

}
