import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [FormsModule,MatSelectModule, CartSummaryComponent, CommonModule],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {


}
