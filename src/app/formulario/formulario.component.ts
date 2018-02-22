import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../services/producto-service.service';
import { Router } from '@angular/router';
import "rxjs/add/operator/map";
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit {

  item;

  unidades = [{id: 1, nombre: 'Lacteos'}, {id: 2, nombre: 'cereales'}, {id: 3, nombre: 'Muebles'}, {id: 4, nombre: 'Bebidas'}, {id: 5, nombre: 'Other'}];
  myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'yyyy-mm-dd',
    };

  constructor(private crudProducto: ProductoServiceService, private router: Router) {
    this.item = {pro_descripcion: null, pro_marca: null};
  }

  guardar() {
    const formData = new FormData();
    formData.append('pro_descripcion', this.item.pro_descripcion);
    formData.append('pro_cantidad', this.item.pro_cantidad);
    formData.append('pro_observaciones', this.item.pro_observaciones);
    formData.append('pro_categoria', this.item.pro_categoria);
    formData.append('pro_pventa', this.item.pro_pventa);
    this.crudProducto.guardar(formData)
    .map((response) => response.json())
    .subscribe(
      (data) => {
        if (data === true) {
          console.log('Registro Guardado con Exito');
          this.router.navigate(['listado']);
          // this.router.navigate(['listado'], { queryParams: { page: this.page + 1 } })
        } else {
          console.log('Error al registrar');
          console.warn(data);
        }
      },
      (error) => console.log(error)
    );
  }

  ngOnInit() {
  }

}
