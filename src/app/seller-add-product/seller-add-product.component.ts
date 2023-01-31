import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit{


   constructor(private product: ProductService) { }

   ngOnInit(): void {
     
   }

   addProductData(data: object){
     console.warn(data);
     this.product.addProduct()
     
   }
}
