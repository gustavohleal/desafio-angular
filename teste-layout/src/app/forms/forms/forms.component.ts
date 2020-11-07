import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';


import { FormOptions } from '../../shared/interfaces/FormInterface';

import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

  @ViewChild('typeInput') typeInput : TemplateRef<any>;

  private formOptionsMemoryRelease;
  private fileMemoryRelease;

  testForm:FormGroup;
  inputType:boolean = true;
  formOptions:Array<FormOptions>;
  formGroup:{[key: string]:any}  = {};
  fileURL:string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: FormService,

  ) { 
    this.testForm = this.fb.group({});    
  }
  ngOnInit(): void {
    this.formOptionsMemoryRelease = this.formService.getFormOptions()
      .subscribe((result:Array<FormOptions>) => {
        this.formOptions = result;
        this.testForm = this.fb.group(this.generateFormGroup(this.formOptions));
        Object.keys(this.testForm.controls).forEach(field => {
          this.testForm.get(field).disable();
        });
        
      })
      .add(()=>{
        this.formOptionsMemoryRelease.unsubscribe();
      })
  }

  onSubmit(){

  }

  generateFormGroup(form:Array<FormOptions>){

    let defaultValue = "";
    form.forEach(form => {
      if(this.checkSelect(form.tipo)) {
        defaultValue = form.opcoes[0];
      } else if(this.checkFile(form.tipo)){
        defaultValue = "";
        this.fileURL = this.formService.getFileURL(form.valor);
      } else {
        defaultValue = form.valor;
      }
      this.formGroup[form.titulo] = [defaultValue, Validators.required];
    });
    
    return this.formGroup;
  }

  checkSelect(tipo:string){
    if ( tipo === 'select') return true;
    else return false;
  }

  checkFile(tipo:string){
    if ( tipo === 'file') return true;
    else return false;
  }


  onClick(name:string){
     return  this.formService.getFileURL(name);

   
  }
}
