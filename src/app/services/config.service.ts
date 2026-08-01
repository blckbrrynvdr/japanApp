import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { TripConfig } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly configUrl = 'assets/trip-config.json';
  private readonly config$!: Observable<TripConfig>;

  constructor(private readonly http: HttpClient) {
    this.config$ = this.http.get<TripConfig>(this.configUrl).pipe(
      shareReplay({ bufferSize: 1, refCount: true }),
    );
  }

  getTripConfig(): Observable<TripConfig> {
    return this.config$;
  }
}
