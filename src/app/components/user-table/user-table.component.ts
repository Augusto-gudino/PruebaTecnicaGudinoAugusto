import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../services/user.service';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

// Importamos los modulos necesarios de primeng y angular core para crear el componente de la tabla de usuarios 
@Component({
  selector: 'app-user-table',
 
  imports: [CommonModule, TableModule, FormsModule, InputTextModule],
  templateUrl: 'user-table.component.html',
  styleUrls: ['user-table.component.css'],
 
})


// Este componente muestra una tabla de usuarios con funcionalidad de filtrado
export class UserTableComponent {
  @Input() users: User[] = [];
  filterValue: string = '';
  //Propiedad para almacenar el valor del filtro
  get filteredUsers(): User[] {
    const filter = this.filterValue.toLowerCase();


    //Filtramos los usuarios por nombre o ciudad segun el texto ingresado en el input
    return this.users.filter(user =>
      user.name.toLowerCase().includes(filter) ||
      user.address.city.toLowerCase().includes(filter)
    );
  }
}

