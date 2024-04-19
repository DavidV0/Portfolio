import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLen: "DE" | "EN" = "DE";

  constructor() { }

  setLen(len:  "DE" | "EN"){
    this.currentLen = len
  }

  getLen(){
    return this.currentLen;
  }
}
