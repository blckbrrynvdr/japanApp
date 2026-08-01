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

export interface TripPoint {
  time: string;
  description: string;
  photoUrl?: string;
  googleMapsUrl?: string;
  durationMinutes?: number;
  type?: 'museum' | 'shopping' | 'food' | 'transport' | 'viewpoint' | 'temple' | string;
  priority?: number | 'must' | 'high' | 'medium' | 'low';
  reservationRequired?: boolean;
  completed?: boolean;
  weatherDependent?: boolean;
  estimatedCost?: number;
  tags?: string[];
  status?: 'planned' | 'visited' | 'skipped';
  personalNote?: string;
  details?: string;
}

export type ScheduleItem = TripPoint;

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
