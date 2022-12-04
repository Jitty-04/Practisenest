import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {
  id=""
  password=""
  constructor(private route:Router){}
  readValues=()=>
  {
    let data:any={"id":this.id,"password":this.password}
    console.log(data)
    if(this.id=="1122" && this.password=="12345"){
      
      
      this.route.navigate(["/emphome"])
    }
    else{
      this.id=""
      this.password=""
      alert("Invalid Credentials")
    }
  }


}
