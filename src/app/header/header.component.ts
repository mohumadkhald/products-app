import { AfterContentChecked, Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { QuantityService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterContentChecked {
  quantity: any = 0;
  
  constructor(private counterService: QuantityService) {}
  ngAfterContentChecked() {
    return this.quantity =  this.counterService.getTotalQuantity();
  }
  
  @HostListener('mouseenter') getTotalQuantity(): void {
     
  }
  
}