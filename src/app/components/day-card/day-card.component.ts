import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { Day, Variant, ScheduleItem } from '../../../app/models';
import { ScheduleItemComponent } from '../schedule-item/schedule-item.component';

@Component({
  selector: 'app-day-card',
  standalone: true,
  imports: [CommonModule, ScheduleItemComponent],
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent implements OnInit {
  @Input() day!: Day;

  // selected variant id for this day (runtime only)
  protected selectedVariantId = signal<string | null>(null);

  ngOnInit(): void {
    // restore persisted selection per-date
    try {
      const raw = localStorage.getItem('japanApp.selectedVariants');
      const map = raw ? JSON.parse(raw) : {};
      const id = map?.[this.day?.date];
      if (id) {
        this.selectedVariantId.set(id);
      } else if (this.day?.variants && this.day.variants.length === 1) {
        // auto-select single variant
        this.selectedVariantId.set(this.day.variants[0].id);
      }
    } catch {
      // ignore storage errors
    }

    // Debug: log day object to verify variants at runtime
    try {
      // eslint-disable-next-line no-console
      console.debug('DayCard init for date', this.day?.date, 'variants:', this.day?.variants);
    } catch {}
  }

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

  protected get variants(): Variant[] | undefined {
    return this.day?.variants;
  }

  protected selectVariant(variantId: string | null): void {
    this.selectedVariantId.set(variantId);
    try {
      const raw = localStorage.getItem('japanApp.selectedVariants');
      const map = raw ? JSON.parse(raw) : {};
      if (variantId) {
        map[this.day.date] = variantId;
      } else {
        delete map[this.day.date];
      }
      localStorage.setItem('japanApp.selectedVariants', JSON.stringify(map));
    } catch {
      // ignore
    }
  }

  protected get displayedSchedule(): ScheduleItem[] {
    // priority: selected variant -> first variant -> legacy schedule -> empty
    const variants = this.day?.variants;
    if (variants && variants.length > 0) {
      const sel = this.selectedVariantId();
      if (sel) {
        const found = variants.find(v => v.id === sel);
        if (found) {
          return found.schedule;
        }
      }
      // fallback to first variant
      return variants[0].schedule;
    }

    return this.day?.schedule ?? [];
  }
}
