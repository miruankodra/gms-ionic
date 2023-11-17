import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-monitoring-widget',
  templateUrl: './monitoring-widget.component.html',
  styleUrls: ['./monitoring-widget.component.scss'],
})
export class MonitoringWidgetComponent  implements OnInit {

  @Input() type?: 'monitor' | 'control';
  @Input() unit?: 'temperature' | 'air_humidity' | 'soil_humidity';
  @Input() control?: 'window' | 'pump' | 'fan' | 'sprayer' | 'heater';

  ionIcon?: string;

  constructor() { }

  ngOnInit() {
    this.setIcon();
  }

  setIcon(){
    if (this.type === 'monitor') {
      switch (this.unit){
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
    } else {
      switch (this.control){
        case 'pump':
          this.ionIcon = 'pump-50.png';
          break;
        case 'fan':
          this.ionIcon = 'fan-96.png';
          break;
        case 'window':
          this.ionIcon = 'window-100.png';
          break;
        case 'sprayer':
          this.ionIcon = 'sprayer-64.png';
          break;
        case 'heater':
          this.ionIcon = 'heater-60.png';
          break;
      }
    }


  }

}
