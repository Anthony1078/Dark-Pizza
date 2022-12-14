import { Component, OnInit } from '@angular/core';
import { Producto } from '../Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from '../services/ServicioApi/service.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  producto: Producto = new Producto();

  file: File;

  uploadImageForm!: FormGroup;
  profileImage: any;
  Imageloaded: boolean = false;

  constructor(
    private fb: FormBuilder,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.uploadImageForm = this.fb.group({
      Descipcion: String,
      Nombre: String,
      Precio: String,
      Stock: String,
      Image: [''],
    });
  }

  imageUpload(event: any) {
    var file = event.target.files.length;
    for (let i = 0; i < file; i++) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.profileImage = event.target.result;
        this.changeDetector.detectChanges();
      };
      reader.readAsDataURL(event.target.files[i]);
    }
  }
  handleImageLoad() {
    this.Imageloaded = true;
  }
  onSubmit() {
    var Image = this.profileImage; //La imagen en Base64
    //console.log(Image);
    this.producto.imagen = Image;
    console.log(this.producto);

    this.service.createProducto(this.producto).subscribe((data) => {
      alert('Se Agrego con Exito...!!!');
      this.router.navigate(['inicio']);
    });
  }
}
