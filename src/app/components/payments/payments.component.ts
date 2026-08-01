import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Payment } from '../../../app/models';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  @Input() payments: Payment[] = [];
}
