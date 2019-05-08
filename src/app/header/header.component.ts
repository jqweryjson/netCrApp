import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { } 

  ngOnInit() {
  }
  icons:String[] = ['star.png','Search.png','dindon.png','more.png']
}
