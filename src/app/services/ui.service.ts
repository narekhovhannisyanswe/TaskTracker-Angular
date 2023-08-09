import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  showTask: boolean = false;
  subject = new Subject<any>();

  constructor() {}

  toggleAddTask() {
    this.showTask = !this.showTask;
    this.subject.next(this.showTask);
  }

  onToggleTask(): Observable<any> {
    return this.subject.asObservable();
  }
}
