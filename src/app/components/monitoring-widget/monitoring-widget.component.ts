import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-monitoring-widget',
  templateUrl: './monitoring-widget.component.html',
  styleUrls: ['./monitoring-widget.component.scss'],
})
export class MonitoringWidgetComponent  implements OnInit {

  @Input() type?: 'temperature' | 'air_humidity' | 'soil_humidity';

  ionIcon?: string;

  constructor() { }

  ngOnInit() {
    this.setIcon();
  }

  setIcon(){
    switch (this.type){
      case 'temperature':
        this.ionIcon = 'thermometer-outline';
        break;
      case 'air_humidity':
        this.ionIcon = 'humidity-gauge-icon.png';
        break;
      case 'soil_humidity':
        this.ionIcon = 'soil-humidity-icon.png';
        break;
    }
  }

}
