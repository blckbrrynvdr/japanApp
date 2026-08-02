import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiPreview } from '@taiga-ui/kit/components/preview';
import { ScheduleItem } from '../../../app/models';

@Component({
  selector: 'app-schedule-item',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiPreview],
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent {
  @Input() item!: ScheduleItem;
  protected openDetails = signal(false);
  protected previewOpen = signal(false);
  protected previewIndex = signal(0);

  protected toggleDetails(): void {
    this.openDetails.set(!this.openDetails());
  }

  protected openPreview(index: number): void {
    this.previewIndex.set(index);
    this.previewOpen.set(true);
  }

  protected closePreview(): void {
    this.previewOpen.set(false);
  }

  protected openMap(): void {
    if (this.item.googleMapsUrl) {
      window.open(this.item.googleMapsUrl, '_blank');
    }
  }

  protected get priorityLabel(): string | undefined {
    if (this.item.priority === undefined || this.item.priority === null) {
      return undefined;
    }

    return typeof this.item.priority === 'number'
      ? `Приоритет ${this.item.priority}`
      : `Приоритет ${this.item.priority}`;
  }
}
