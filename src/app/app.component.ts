import { Component } from '@angular/core';

import { Task } from 'app/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Cards';

   tasks = [
    new Task(
      "Buy a monkey",
      false
    ),
    new Task(
      "Get Lunch",
      false
    )
  ]

}
