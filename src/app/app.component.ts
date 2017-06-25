import { Component } from '@angular/core';

import { Task } from 'app/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private currentTask = new Task(null, false);
  tasks: Task[] = [];

  addTask() {
    let task = new Task(this.currentTask.content, this.currentTask.completed);
    this.tasks.push(task)
    this.currentTask.content = null;
  }

}
