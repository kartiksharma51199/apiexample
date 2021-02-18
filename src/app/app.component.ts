import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  mouse:boolean;
  isVisible=true;
  userArray:any=[];
  isLoading=false;
 
  constructor(private http:HttpClient){}
  mouseEnter(){
    
    this.mouse=true;
    
 }
 fetch(){
  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response=>{
      this.userArray=response;
      this.isVisible=true;

    });
 }
 send(){
  this.isVisible=false

 }

 mouseLeave(){
  
   this.mouse=false;
 }
}
