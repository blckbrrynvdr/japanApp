import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TuiRoot } from '@taiga-ui/core/components/root';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TuiRoot, TuiButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('japan-app');
}
