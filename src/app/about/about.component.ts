import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { CompanyComponent } from './company/company.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule,TeamComponent,CompanyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

constructor(private router: Router){}

  goToAbout() {
    this.router.navigate(['/login']);
  }
}
