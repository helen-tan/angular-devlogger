import { Component, OnInit } from '@angular/core';

import { LogService } from 'src/app/services/log.service';

import { Log } from 'src/app/models/log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string= "";
  text: string = "";
  date: any;

  constructor(private logService: LogService) {}

  ngOnInit() {
    // Subscribe to the selected log observable
    this.logService.selectedLog.subscribe(log => {
      if (log.id !== '') {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
      console.log(log);
    })
  }
}
