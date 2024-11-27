import { ChangeDetectionStrategy, Component, model } from '@angular/core';



import {MatCardModule} from '@angular/material/card'
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider'; 
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { MatDatepickerModule } from '@angular/material/datepicker'
import { provideNativeDateAdapter } from '@angular/material/core';




@Component({
  selector: 'app-filter-panel',
  imports: [MatCardModule, MatDatepickerModule, MatChipsModule, MatSliderModule, MatButtonModule, MatIconModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FilterPanelComponent {

  selected = model<Date | null>(null);

}
