import { Component } from '@angular/core';
import { OrderService } from '../service/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent {
  siteData:any=[]
  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    this.orderService.getSites().subscribe((res: any) => {
      this.siteData= res.sitelist;
     })
  }
}
