import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserve } from 'app/reserve/reserve';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    reserves: any;
   private today = new Date().getTime()
 
    

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
        this.service.getReservebyUsernameGuest(this.service.user.username).subscribe(data => {
        this.reserves = new Reserve;
        this.reserves=data; 
        
         console.log(data)
        })
       
  }

  ver(idHouse1){
    console.log('este es el id house cuando hago click es : '+idHouse1)
    this.service.getIdHouse(idHouse1)
    this.router.navigate(['/admin/reserve/'+idHouse1]);
  }
  /*calificaR(idHouse1){
    console.log('este es el id house cuando hago click es : '+idHouse1)
    this.service.getIdHouse(idHouse1)
    this.router.navigate(['/admin/reserve/'+idHouse1]);
  }*/
  eliminar(idReserve1){
    Swal.fire({
      title: '¿Estás seguro de eliminar la reserva?',
      text: "Es posible que no encuentras disponibilidad en las mismas fechas",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarla!'
    }).then((result) => {
      this.service.eliminarReserva(idReserve1).subscribe()
      if (result.isConfirmed) {
        Swal.fire(
          'Reserva Eliminada!',
          '',
          'success'
        )
      }
    })
      
  }

}
