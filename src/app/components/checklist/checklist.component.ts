import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChecklistItem } from '../../../app/models';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  @Input() checklist: ChecklistItem[] = [];
}
