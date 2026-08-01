export interface TripConfig {
  appContext: string;
  agentInstructions?: string;
  days: Day[];
  budget: Budget;
  payments: Payment[];
  shopping: Shopping;
  souvenirTips: string[];
  checklist: ChecklistItem[];
  links: Link[];
}

export interface Day {
  date: string;          // формат: "ДД-ММ-ГГГГ"
  city: string;
  startLocation?: string;
  endLocation?: string;
  schedule: ScheduleItem[];
}

export interface ScheduleItem {
  time: string;
  description: string;
  photoUrl?: string;
  details?: string;
}

export interface Budget {
  totalLimit: number;
  items: BudgetItem[];
}

export interface BudgetItem {
  category: string;
  planned: number | string;
  actual?: number | string;
  comment?: string;
}

export interface Payment {
  description: string;
  amount: number;
  status: 'paid' | 'planned';
}

export interface Shopping {
  limit: number;
  items: ShoppingItem[];
}

export interface ShoppingItem {
  name: string;
  estimatedPrice: number;
  actualPrice?: number;
  purchased: boolean;
}

export interface ChecklistItem {
  task: string;
  done: boolean;
}

export interface Link {
  title: string;
  url: string;
}
