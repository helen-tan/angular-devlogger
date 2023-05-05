import { Component, OnInit } from '@angular/core';

import { Log } from 'src/app/models/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs!: Log[];

  constructor() {}

  ngOnInit() {
    this.logs = [
      { id: "1", text: "Generated components", date: new Date('12/26/2023 12:54:23') },
      { id: "2", text: "Added Bootstrap", date: new Date('12/27/2023 9:33:23') },
      { id: "3", text: "Added logs component", date: new Date('12/27/2023 12:54:23') }
    ]
  }
}
