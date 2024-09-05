import { Component, OnDestroy } from '@angular/core';
import { OrderService } from '../service/order.service';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent implements OnDestroy{
  siteData:any=[]
  apiCalled!:Subscription;
  data$!: Observable<any>;
  constructor(private orderService: OrderService, private router: Router) { 


  }
  


  ngOnInit(): void {

    this.data$ =  this.orderService.getSites();
    
    
    this.apiCalled = this.orderService.getSites().subscribe((res: any) => {
      this.siteData = res.sitelist;
      console.log('Data received: ', this.siteData);


      
     
    });
    console.log('ngOnInit called');
  }


  goToContact(){
    this.router.navigate(['/contact']); 
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    if (this.apiCalled) {
      this.apiCalled.unsubscribe();
      console.log('Subscription unsubscribed');
    }
  }

 
}
