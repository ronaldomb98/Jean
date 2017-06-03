import { Component, OnInit } from '@angular/core';
import { JgavalService } from "app/jgaval.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  
  constructor(public jgavalService: JgavalService) { }

  ngOnInit() {
  }
  
  

}
