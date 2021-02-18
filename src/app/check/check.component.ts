import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit ,OnChanges{

  placeholdername="enter name";
  placeholderpassword="enter password"
  type="password";
  constructor(private http:HttpClient){}
  name(event:any){
    console.log(event);
  }
   userArray:any=[];
  ngOnInit() {
   
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response=>{
    this.userArray=response;
    console.log(this.name);

    });
  }
  ngOnChanges(){
   
  }

}
