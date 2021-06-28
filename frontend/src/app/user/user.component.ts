import { Component, OnInit, Input } from '@angular/core';
import { Guest } from 'app/guest/guest';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  public  user: Guest = new Guest()

constructor(private service: LoginService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));
    this.user=recuperarStorage;
    //this.user=this.service.user
    }
    
   

  update() {
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
}
