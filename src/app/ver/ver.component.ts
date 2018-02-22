import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMyDpOptions } from "mydatepicker";
import { ProductoServiceService } from '../services/producto-service.service';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-ver',
  templateUrl: '../formulario/formulario.component.html',
})
export class VerComponent implements OnInit {
  unidades = [{id: 1, nombre: 'Lacteos'}, {id: 2, nombre: 'cereales'}, {id: 3, nombre: 'Muebles'}, {id: 4, nombre: 'Bebidas'}, {id: 5, nombre: 'Other'}];
  item;

  myDatePickerOptions: IMyDpOptions = {
    // OPCIONES DEL DATEPICKER
    dateFormat: 'yyyy-mm-dd',
  };

  constructor(private state: ActivatedRoute, private router: Router, private crud: ProductoServiceService) {
    this.item = {}; // Hay que inicializar la variable en blanco
    this.crud.detallar(this.state.snapshot.params.id)
    .map((response) => response.json())
    .subscribe((data) => {
      this.item = data[0]
    });
  }

  guardar(){
    let formData = new FormData();
    formData.append('idsel', this.state.snapshot.params.id);
    formData.append('pro_descripcion', this.item.pro_descripcion);
    formData.append('pro_cantidad', this.item.pro_cantidad);
    formData.append('pro_observaciones', this.item.pro_observaciones);
    formData.append('pro_categoria', this.item.pro_categoria);
    formData.append('pro_pventa', this.item.pro_pventa);

    this.crud.modificar(formData)
    .map((response) => response.json())
    .subscribe(
      (data) => {
        if(data === true){
          console.log("Registro Guardado con Exito");
          this.router.navigate(['listado']);
          //this.router.navigate(['listado'], { queryParams: { page: this.page + 1 } })
        }else{
          console.log("Error al registrar");
          console.warn(data);
        }
      },
      (error) => console.log(error)
    );
  }

  ngOnInit() {
  }

}
