import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor,NgIf, NgStyle } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../interface/product';
import { ProductsService } from '../services/products.service';
@Component({
    standalone: true,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NgClass,NgStyle,NgFor,NgIf,ProductCardComponent]
})
export class HomeComponent implements OnInit {

  products !: Product[];

  constructor(private ProductsService : ProductsService){}

  ngOnInit(){
    this.ProductsService.getProductsList().subscribe((res: any) => {
      // Assuming the response structure is { products: [], total: number, skip: number, limit: number }
      if (res && res.products && res.products.length > 0) {
        this.products = res.products;
        console.log(this.products);
      } else {
        console.error('No products found in the response.');
      }
    })
  }
  trackById(index: number, item: any): number {
    return item.id;
  }
  receiveFromChild(id : string){
    console.log("RECEIVED FROM CHILD, ID" , id)
    // this.games = this.games.filter(game => game.id !== id)
  }
  
 }
