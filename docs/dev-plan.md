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
5. Создать src/app/models.ts с интерфейсами TripConfig, Day, ScheduleItem, Budget, Payment, Shopping, ChecklistItem, Link. Выполнено.
6. Создать src/assets/trip-config.json на основе содержимого tour-v1.html. Выполнено.
7. Реализовать src/app/services/config.service.ts для загрузки конфигурации. Выполнено.
8. Создать standalone-компоненты:
   - DayCardComponent
   - ScheduleItemComponent
   - BudgetComponent
   - PaymentsComponent
   - ShoppingComponent
   - SouvenirTipsComponent
   - ChecklistComponent
   - LinksComponent
   Выполнено.
9. Интегрировать данные в AppComponent и заменить заглушку контентом. Выполнено.
10. Проверить приложение визуально с ng serve и обеспечить чтение данных из JSON.
11. Инициализировать git remote и подготовить первый коммит/репозиторий.

Файлы проекта
- src/app/models.ts
- src/assets/trip-config.json
- src/app/services/config.service.ts
- src/app/components/*
- reference/tour-v1.html
- docs/dev-plan.md
- docs/initial-prompt.md
- docs/work-log.md
- agents.md

Текущий статус
- Angular проект собран и работает локально и в статическом релизе.
- Taiga UI настроен, загрузка JSON проходит успешно.
- Файлы документации перемещены в `docs/`.

Новые задачи
- Добавить в ScheduleItem поле `googleMapsUrl` для карты.
- Показать день недели в заголовке DayCard по дате.
- Обновить README.md ссылкой на GitHub Pages и списком документации.

Приоритетные правки v2
1. Пересобрать основной JSON-конфиг как «Trip Guide» v2, а не править текущий файл по частям.
   - Сделать структуру маршрута более детализированной: не по одной записи на день, а по множеству локаций/мест.
   - Учесть актуальные изменения: Gotokuji, Yanaka, KITTE Garden, Ochanomizu, Nakano, отправку багажа, скорректировать Universal и Нару.
2. Расширить модель `ScheduleItem` или переименовать её в `Place`/`TripPoint`.
3. Добавить к элементу маршрута новые поля:
   - `durationMinutes?: number`
   - `type?: 'museum' | 'shopping' | 'food' | 'transport' | 'viewpoint' | 'temple' | string`
   - `priority?: number | 'must' | 'high' | 'medium' | 'low'`
   - `reservationRequired?: boolean`
   - `completed?: boolean`
   - `weatherDependent?: boolean`
   - `estimatedCost?: number`
   - `tags?: string[]`
   - `status?: 'planned' | 'visited' | 'skipped'`
   - `personalNote?: string`
4. Обновить `trip-config.json` к формату v2 как персональный путеводитель:
   - детальные описания;
   - примерные длительности;
   - ссылки на карты и фото;
   - приоритеты и необходимость бронирования;
   - статус и заметки.
5. Сконцентрироваться на удобном использовании как путеводителя, а не только как заметочника.

Важно:
- перед началом правок нужно согласовать структуру, чтобы не делать крупный diff впустую.

Предложения по улучшению
- Добавить диалоговое окно / lightbox для деталей расписания в ScheduleItemComponent.
- Поддержать предпросмотр фото в лёгком модальном окне.
- Усовершенствовать мобильную вёрстку и адаптивные сетки.
- Разделить бюджет и покупки на отдельные секции с прогресс-барами.
- Ввести маршрутизацию по дням и быстрый фильтр по статусам.
- Реализовать в следующем этапе редактирование конфига и бэкап данных.

Текущее состояние и ближайшие шаги
- Исправлена проблема с BOM/кодировкой в `src/assets/trip-config.json`, приложение успешно собирается.
- Основная задача сейчас: привести модель и JSON к версии v2 путеводителя, не править старый конфиг частями.
- После этого проверить отображение новых полей в `ScheduleItemComponent` и `DayCardComponent`.
- Затем добавить дополнительные возможности: поиск/фильтр по тегам, статусам и дате, улучшить мобильную адаптивность.
