import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-souvenir-tips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './souvenir-tips.component.html',
  styleUrls: ['./souvenir-tips.component.scss']
})
export class SouvenirTipsComponent {
  @Input() souvenirTips: string[] = [];
}
