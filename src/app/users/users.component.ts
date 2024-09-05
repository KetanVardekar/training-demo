import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userId!: number;
  receivedData: any;
  constructor(private route: ActivatedRoute,private sharedService: SharedService) { }


  ngOnInit(): void {
    // Use paramMap to get the ID parameter
    this.route.paramMap.subscribe((params:any) => {
     console.log(params);
     this.userId = params.params.id
     
    });

    this.sharedService.currentData.subscribe(data => {
      this.receivedData = data;
      console.log(this.receivedData);
      
    });
  }
}
