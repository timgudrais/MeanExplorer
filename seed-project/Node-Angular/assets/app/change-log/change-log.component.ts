import { Component, OnInit } from '@angular/core';
import { ChangeLogService } from './change-log.service';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css'],
  providers: [ ChangeLogService ]
})
export class ChangeLogComponent implements OnInit {
  title = 'Change log'

  changeList;
  constructor(changeListService: ChangeLogService) {
      this.changeList = changeListService.getChangeLog();
  }

  showLog = false;
  toggleShowLog() {
    this.showLog = !this.showLog;
    //this.showLog = !this.showLog;
  }

  ngOnInit() {
  }

}
