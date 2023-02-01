import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{

   constructor(private product: ProductService){ }

    ngOnInit(): void {
      this.product.productList().subscribe((result => {
        console.warn(result);
        
      }))
    }
}
