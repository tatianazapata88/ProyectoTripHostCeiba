import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'app/guest/guest';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html'
})
export class SignComponent implements OnInit {
  public  user: Guest = new Guest()
  public tittle:string="Crear usuario"
  
  constructor(private router: Router, private service: LoginService) { }
 
  ngOnInit(): void {

  }

  sign(): void{
    this.service.saveUser(this.user).subscribe(user => {
        console.log(user);

      }) 
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `¡El usuario ${this.user.username} fue registrado correctamente!`,
        showConfirmButton: false,
        timer: 4000
      })
      this.router.navigate(['/guest']);    }
  }


