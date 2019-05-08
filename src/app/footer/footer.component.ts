import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  infrastructure:object[] = [
    {
      checked:false,
      text:'Data centers',
    },
    {
      checked:false,
      text:'VNFs',
    },
    {
      checked:false,
      text:'VNFCs',
    },
    {
      checked:false,
      text:'Servers',
    },
    {
      checked:false,
      text:'Сalculation results',
    },
  ]
  ngOnInit() {
  }

}
