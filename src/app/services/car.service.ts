import { Car } from './../models/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CarResponseModel} from '../models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:7133/api/Cars/getall';
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<CarResponseModel> {
   return this.httpClient
      .get<CarResponseModel>(this.apiUrl);
  }
}
