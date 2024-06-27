import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable(); //From the data you will get

  constructor() { }

  changeData(data: any) {
    this.dataSource.next(data); //From the data you will send
  }
}
