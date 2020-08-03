import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

//userName  =new Subject<any>();  
userName=new BehaviorSubject('Aditysafa')
}
