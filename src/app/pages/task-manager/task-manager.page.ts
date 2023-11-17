import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.page.html',
  styleUrls: ['./task-manager.page.scss'],
})
export class TaskManagerPage implements OnInit {

  taskStatusIcon?: "bulb-outline" | "checkmark" | "checkmark-done";
  constructor() { }

  ngOnInit() {
    this.taskStatusIcon = "checkmark-done"
  }

  getTaskIconColor() {
    return (this.taskStatusIcon === "bulb-outline") ? 'warning' : (this.taskStatusIcon === "checkmark") ? 'primary' : 'success';
  }

}
