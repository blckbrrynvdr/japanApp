import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripConfig } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly configUrl = 'assets/trip-config.json';

  constructor(private readonly http: HttpClient) {}

  getTripConfig(): Observable<TripConfig> {
    return this.http.get<TripConfig>(this.configUrl);
  }
}
