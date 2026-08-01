import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Shopping } from '../../../app/models';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
  @Input() shopping!: Shopping;

  protected get totalEstimated(): number {
    return this.shopping.items.reduce((sum, item) => sum + Number(item.estimatedPrice || 0), 0);
  }

  protected get totalActual(): number {
    return this.shopping.items.reduce((sum, item) => sum + Number(item.actualPrice || 0), 0);
  }

  protected get progress(): number {
    return this.shopping.limit ? Math.min(100, Math.round((this.totalActual / this.shopping.limit) * 100)) : 0;
  }
}
