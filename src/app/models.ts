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
  // Legacy schedule kept for backward compatibility. New data may provide `variants` instead.
  schedule?: ScheduleItem[];
  // Optional list of alternative plans for the same day (A/B/...)
  variants?: Variant[];
}

export interface Photo {
  url: string;
  caption?: string;
}

export interface TripPoint {
  time: string;
  description: string;
  photos?: Photo[];
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

// Variant support: an alternative plan for a Day. Kept optional and additive to preserve
// backward compatibility. Authoring guidance: prefer explicit ids ("a","b","usj").
export interface Variant {
  id: string;
  label?: string;          // human-friendly label, e.g. "A — USJ"
  description?: string;    // short description shown in selector or tooltip
  schedule: TripPoint[];   // schedule for this variant
  recommended?: boolean;   // hint which variant is recommended
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
