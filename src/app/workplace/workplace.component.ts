import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent implements OnInit {
  todos:object[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id:0,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:1,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:2,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:3,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:4,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:5,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:6,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:7,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:8,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:10,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:11,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:12,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:13,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:14,
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
    ];
  }

}
