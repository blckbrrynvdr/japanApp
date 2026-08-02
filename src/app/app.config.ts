import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideTaiga, tuiIconsProvider } from '@taiga-ui/core';

const X_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path vector-effect="non-scaling-stroke" d="M18 6 6 18"/><path vector-effect="non-scaling-stroke" d="m6 6 12 12"/></svg>`;
const ARROW_LEFT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path vector-effect="non-scaling-stroke" d="m12 19-7-7 7-7"/><path vector-effect="non-scaling-stroke" d="M19 12H5"/></svg>`;
const ARROW_RIGHT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path vector-effect="non-scaling-stroke" d="M5 12h14"/><path vector-effect="non-scaling-stroke" d="m12 5 7 7-7 7"/></svg>`;

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations(),
    provideHttpClient(),
    provideTaiga(),
    tuiIconsProvider({
      '@tui.x': X_ICON,
      '@tui.arrow-left': ARROW_LEFT_ICON,
      '@tui.arrow-right': ARROW_RIGHT_ICON,
    }),
  ]
};
