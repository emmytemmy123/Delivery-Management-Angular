import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  private userDetails: any;

  constructor() { }

  getUserDetails(): any {
    return this.userDetails;
  }

  setUserDetails(userDetails: any): void {
    this.userDetails = userDetails;
  }

  
}
