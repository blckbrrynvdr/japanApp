import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { ScheduleItem } from '../../../app/models';

@Component({
  selector: 'app-schedule-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent {
  @Input() item!: ScheduleItem;
  protected openDetails = signal(false);

  protected toggleDetails(): void {
    this.openDetails.set(!this.openDetails());
  }

  protected openPhoto(): void {
    if (this.item.photoUrl) {
      window.open(this.item.photoUrl, '_blank');
    }
  }

  protected openMap(): void {
    if (this.item.googleMapsUrl) {
      window.open(this.item.googleMapsUrl, '_blank');
    }
  }
}
