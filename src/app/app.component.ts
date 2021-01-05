import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alerts: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

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

  data=[
    'piter',
    'sam',
    'noman'
  ]
  data2=[
    {
      name: 'noman',
      age: '25',
      mail: 'doian@mail.com'
    },
    {
      name: 'abdulla',
      age: '21',
      mail: 'doian@mail.com'
    },
    {
      name: 'sam',
      age: '18',
      mail: 'doian@mail.com'
    },
    {
      name: 'tonny',
      age: '19',
      mail: 'doian@mail.com'
    },
  ]

  //Working with a Simple Form
  /*
      1. Make a Simple from in angular
      2. Import form module in module file
      3. Make a form
      4. Make a function and get from value
  */
  getFormValues(value){
    console.warn(value);
  }

  //Make A Header and Footer
  /*
      1. Create Header Component
      2. Create Footer Componet
      3. Use Both component
      4. Add Style
  */

  //Add bootstrap in angular 10
   /*
    1. Run command for install bootstrap
    2. Try with some bootstrap examples
    3. we check and use code form official website of ng-bootstrap
  */
  //Add Material UI
    /*
      What is Material UI
      Install Material UI - ng add @angular/material
      select some when while installing Material
      Use some component with example 
      Such as Slider and Button
    */
  
}

