import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../Modelo/Producto';
import { ServiceService } from '../services/ServicioApi/service.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  producto :Producto =new Producto();
  //prueba :String = "Hola";
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id_producto =localStorage.getItem("id");
    this.service.getProductoId(id_producto as any).subscribe(data=>{
      this.producto=data;
      console.log(this.producto);
    })

  }

  onSubmit(producto :Producto) {
    console.log("Actualiza");
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["inicio"]);
    })
  }
}
