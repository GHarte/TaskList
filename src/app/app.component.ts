import { Component } from '@angular/core';

import { Task } from 'app/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Cards';

  private currentTask = new Task(null, false);
  tasks = [
    new Task(
      "Top up Leap Card",
      false
    ),
    new Task(
      "Get Lunch",
      false
    ),
    new Task(
      "Buy an iMac",
      false
    ),
    new Task(
      "Charge Phone",
      false
    )
  ]

  addTask() {
    let task = new Task(this.currentTask.content, this.currentTask.completed);
    this.tasks.push(task)
    this.currentTask.content = null;

  }

}
