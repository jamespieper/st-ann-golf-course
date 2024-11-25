import { Component } from '@angular/core';

import { TeeTimeComponent } from '../tee-time/tee-time.component';
import { FilterPanelComponent } from "../filter-panel/filter-panel.component";
import { BookTimePanelComponent } from "../book-time-panel/book-time-panel.component";

@Component({
  selector: 'app-tee-time-page',
  imports: [TeeTimeComponent, FilterPanelComponent, BookTimePanelComponent],
  templateUrl: './tee-time-page.component.html',
  styleUrl: './tee-time-page.component.css'
})
export class TeeTimePageComponent {

}
