import { Routes } from '@angular/router';
import { HomeLandingComponent } from './landing/homelanding/homelanding.component';
import { SugerenciaComponent } from './gestion/sugerencia/sugerencia.component';
import { ProveedorComponent } from './logistica/proveedor/proveedor.component';
import { InventarioComponent } from './logistica/inventario/inventario.component';
import { ProyectoComponent } from './operaciones/proyecto/proyecto.component';
import { ClienteComponent } from './operaciones/cliente/cliente.component';
import { ReqinsumosComponent } from './operaciones/reqinsumos/reqinsumos.component';
import { LoginComponent } from './landing/login/login.component';
import { HomeInicioComponent } from './inicio/homeinicio/homeinicio.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full'},
    { path: 'landing', component: HomeLandingComponent},
    { path: 'sugerencia', component: SugerenciaComponent},
    { path: 'proveedor', component: ProveedorComponent},
    { path: 'inventario', component: InventarioComponent},
    { path: 'proyecto', component: ProyectoComponent},
    { path: 'cliente', component: ClienteComponent},
    { path: 'reqinsumos', component: ReqinsumosComponent},
    { path: 'login', component: LoginComponent},
    { path: 'inicio', component: HomeInicioComponent},
];
