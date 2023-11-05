import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: User = {
    firstname: "Miruan",
    lastname: "Kodra",
    username: "m.kodra"
  }
  constructor() { }

  ngOnInit() {
  }

}
