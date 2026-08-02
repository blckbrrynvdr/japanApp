import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TuiRoot } from '@taiga-ui/core/components/root';
import { ConfigService } from './services/config.service';
import { DayCardComponent } from './components/day-card/day-card.component';
import { BudgetComponent } from './components/budget/budget.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { SouvenirTipsComponent } from './components/souvenir-tips/souvenir-tips.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { LinksComponent } from './components/links/links.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    TuiRoot,
    DayCardComponent,
    BudgetComponent,
    PaymentsComponent,
    ShoppingComponent,
    SouvenirTipsComponent,
    ChecklistComponent,
    LinksComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  private readonly configService = inject(ConfigService);
  protected readonly config$ = this.configService.getTripConfig();
}
