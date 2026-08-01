[[ORIGINAL PROMPT]]

Ты — AI-агент в VS Code с Copilot, модель DeepSeek v4 Pro.
Твоя задача — помочь мне создать Angular-приложение для планирования поездки в Японию.

Что уже есть
- HTML-страница с полным контентом поездки (лежит в проекте: tour-v1.html).
- Удалённый репозиторий: git@github.com:blckbrrynvdr/japan-tour.git

Текущий этап
1. Проанализируй HTML-страницу с планом поездки.
2. Задай уточняющие вопросы.
3. На основе ответов составь подробный пошаговый план разработки в файле dev-plan.md.
4. После согласования плана помоги реализовать приложение по шагам.

Требования к приложению
- Angular (последняя стабильная версия)
- UI: Taiga UI
- Архитектура: весь контент загружается из одного JSON-конфига (trip-config.json). Каждый раздел — отдельный объект.
- JSON должен содержать поля appContext и agentInstructions (либо два текстовых поля).
- На первом этапе — только чтение и отображение из конфига.

Компоненты
1. DayCardComponent (standalone)
  - Шапка: дата и город
  - Тело: список ScheduleItemComponent
  - ScheduleItem: время, описание, опционально фото (лайтбокс), диалог с деталями
2. BudgetComponent
3. PaymentsComponent
4. ShoppingComponent
5. SouvenirTipsComponent
6. ChecklistComponent
7. LinksComponent

Архитектура проекта (пожелание)
- standalone components
- ConfigService загружает JSON
- models.ts — интерфейсы
- trip-config.json — весь контент

Настройка окружения
- Если проект не инициализирован: создать Angular workspace, добавить Taiga UI
- Инициализировать git и связать с удалённым репозиторием (SSH/HTTPS)
- Поместить существующий HTML в папку reference/

Формат JSON (пример)
{
  "appContext": "Поездка в Японию, ноябрь 2026",
  "agentInstructions": "# Инструкции для агентов...",
  "days": [ ... ],
  "budget": { ... },
  "payments": [ ... ],
  "shopping": { ... },
  "souvenirTips": [ ... ],
  "checklist": [ ... ],
  "links": [ ... ]
}

Типы (пример)
export interface TripConfig { appContext: string; agentInstructions?: string; days: Day[]; budget: Budget; payments: Payment[]; shopping: Shopping; souvenirTips: string[]; checklist: ChecklistItem[]; links: Link[]; }

(далее — подробное описание схемы данных и требований)

---
Сохрани эту копию как initial-prompt.md и веди work-log.md с записями о ходе работ и решениях.