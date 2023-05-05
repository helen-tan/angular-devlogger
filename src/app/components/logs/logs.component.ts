import { Component, OnInit } from '@angular/core';

import { LogService } from 'src/app/services/log.service';

import { Log } from 'src/app/models/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs!: Log[];

  constructor(private logService: LogService) {}

  ngOnInit() {
   this.logs = this.logService.getLogs();
  }
}
