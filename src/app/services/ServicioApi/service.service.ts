import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../Modelo/Producto';


@Injectable()
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url='https://serviciodarkpizza-production.up.railway.app/producto/api/v1';

  getProductos(){
    return this.http.get<Producto[]>(this.Url+"/all");
  }
  createProducto(producto:Producto){
    //return this.http.post<Producto>(this.Url+"/save",JSON.stringify(producto));
    return this.http.post<Producto>(this.Url+"/save",producto);
  }
  getProductoId(id:number){
    console.log(id)
    return this.http.get<Producto>(this.Url+"/find/"+id);
  }
  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/update/"+producto.id,producto);
  }
  deleteProducto(producto:Producto){
    return this.http.get<String>(this.Url+"delete/"+producto.id);
  }
}
