import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  //calling a function
  Default = 'Bruce';
  getName(name){
    alert(name)
  }
  //get input-text value
  currentVal = "";
  getMyValue(val){
    console.log(val)
    this.currentVal = val;
  }
  //property binding
  propertName= "bruce"
  disableedBox = true
  enableBox(){
    this.disableedBox = false
  }
}
