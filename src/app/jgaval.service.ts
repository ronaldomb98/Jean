import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs';
import { Observable } from "rxjs/Observable";


export interface IProducto{
  producto_id: number | string;
  producto_nombre: string;
  producto_descrip: string;
  producto_vunitario: number;
  producto_imagen?: string;
  producto_cantidad: number;
  producto_proveedor_id: number | string;
  producto_marca_id: number | string;
  created_at?: string | Date;
  updated_at?: string | Date;

}


@Injectable()
export class JgavalService {

  url: string = "http://jeanbd.jgaval.co/";
  constructor(
    public http: Http
  ) { }

  // Defino funcion para traer los productos
  getProducts(){
    return this.http.get(this.url+'public/producto') // Hago la peticion get a la url de juliancho
    .do(d=>{
    console.log("Solicitano Informacion") //notifico al programa que estoy haciendo la peticion
    }).map(this.darFormato) // le doy formato
  }

  saveProdruct(nombre, desc, vunitario, cantidad, proveedor, marca, imagen){
    var fd = new FormData();
    // Take the first selected file
    fd.append("imagen", imagen);
    fd.append("nombre", nombre);
    fd.append("desc", desc);
    fd.append("vunitario", vunitario);
    fd.append("proveedor", proveedor);
    fd.append("marca", marca);
    fd.append("cantidad", cantidad);
    return this.http.post(
      this.url+'public/producto',
      fd).map((res) => res.json()).catch(err => Observable.throw(err));

  }

  updateProuct(id, nombre, desc, vunitario, cantidad, proveedor, marca, imagen){
    var fd = new FormData();
    // Take the first selected file
    fd.append("imagen", imagen);
    fd.append("nombre", nombre);
    fd.append("desc", desc);
    fd.append("vunitario", vunitario);
    fd.append("proveedor", proveedor);
    fd.append("marca", marca);
    fd.append("cantidad", cantidad);
    return this.http.put(
      this.url + 'public/producto/' + id, fd)
      .map((res) => res.json())
      .catch(err => Observable.throw(err));

  }

  darFormato(data): IProducto[]{ //recibo datos de url
    console.log(data); // imprimo en consola
    if (data && data._body ) // le pregunto si viene información
    return JSON.parse(data._body); //le retorno arreglo de productos en json
  }
}


