import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleTask()
      .subscribe((v) => (v = this.showAddTask = v));
  }

  onSubmit() {
    if (!this.text) return;
    const newTask = { text: this.text, day: this.day, reminder: this.reminder };
    this.text = this.day = '';
    this.reminder = false;

    this.addTask.emit(newTask);
  }
}
