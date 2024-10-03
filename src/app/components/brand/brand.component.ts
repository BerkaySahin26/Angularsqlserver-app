import { BrandService } from './../../services/brand.service';

import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { response } from 'express';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSelectModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand:Brand;
  constructor(private brandService:BrandService){}


  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {this.brands = response.data
    })
    console.log();
  }

  setCurrentBrand(brand:Brand){
   this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand== this.currentBrand)
    {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand)
    {
      return "list-group-item active"
    }else
    {
      return "list-group-item"
    }
  }

}
