
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Importamos el modulo de http para crear el servicio de usuarios
export interface User {
  name: string;
  email: string;
  address: {
    city: string;
  };
}

// Este servicio se encarga de obtener los usuarios desde la API de jsonplaceholder
// y de proporcionar los datos a los componentes que lo necesiten
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}