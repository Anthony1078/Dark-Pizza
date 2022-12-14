import { Component, OnInit } from '@angular/core';
import { Producto } from '../Modelo/Producto';
import { ServiceService } from '../services/ServicioApi/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: Producto[];
  msgBackend: Object;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProductos()
    .subscribe(data => {
      this.productos = data;
      console.log(this.productos )
    });
  }

  Editar(producto:Producto):void{
    console.log(producto)
    console.log(producto.id.toString())
    localStorage.setItem("id",producto.id.toString());
    this.router.navigate(["editar"]);
  }

  Delete(producto:Producto){
    //console.log(producto);
    var opcion = confirm("Seguro de eliminar el producto "+producto.id);

    if (opcion == true) {

      this.service.deleteProducto(producto).subscribe(data=>{
      console.log(data)
      this.productos=this.productos.filter(p=>p!==producto);
      alert("Producto eliminado.");
      })

    } else {
      console.log("No se eliminó");
    }


  }


}
