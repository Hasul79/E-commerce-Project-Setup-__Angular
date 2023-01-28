import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService, private router: Router) {}
  showLogin= false
  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data:signUp):void{
    console.warn(data)
    this.seller.userSignUp(data)
    // .subscribe((result) => {
      // console.warn(result)
    //   if(result){
    //     this.router.navigate(['seller-home'])
    //   }
    // });
  }
    login(data:signUp):void{
    console.warn(data)
  
  }


  openLogin(){
    this.showLogin=true
  }

  openSignUp(){
    this.showLogin=false
  }
}
