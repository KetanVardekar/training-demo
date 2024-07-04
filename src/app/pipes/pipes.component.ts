import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ExponentPipePipe } from '../pipe/exponent-pipe.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe,CurrencyPipe,LowerCasePipe,UpperCasePipe,DecimalPipe,PercentPipe,JsonPipe,ExponentPipePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent { 
   data: any = { name: 'Angular', version: 12 };
   fraction: number = 0.25678;
   number: number = 1234.56789;
   message: string = 'Hello Angular';
   price: number = 1234.56;
   today: number = Date.now();

}
