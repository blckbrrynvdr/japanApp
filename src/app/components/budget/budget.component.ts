import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Budget } from '../../../app/models';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent {
  @Input() budget!: Budget;

  protected get totalPlanned(): number {
    return this.budget.items.reduce((sum, item) => sum + Number(item.planned || 0), 0);
  }

  protected get totalActual(): number {
    return this.budget.items.reduce((sum, item) => sum + Number(item.actual || 0), 0);
  }
}
