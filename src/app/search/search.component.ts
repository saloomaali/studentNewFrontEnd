import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  admnNo = ""

  constructor(private api:ApiService){}
  searchData:any = []
  readValue=()=>{
    
    
    let data:any = {"admnNo": this.admnNo}
    this.api.searchStudent(data).subscribe(

      (response:any)=>{
        if(response.length == 0){

          alert("There is no such students")
          
        }
        else{

          this.searchData = response
          
          
        }
      }
    )
    

  }
  deletebtn=(id:any)=>{
    let data: any = {"id": id}

    this.api.deleteStudent(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.status == "success") {

          alert("Student deleted successfully")
          window.location.reload()
          
        } 
      }
    )
  }

}
