import { Component, OnInit } from '@angular/core';

interface ItoDo {
  id:number,
  showversion:boolean,
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
  onlySelected:boolean;
  searchText:string;

  constructor() { }
  get filterTodos():ItoDo[] {
    // if(this.onlySelected) 
    if(this.searchText.trim().length === 0 && !this.onlySelected){
      return this.todos;
    }
    return this.todos.filter( 
      (item:ItoDo) => (item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                       item.description.toLowerCase().includes(this.searchText.toLowerCase())) &&
                       item.showversion === this.onlySelected
    )
  }
  ngOnInit() {
    this.searchText = '';
    this.onlySelected = false;

    this.todos = [
      {
        id:0,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPrttg0',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem Lorem LoremLoremLoremLoremLoremLorem Lorem LoremLoremLoremLoremLoremLorem Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:1,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:2,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:3,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:4,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:5,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'EWVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:6,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:7,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'UIYPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:8,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'UR40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:10,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:11,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:12,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:13,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
      {
        id:14,
        showversion:false,
        version:['v1.001','v1.002','v1.003','v1.004','v1.005'],
        name:'RVPCE40',
        vendor:'NEC',
        description:'Lorem LoremLoremLoremLoremLoremLorem '
      },
    ];
  }

}
