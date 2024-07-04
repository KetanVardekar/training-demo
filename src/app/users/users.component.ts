import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { OrderService } from '../service/order.service';
import { CommonModule } from '@angular/common';

export interface UserResponse {
  alluserlist: User[];
}
export interface User {
  countryCode: string;
  firstName: string;
  email: string;
  isActive?: number; 
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userId!: number;
  receivedData: any;
  // userData:any[]
  userData :User[] = [];
  constructor(private route: ActivatedRoute,private sharedService: SharedService,private OrderService:OrderService) { }


  ngOnInit(): void {
    // Use paramMap to get the ID parameter
    // this.route.paramMap.subscribe((params:any) => {
    //  console.log(params);
    //  this.userId = params.params.id
     
    // });

    // this.sharedService.currentData.subscribe(data => {
    //   this.receivedData = data;
    //   console.log(this.receivedData);
      
    // });
  }



  // async submit() {
  //   try {
  //     const res: any = await this.OrderService.getUsersAsync()
  //     this.userData = res.alluserlist;
  //   } catch (error) {
  //     console.error('Error fetching users', error);
  //   }
  // }

  submit(){
    this.OrderService.getUsers().subscribe((data: UserResponse) => {
      this.userData = data.alluserlist; 
    });
  }
}
