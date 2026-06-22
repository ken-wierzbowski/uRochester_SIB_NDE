import { Component, OnInit } from '@angular/core';
//import { JsonPipe } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
//import { NgIf } from '@angular/common';

@Component({
  selector: 'ill-user',
  standalone: true,
  //imports: [JsonPipe, NgIf],
  template: ``
})
export class IllUserComponent implements OnInit {
  
  decodedToken: any;
  userName?: string;
  userGroup?: string;


  ngOnInit() {
    const token = sessionStorage.getItem('primoExploreJwt'); // change key if needed
    if (token) {
      try {
        this.decodedToken = jwtDecode<any>(token);
        this.userName = this.decodedToken?.userName ?? null;
        this.userGroup = this.decodedToken?.userGroup ?? null;
      } catch (err) {
        console.error('Invalid token:', err);
      }
    }
  }
}
