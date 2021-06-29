import { Component, OnInit } from '@angular/core';
import { Guest } from 'app/guest/guest';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
 
})

export class UserComponent implements OnInit {
  public  user: Guest = new Guest()

constructor(private service: LoginService) { }

  ngOnInit() {
    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));
    this.user=recuperarStorage;
    }
    
   

  update() {
    if(this.user.name&&this.user.password&&this.user.userCity&&this.user.userCountry&&this.user.address&&this.user.rol){
    this.service.updateUser(this.user).subscribe(data => {
        console.log(data);
      }, error => alert(error));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Actualizado correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));
      recuperarStorage=this.user;
      localStorage.setItem("datosSesion", JSON.stringify(recuperarStorage));
 
    }
    else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Validar campos vacios',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }  
}
