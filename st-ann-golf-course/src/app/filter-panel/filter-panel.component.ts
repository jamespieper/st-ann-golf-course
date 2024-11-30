import { ChangeDetectionStrategy, Component, model } from '@angular/core';



import {MatCardModule} from '@angular/material/card'
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider'; 
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker'
import { provideNativeDateAdapter } from '@angular/material/core';




@Component({
  selector: 'app-filter-panel',
  imports: [MatCardModule, MatDatepickerModule, MatChipsModule, MatSliderModule, MatButtonModule, MatIconModule, MatTimepickerModule, MatFormFieldModule, MatInputModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FilterPanelComponent {

  selected = model<Date | null>(null);

  //time



  //slider
  
  

}
