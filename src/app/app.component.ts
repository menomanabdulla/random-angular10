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
  //Ng-Conditional statement
  /*
    Condition in Angular
      1. Make If Condition
      2. Make If else Condition
      3. Make Condition with string
      4. Make elseif Condition
      5. Make Conditon with property Binding
  */

  //1. Make If Condition
  //2. Make If else Condition
  show = false;
  toogleBLock(){
    this.show = !this.show;
  }
  //3. Make Condition with string
  //4. Make elseif Condition
  showText = 'yes'
  toogleBLock2(){
    this.showText = this.showText == 'yes' ? 'no' : 'yes';
  }
  //5. Make Conditon with property Binding
  color = 'blue'

  //Ng Switch Case statement
  /*
      1. Make a property color
      2. Show data acording to color name
      3. Switch case
  */
  myColor = 'red'


    //Ng For Loop
  /*
      1. Make a Array
      2. Apply for-loop with it
      3. Make a array with object
      4. Apply for loop with it table
  */
}

