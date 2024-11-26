import { ChangeDetectionStrategy, Component, model } from '@angular/core';



import {MatCardModule} from '@angular/material/card'
import {MatChipsModule} from '@angular/material/chips';
import {MatSlider, MatSliderModule} from '@angular/material/slider'; 

import { MatDatepickerModule } from '@angular/material/datepicker'
import { provideNativeDateAdapter } from '@angular/material/core';




@Component({
  selector: 'app-filter-panel',
  imports: [MatCardModule, MatDatepickerModule, MatChipsModule, MatSliderModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FilterPanelComponent {

  selected = model<Date | null>(null);

}
