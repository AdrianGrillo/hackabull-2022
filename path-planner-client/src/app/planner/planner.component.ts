import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  
  Days = [
    { id: 1, Day: 'MON' },
    { id: 2, Day: 'TUES' },
    { id: 3, Day: 'WED' },
    { id: 4, Day: 'TH' },
    { id: 5, Day: 'FRI' },
    { id: 6, Day: 'SAT' },
    { id: 7, Day: 'SUN' },
  ]

  AMPM = [
    { id: 1, time: 'AM'},
    { id: 2, time: 'PM'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addForm() {
    
  }
}
