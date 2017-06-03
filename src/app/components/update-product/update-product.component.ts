import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { IProducto } from "app/jgaval.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public product;
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("anda por aqui");
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.product = {
          producto_id: params['producto_id'],
          producto_nombre: params['producto_nombre'],
          producto_descrip: params['producto_descrip'],
          producto_vunitario: params['producto_vunitario'],
          producto_proveedor_id: params['producto_proveedor_id'],
          producto_marca_id: params['producto_marca_id'],
          producto_imagen: params['producto_imagen'],
          producto_cantidad: params['producto_cantidad']
        };
        console.log(this.product.producto_nombre);
      });
  }

}
