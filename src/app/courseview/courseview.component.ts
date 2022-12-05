import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-courseview',
  templateUrl: './courseview.component.html',
  styleUrls: ['./courseview.component.css']
})
export class CourseviewComponent {
  constructor(private api:ApiService)
  {
    api.fetchCourses().subscribe(
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
