import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserve } from 'app/reserve/reserve';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';
import { Rate } from './rate';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css' ] 
  


  
  
})
export class RateComponent implements OnInit {
   public  rate: Rate = new Rate()
  public tittle:string="Califica tu Huesped Guest"
  comentarioGuest: any;
  idGuest: any;
  photoExpGuest: any;
  note: any;
 
  constructor(private service: LoginService, private activatedRoute: ActivatedRoute, private router: Router) { }
  

  ngOnInit(): void {
    this.cargarIdHouse();
  }


  cargarIdHouse(): void{
    this.activatedRoute.params.subscribe(params =>{
      let idHouse1 = params['idHouse']
      if(idHouse1){
        this.rate.idHouse=idHouse1;
      }
      console.log('este es el usuario que califica´'+this.service.user.id)
      
    })
    
   
    }

  calificar(){
   console.log('este es el usuario que califica´'+this.service.user.id)
    this.rate.idGuest=this.service.user.id;
    this.rate.commentGuest=this.comentarioGuest;
    this.rate.photoExp=this.photoExpGuest;
    this.rate.note=this.note

    this.service.saveRatingHouse(this.rate).subscribe(data => {
      this.rate=data
      console.log(data);
    }, error => alert(error));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Calificacion de Casa Host realizada correctamente',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(['/admin/table']);


  }

}
