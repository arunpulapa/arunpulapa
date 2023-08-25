import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    fname: '',
    email: '',
    object: '',
    comment: ''
  };
  
  constructor(private _translationLoaderService: TranslationLoaderService, private http:HttpClient) {
    this._translationLoaderService.loadTranslations(english, french);
  
  }
  
  onSubmit(){
   
   
    const apiUrl = 'localhost:3000/sendmail';
    this.http.post(apiUrl, this.formData)
      .subscribe(response => {
        console.log('Post Response:', response);
        // Handle response as needed
      });
      window.location.reload()
  }
  }
 
