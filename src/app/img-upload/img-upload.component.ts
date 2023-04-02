import { Component } from '@angular/core';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.css']
})
export class ImgUploadComponent {
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
