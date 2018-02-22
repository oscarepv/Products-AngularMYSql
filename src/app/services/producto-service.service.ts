import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductoServiceService {
  constructor(private http: Http) {}
  listar() {
    return this.http.get('http://localhost:8081/api/producto.php?opcion=1');
  }
  detallar(id: number) {
    return this.http.get('http://localhost:8081/api/producto.php?opcion=2&id=' + id);
  }
  guardar(item: Object) {
    return this.http.post('http://localhost:8081/api/producto.php?opcion=3', item);
  }
  modificar(item: Object) {
    return this.http.post('http://localhost:8081/api/producto.php?opcion=4', item);
  }
  eliminar(id: number) {
    return this.http.get('http://localhost/api/producto.php?opcion=5&id=' + id);
  }
}
