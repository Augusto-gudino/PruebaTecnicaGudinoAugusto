import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// Importamos el componente principal de la aplicacion para crear las rutas
// y el modulo de rutas de angular para crear la configuracion de las rutas
export const routes: Routes = [
    { path: '', component: HomeComponent },
];
