import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {MonitoringWidgetComponent} from "../../components/monitoring-widget/monitoring-widget.component";
import {TaskListComponent} from "../../components/task-list/task-list.component";
import {LogsListComponent} from "../../components/logs-list/logs-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MonitoringWidgetComponent, TaskListComponent, LogsListComponent]
})
export class HomePageModule {}
