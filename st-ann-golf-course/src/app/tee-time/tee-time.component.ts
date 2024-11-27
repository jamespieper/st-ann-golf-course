import { Component, Input } from '@angular/core';

import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-tee-time',
  imports: [MatCardModule],
  templateUrl: './tee-time.component.html',
  styleUrl: './tee-time.component.css'
})
export class TeeTimeComponent {

  @Input() time = '';
  @Input() slotsLeft = '';
  @Input() price = '';
}
