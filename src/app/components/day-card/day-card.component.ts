import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Day } from '../../../app/models';
import { ScheduleItemComponent } from '../schedule-item/schedule-item.component';

@Component({
  selector: 'app-day-card',
  standalone: true,
  imports: [CommonModule, ScheduleItemComponent],
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent {
  @Input() day!: Day;
}
