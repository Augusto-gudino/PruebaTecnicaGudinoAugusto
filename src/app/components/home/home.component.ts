import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user.service';
import { UserTableComponent } from '../user-table/user-table.component';

// Importamos los modulos necesarios de angular core y el servicio de usuarios para
// crear el componente principal de la aplicacion
@Component({
  selector: 'app-home',
  imports: [CommonModule, UserTableComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

// Este componente es el componente principal de la aplicacion, donde se cargan los usuarios y se muestran en la tabla
// Se encarga de la logica de la aplicacion y de la comunicacion con el servicio de usuarios
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}

