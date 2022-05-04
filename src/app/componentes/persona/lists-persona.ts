import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lists-persona',
  templateUrl: './lists-persona.html',
  styleUrls: ['./lists-persona.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private personaService: PersonaService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.personaService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.personaService.delete(id).subscribe(
      data => {

        this.cargarProductos();
      },
      err => {

      }
    );
    }
  }
