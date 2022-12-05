import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  courseTitle=""
  courseDescription=""
  courseDate=""
  courseDuration=""
  courseVenue=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("CourseAdded Successfully")
          this.courseTitle=""
          this.courseDescription=""
          this.courseDuration=""
          this.courseDate=""
          this.courseVenue=""
        }
          else{
            alert("something went wrong")
          }

        }
      
      
    )
 
  }
}
