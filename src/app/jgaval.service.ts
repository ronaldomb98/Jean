import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';
@Injectable()
export class JgavalService {

  url: string = "http://jeanbd.jgaval.co/public/producto";
  constructor(
    public http: Http
  ) { }

  getProducts(){
    return this.http.get(this.url)
    .do(d=>{
    console.log("Solicitano Informacion")
    }).map(this.MapRespone)
  }

  MapRespone(data): IProducto[]{
    if(data && data._body ) return JSON.parse(data._body);
  }
}


export interface IProducto{
  producto_id: number | string;
  producto_nombre: string;
  producto_descrip: string;
  producto_vunitario: number;
  producto_imagen?: string;
  producto_cantidad: number;
  producto_proveedor_id: number | string;
  producto_marca_id: number | string;
  created_at: string | Date;
  updated_at: string | Date;

}