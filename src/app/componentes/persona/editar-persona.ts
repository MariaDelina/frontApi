import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.html',
  styleUrls: ['./editar-persona.css']
})
export class EditarProductoComponent implements OnInit {

  persona: Producto = null;

  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.personaService.update(id, this.persona).subscribe(
      data => {

        this.router.navigate(['/']);
      },
      err => {

        this.router.navigate(['/']);
      }
    );
  }

}
