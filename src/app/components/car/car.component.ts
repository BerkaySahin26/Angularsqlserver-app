import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { response } from 'express';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VatAddedPipe } from "../../pipes/vat-added.pipe";
import { FilterPipePipe } from "../../pipes/filter-pipe.pipe";
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [MatSelectModule, MatCardModule, MatButtonModule, MatToolbarModule, RouterOutlet, FormsModule, HttpClientModule, CommonModule, VatAddedPipe, FilterPipePipe,ToastrModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
cars:Car[] = [];
filterText = '';
dataLoaded = false;
constructor(private CarService:CarService, private activatedRoute:ActivatedRoute , private toastr:ToastrService, private cartService:CartService){}

ngOnInit(): void {
   this.activatedRoute.params.subscribe(params =>
   {
    if(params["brandId"])
    {
      this.getCarsByBrand(params["brandId"])
    }else
    {
      this.getCars();

    }
   }
   )
  }
  getCars(){
    this.CarService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
    console.log();
  }

  getCarsByBrand(brandId:number) {
    this.CarService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
    console.log();
  }
  addToCart(car:Car){
    if(car.id===1)
    {
      this.toastr.error("Hata,bu ürün sepete eklenemez")
    }else
    {
      this.toastr.success("Sepete eklendi", car.carName)
      this.cartService.addToCart(car);
    }

  }

}
