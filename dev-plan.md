Dev plan — Japan Trip Planner

Цель
- Построить Angular-приложение на основе существующего HTML-макета tour-v1.html.
- Загружать весь контент из одного JSON-конфига (src/assets/trip-config.json).
- Использовать Taiga UI и standalone-компоненты.

Текущие шаги
1. Инициализация Angular workspace в папке проекта. Выполнено.
2. Установка Taiga UI и базовая настройка: установлены @taiga-ui/core, @taiga-ui/kit, @taiga-ui/icons, @taiga-ui/cdk, @angular/animations, less. Выполнено.
3. Конфигурация Taiga UI: импорт TuiRoot, подключение Taiga LESS темы.
4. Копирование исходного tour-v1.html в reference/tour-v1.html. Выполнено.

Дальнейшие шаги
5. Создать src/app/models.ts с интерфейсами TripConfig, Day, ScheduleItem, Budget, Payment, Shopping, ChecklistItem, Link.
6. Создать src/assets/trip-config.json на основе содержимого tour-v1.html.
7. Реализовать src/app/services/config.service.ts для загрузки конфигурации.
8. Создать standalone-компоненты:
   - DayCardComponent
   - ScheduleItemComponent
   - BudgetComponent
   - PaymentsComponent
   - ShoppingComponent
   - SouvenirTipsComponent
   - ChecklistComponent
   - LinksComponent
9. Интегрировать данные в AppComponent и заменить заглушку контентом.
10. Проверить приложение визуально с ng serve и обеспечить чтение данных из JSON.
11. Инициализировать git remote и подготовить первый коммит/репозиторий.

Файлы проекта
- src/app/models.ts
- src/assets/trip-config.json
- src/app/services/config.service.ts
- src/app/components/*
- reference/tour-v1.html
- dev-plan.md
