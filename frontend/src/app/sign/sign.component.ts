import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'app/guest/guest';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  public  user: Guest = new Guest()
  public tittle:string="Crear usuario"
  constructor(private router: Router, private service: LoginService) { }
   username: any;
  password: any;
  name: any;
  usercountry: any;
  usercity: any;
  address: any;
  rol: any;

  ngOnInit(): void {

  }

  sign(): void{
    /*if (this.username === undefined || this.password === undefined || this.name === undefined || this.usercountry === undefined || this.usercity === undefined || this.address === undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes diligenciar todos los campos',

      })
    }
    else {*/

   // let usuario = new Guest();
    //  usuario.create(username, password, name, usercountry, usercity, address, rol)
     // usuario.login(username, password)
      //this.service.getLogin(username, password).subscribe(data => {
    //    console.log('prueba que llega al data'+data);
    //    if (data === null) {
     //     console.log(usuario)
          this.service.saveUser(this.user).subscribe(user => {
            console.log(user);

          }, error => alert(error));
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `¡El usuario ${this.user.username} fue registrado correctamente!`,
            showConfirmButton: false,
            timer: 4000
          })
          this.router.navigate(['/guest']);
        }
      /*  else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario ya existe!, intentalo nuevamente',

          })
        }*/

     // }
    //)
    
  }


