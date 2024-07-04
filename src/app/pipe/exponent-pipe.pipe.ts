import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentPipe',
  standalone: true,
 
})
export class ExponentPipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);


  }

}
