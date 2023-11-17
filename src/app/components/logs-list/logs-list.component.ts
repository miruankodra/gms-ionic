import { Component, OnInit } from '@angular/core';
import {Log} from "../../models/Log";

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.scss'],
})
export class LogsListComponent  implements OnInit {

  logs: Log[] = [
    {
      time: "5 Nov",
      log: "Planted new seeds in greenhouse bed 1",
      creator: "bot1",
    },
    {
      time: "5 Nov",
      log: "Adjusted temperature and humidity settings",
      creator: "user123",
    },
    {
      time: "4 Nov",
      log: "Watered all plants in the greenhouse",
      creator: "bot2",
    },
    {
      time: "3 Nov",
      log: "Installed new grow lights",
      creator: "user456",
    },
    {
      time: "2 Nov",
      log: "Checked for pests and applied organic insecticide",
      creator: "bot3",
    },
    {
      time: "2 Nov",
      log: "Harvested ripe tomatoes and bell peppers",
      creator: "user789",
    },
    {
      time: "2 Nov",
      log: "Pruned overgrown branches for better airflow",
      creator: "bot4",
    },
    {
      time: "1 Nov",
      log: "Started automated irrigation system",
      creator: "user1011",
    },
    {
      time: "29 Oct",
      log: "Monitored soil moisture levels",
      creator: "bot5",
    },
    {
      time: "25 Oct",
      log: "Shutdown greenhouse systems for the day",
      creator: "user1213",
    },
  ];

constructor() { }

  ngOnInit() {}

}
