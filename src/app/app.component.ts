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


fileName = '';
imageUrl?: string;

onFileSelected(event: any) {
  const file: File = event.target.files[0];

  if (file && file.type === 'image/png') {
    this.fileName = file.name;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("thumbnail", file);

    console.log(formData)
    console.log(file)
  }
}
resetFileInput() {
  this.fileName = '';
  this.imageUrl = '';
  const fileInput: any = document.querySelector('.file-input');
  fileInput.value = '';
}
}
