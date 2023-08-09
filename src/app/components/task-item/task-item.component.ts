import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskComponent {
  @Input() task: Task | undefined;
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() toggleReminder = new EventEmitter<Task>();

  faTimes = faTimes;

  onDelete(task: Task | undefined) {
    this.deleteTask.emit(task);
  }

  onToggleReminder(task: Task | undefined) {
    this.toggleReminder.emit(task);
  }
}
