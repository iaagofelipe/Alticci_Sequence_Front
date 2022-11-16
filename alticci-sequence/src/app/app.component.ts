import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";
import { Alticci } from "./model/alticci";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  alticci: Alticci;

  constructor(private service : ApiService) {
     this.alticci = new Alticci();
   }

  ngOnInit(): void {}

  onSubmit() {
    this.service.sendNumber(this.alticci.numberOfSequence).subscribe(response => {
      console.log(response);
    })
  }
}



