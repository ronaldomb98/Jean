import { Component, OnInit } from '@angular/core';
import { JgavalService, IProducto } from "app/jgaval.service";
import { MasonryOptions } from "angular2-masonry";

@Component({
  selector: 'app-jgaval',
  templateUrl: './jgaval.component.html',
  styleUrls: ['./jgaval.component.css']
})
export class JgavalComponent implements OnInit {
bricks = [
     {title: 'Brick 1'},
     {title: 'Brick 2'},
     {title: 'Brick 3'},
     {title: 'Brick 4'},
     {title: 'Brick 5'},
     {title: 'Brick 6'}
   ];

public myOptions: MasonryOptions = { 
  transitionDuration: '0.8s',
  
  
};
  public nameFilter: string = "";
  public Products: IProducto[];
  public _Products: IProducto[];
  constructor(public jgavalService: JgavalService) { }

  ngOnInit() {
    this.jgavalService
    .getProducts()
    .subscribe((_products) => {
      this._Products = this.Products = _products; 
    },err=>{
      console.log(err);
    },()=>{
      console.log("request completed");
    })
  }

  filterProducto(){
    console.log("keying");
    this._Products = this.Products.filter(_product=>{
      if(_product.producto_nombre.indexOf(this.nameFilter) > -1){
        console.log(_product);
        return _product
      }
    });
  }

}
