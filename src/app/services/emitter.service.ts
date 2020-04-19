import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  public loginSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
}
