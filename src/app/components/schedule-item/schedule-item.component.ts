import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal, TemplateRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiSwipe, tuiClamp, type TuiSwipeEvent } from '@taiga-ui/cdk';
import { TuiPreview, TuiPreviewDialogService } from '@taiga-ui/kit/components/preview';
import { ScheduleItem } from '../../../app/models';

@Component({
  selector: 'app-schedule-item',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiPreview, TuiSwipe],
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent {
  private readonly previewService = inject(TuiPreviewDialogService);

  @Input() item!: ScheduleItem;
  protected readonly preview = viewChild<TemplateRef<unknown>>('preview');

  protected openDetails = signal(false);
  protected previewIndex = 0;

  protected toggleDetails(): void {
    this.openDetails.set(!this.openDetails());
  }

  protected openPreview(index: number): void {
    this.previewIndex = index;
    this.previewService.open(this.preview() ?? '').subscribe();
  }

  protected onSwipe(swipe: TuiSwipeEvent): void {
    const photos = this.item.photos;
    if (!photos?.length) { return; }
    if (swipe.direction === 'left') {
      this.previewIndex = tuiClamp(this.previewIndex + 1, 0, photos.length - 1);
    }
    if (swipe.direction === 'right') {
      this.previewIndex = tuiClamp(this.previewIndex - 1, 0, photos.length - 1);
    }
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