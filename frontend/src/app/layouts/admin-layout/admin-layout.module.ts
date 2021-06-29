import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';
import { MapsComponent } from 'app/maps/maps.component';
import { AdminLayoutRoutes } from './admin-layout.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCOot306VxUoTqzKp8sm6GRosVADoWf1Ao'})
  ],
  declarations: [
   
    MapsComponent,
      
  ]
})

export class AdminLayoutModule {}
