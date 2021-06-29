import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { MapsComponent } from '../../maps/maps.component';
import { HouseComponent } from 'app/house/house.component';
import { ReserveComponent } from 'app/reserve/reserve.component';
import { RateComponent } from 'app/rate/rate.component';
import { IconsComponent } from 'app/icons/icons.component';

export const AdminLayoutRoutes: Routes = [
 
    { path: 'admin',          component: HomeComponent },
    { path: 'dashboard/:usarname',      component: HomeComponent },
    { path: 'dashboard',      component: HomeComponent },
    { path: 'reserve',        component: ReserveComponent },
    { path: 'user',           component: UserComponent },
    { path: 'rate/:idReserve', component: RateComponent },
    { path: 'reserve/:idHouse', component: ReserveComponent },
    { path: 'user/', component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'house',          component: HouseComponent },
    { path: 'icons',          component: IconsComponent },
];
