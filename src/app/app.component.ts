import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // NgFormModule buradan import ediliyor
import { CommonModule } from '@angular/common';
import { CarComponent } from "./components/car/car.component";
import { MatSelectModule } from '@angular/material/select';
import { BrandComponent } from "./components/brand/brand.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, CarComponent, MatSelectModule, BrandComponent,BrandComponent, CarComponent, MatToolbarModule,MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angularsqlserver-app';
}
