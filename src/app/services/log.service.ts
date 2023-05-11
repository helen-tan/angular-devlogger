import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: '', text: '', date: null });
  selectedLog = this.logSource.asObservable(); // makes this an Observable

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   { id: "1", text: "Generated components", date: new Date('12/26/2023 12:54:23') },
    //   { id: "2", text: "Added Bootstrap", date: new Date('12/27/2023 9:33:23') },
    //   { id: "3", text: "Added logs component", date: new Date('12/27/2023 12:54:23') }
    // ]
    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    // Check if local storage has anthing
    if (localStorage.getItem('logs') === null) {
      this.logs = [];
    } else {
      const logString = localStorage.getItem('logs');
      this.logs = logString !== null && JSON.parse(logString);
    }

    // Sort by date
    return of(this.logs.sort((a, b) => {
      return b.date - a.date;
    }));
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);

    // Add to local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  updateLog(log: Log) {
    // Remove the outdated log
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    })
    // Add new log to the top
    this.logs.unshift(log);

    // Update to local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  deleteLog(log: Log) {
    // Remove the passed in log
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    })

    // Delete from local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  clearState() {
    this.stateSource.next(true);
  }
}
