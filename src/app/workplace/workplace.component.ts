import { Component, OnInit } from '@angular/core';

interface ItoDo {
  id:number,
  version:string[],
  name:string,
  vendor:string,
  description:string,
}
@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent implements OnInit {
  todos:ItoDo[];
  searchText:string;

  constructor() { }
  get filterTodos():ItoDo[] {
    if(this.searchText.trim().length === 0){
      return this.todos;
    }
    return this.todos.filter( (item:ItoDo) => item.name.toLowerCase().includes(this.searchText.toLowerCase()) || item.description.toLowerCase().includes(this.searchText.toLowerCase()))
  }
  ngOnInit() {
    this.searchText = '';
    this.todos = [
      {
        id:0,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPrttg0',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem Lorem LoremLoremLoremLoremLoremLorem Lorem LoremLoremLoremLoremLoremLorem Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:1,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:2,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:3,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:4,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:5,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'EWVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:6,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:7,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'UIYPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:8,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'UR40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:10,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:11,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:12,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:13,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:14,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
    ];
  }

}
