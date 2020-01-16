import { Injectable } from '@angular/core';
import { Observable } from 'nilsApp/node_modules/rxjs';
import { WeatherForecast } from '../models/WeatherForecast';
import { HttpClient } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class WeatherForecastService {

  	url: string = "http://localhost:59508/weatherforecast";

  	constructor(private http: HttpClient) { }

	getForecasts():Observable<WeatherForecast[]> {
		return this.http.get<WeatherForecast[]>(this.url);
	}
}
