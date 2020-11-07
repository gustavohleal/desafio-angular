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

  testForm:FormGroup;
  inputType:boolean = true;
  formOptions:Array<FormOptions>;
  formGroup:{[key: string]:any}  = {};


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
          this.testForm.get(field).disable({ onlySelf: true });
        });
        
      })
      .add(()=>{
        this.formOptionsMemoryRelease.unsubscribe();
      })
  }

  onSubmit(){

  }

  generateFormGroup(form:Array<FormOptions>){


    form.forEach(form => {
      this.formGroup[form.titulo] = [form.valor, Validators.required];
    });
    
    return this.formGroup;
  }

  checkType(tipo:string){
    if ( tipo !== 'select') return true;
    else return false;
  }

}
