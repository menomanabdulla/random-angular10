import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() hero;
  
  constructor() { 
    console.log(this.hero)
  }

  ngOnInit(): void {

  }

}
