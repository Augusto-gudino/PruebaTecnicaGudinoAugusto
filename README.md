
## Prueba Técnica - Angular 19

## Objetivo

Construir una aplicación Angular 19 que consuma una API externa (JSONPlaceholder), muestre los datos de usuarios en una tabla usando una librería visual (PrimeNG) y permita filtrarlos por nombre o ciudad. Esta prueba evalúa el consumo de servicios, uso de Observables, componentes standalone, y manejo de entrada/salida entre componentes.

---

## Tecnologías Utilizadas

- **Angular 19** (con standalone components)
- **PrimeNG** (para la tabla y estilos)
- **JSONPlaceholder API** (https://jsonplaceholder.typicode.com/users)
- **Vite** (como bundler moderno para Angular)

---

## Estructura del Proyecto


src/
│
├── app/
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── components/
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   └── home.component.html
│   │   └── user-table/
│   │       ├── user-table.component.ts
│   │       ├── user-table.component.html
│   │       └── user-table.component.css
│   └── services/
│       └── user.service.ts


---

## Instalación y Ejecución

1. Se debe clonar el repositorio:

   git clone https://github.com/tuusuario/angular-user-table.git
   

2. Instale dependencias:
   
   npm install
   

3. Ejecute la aplicación:
   
   npm run dev
   

---

## Funcionalidades

- Consumo de API externa con `HttpClient`
- Presentación de datos en tabla con PrimeNG (`<p-table>`)
- Filtro en tiempo real por nombre y ciudad
- Componentes standalone y reutilizables
- Estilos personalizados con CSS
- Paginación


---

## Conceptos Aplicados

- **Inyección de dependencias**: El `UserService` se inyecta en el componente `HomeComponent`.
- **Observables y suscripción**: Se usa `.subscribe()` para obtener datos desde un servicio HTTP.
- **@Input()**: Paso de datos entre componentes (`Home → UserTable`).
- **PrimeNG**: Para renderizar una tabla interactiva con filtros, estilos y paginación.

---

## Capturas de Pantalla
Vista de la tabla


![TablaConUsuarios](https://github.com/user-attachments/assets/a97906f0-6f64-477a-9aca-c6d8e8bfd763)

Vista de la tabla con filtro aplicado

![ImagenDeLaTablaConFiltroAplicado](https://github.com/user-attachments/assets/2d3977f4-d9cd-4b28-a345-94e2e78184ef)



---

Augusto Leonel Gudiño Oviedo
- GitHub: [@Augusto-gudino](https://github.com/Augusto-gudino)
- Proyecto creado como práctica técnica para Angular 19.

---
