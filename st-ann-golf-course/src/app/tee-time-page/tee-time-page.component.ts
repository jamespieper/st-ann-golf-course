import { Component, inject, OnInit } from '@angular/core';

import { NgFor, NgIf} from '@angular/common';

import { TeeTimeComponent } from '../tee-time/tee-time.component';
import { FilterPanelComponent } from "../filter-panel/filter-panel.component";
import { BookTimePanelComponent } from "../book-time-panel/book-time-panel.component";

import { TeeTime } from '../teetime';
import sampleTeeTimeData from '../../assets/data/sample-tee-times.json';

@Component({
  selector: 'app-tee-time-page',
  imports: [TeeTimeComponent, FilterPanelComponent, BookTimePanelComponent, NgFor],
  templateUrl: './tee-time-page.component.html',
  styleUrl: './tee-time-page.component.css'
})
export class TeeTimePageComponent {

  teeTimes: TeeTime[] = sampleTeeTimeData;

  


  constructor() {

  }
  
}
