import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import {NavController} from "@ionic/angular";

register();

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  login() {
    this.navCtrl.navigateForward('home')
  }

}
