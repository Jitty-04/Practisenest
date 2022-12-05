import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friendsview',
  templateUrl: './friendsview.component.html',
  styleUrls: ['./friendsview.component.css']
})
export class FriendsviewComponent {
  constructor(private api:ApiService){
    api.fetchFriends().subscribe(
      (response)=>
      {
        this.loading=false
        this.data=response;
      }
    )
  }
  data:any=[]
  loading:boolean=true

}
