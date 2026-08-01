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

  protected get dayOfWeek(): string {
    if (!this.day?.date) {
      return '';
    }

    const [day, month, year] = this.day.date.split('-').map((part) => Number(part));
    const date = new Date(year, month - 1, day);
    if (Number.isNaN(date.getTime())) {
      return '';
    }

    return date.toLocaleDateString('ru-RU', { weekday: 'long' });
  }
}
