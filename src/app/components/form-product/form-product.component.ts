import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { JgavalService, IProducto } from 'app/jgaval.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  @Input() public update: boolean;
  @Input() public create: boolean;
  @Input() public product: IProducto;
  @ViewChild('files') imagen: any;
  image: any;
  constructor(public jgavalService: JgavalService) { }

  ngOnInit() {

    if (!this.product) {
      this.initEmptyProduct();
    } else if (this.product) {
      console.log(this.product);
    }
  }
  onSubmit(nombre, descripcion, vunitario, cantidad, proveedor, marca, imagen){


    if (this.create){
      this.jgavalService.saveProdruct(
        nombre, descripcion, vunitario, cantidad, proveedor, marca, this.image
      ).subscribe(res => {
        console.log('error en formulario' + res);
      });
    }else if (this.update) {
      this.jgavalService
        .updateProuct(this.product.producto_id, nombre, descripcion, vunitario, cantidad, proveedor, marca, this.image)
        .subscribe(res => {
          console.log(res);
        });
    }
  }

  fileChangeEvent(fileInput: any){
       const _file: FileList = fileInput.srcElement.files;
       this.image = _file.item(0);
        console.log(_file.item(0));
     }


  private initEmptyProduct() {
    this.product = {
      producto_id: '',
      producto_nombre: '',
      producto_cantidad: 0,
  producto_marca_id: 0,
      producto_proveedor_id: 0,
      producto_vunitario: 0,
      producto_descrip: "",
      producto_imagen: ""
    };
  }
}
