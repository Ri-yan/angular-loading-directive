import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loading_directive';
  loading:boolean=false;
  loading2:boolean=false;

  onSubmit(){
    this.loading=true;
    setTimeout(() => {
      this.loading=false;
    }, 2000); 
  }
  onSubmit2(){
    this.loading2=true;
    setTimeout(() => {
      this.loading2=false;
    }, 2000); 
  }
}
