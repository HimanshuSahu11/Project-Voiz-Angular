import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {
  public inputType:string='password'
  constructor() { }

  ngOnInit(): void {
  }
  public login(event:any):void{
    if(event.target.checked){
      this.inputType='text'
    }
    else{
      this.inputType='password'
    }
  }
}
