import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  name:string;
  @Input() placeholder:string;
  @Input() placeholderpassword:string;
  @Input() type:string="text";
  @Output() nameEmit=new EventEmitter();
  ngOnInit() {
    this.nameEmit.emit(this.name);
  }

  submit(){
    this.nameEmit.emit(this.name);
  }
}
