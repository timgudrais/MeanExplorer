import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  providers: [ ToDoListService ]
})
export class ToDoListComponent implements OnInit {
  title = 'To do';

  toDos;
  constructor(toDoListService: ToDoListService) {
      this.toDos = toDoListService.getToDos();
  }

  ngOnInit() {
  }

}
