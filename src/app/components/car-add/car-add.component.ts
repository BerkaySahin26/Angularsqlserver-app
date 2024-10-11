import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from '../../services/car.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './car-add.component.html',
  styleUrl: './car-add.component.css'
})
export class CarAddComponent implements OnInit {
carAddForm:FormGroup;
constructor(private formbuilder:FormBuilder,private carService:CarService, private toastr:ToastrService) {}
  ngOnInit(): void {
    this.createCarAddForm()
    this.add()

  }
  createCarAddForm(){
    this.carAddForm = this.formbuilder.group({
      carName:["",Validators.required],
      dailyPrice:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      description:["",Validators.required],
      modelYear:["",Validators.required]

    })
  }
  add(){
    if(this.carAddForm.valid){
    let carModel = Object.assign({},this.carAddForm.value)
    this.carService.add(carModel).subscribe(response=>{
      this.toastr.success(response.message,"Başarılı")
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastr.error(responseError.console.error.Errors[i].ErrorMessage,"Doğrulama hatası")

        }

      }


    })
    }else
    {
        this.toastr.error("Formunuz eksik","Dikkat")
    }
  }
}
