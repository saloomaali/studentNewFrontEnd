import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

name = ""
admnNo = ""
rollNo = ""
college = ""
constructor(private api:ApiService){}

readValue=()=>{

  let data:any = {"name": this.name,"admnNo": this.admnNo,"rollNo": this.rollNo,"college": this.college}

  this.api.addStudent(data).subscribe(

    (response:any)=>{

      console.log(response)
      if (response.status == "success") {

        alert("Student added successfully")
        window.location.reload()
        
      } else {

        alert("Something went wrong")
        
      }
    }
  )
}

}
