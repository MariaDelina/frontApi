import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interface/persona';
@Component({
  selector: 'persona',
  templateUrl: 'nuevapersona.component.html'
})
export class PersonaComponent implements OnInit{

nombre: string;
titulo: string;

constructor(
  private personaService: PersonaService,
  private toastr: ToastrService,
  private router: Router
){}

ngOnInit():void{

}
onCreate():void{{
  const bpersona = new Producto(this.nombre, this.titulo);
  this.personaService.save(bpersona).subscribe(
    data => {
      this.router.navigate(['/']);
    },
    err => {
      this.router.navigate(['/']);
    }
  );
}}
}
