import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'app/guest/guest';
import { Reserve } from 'app/reserve/reserve';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html'
})
export class TypographyComponent implements OnInit {
    reserves: any;
    public  user: Guest = new Guest()
    

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));
    this.user=recuperarStorage;
        this.service.getReservebyUsernameHost(recuperarStorage.username).subscribe(data => {
        this.reserves = new Reserve;
        this.reserves=data; 
        
         console.log(data)
        })
  }

  ver(idHouse1){
    console.log('este es el id house cuando hago click es : '+idHouse1)
    this.service.getIdHouse(idHouse1)
    this.router.navigate(['/admin/reserve'+idHouse1]);
  }

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
