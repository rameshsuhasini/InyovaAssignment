import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent implements OnInit{
  profileDetailsForm: FormGroup= new FormGroup({
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormGroup({
      day: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl('')
    }),
    nationality: new FormControl('')
  });
  submitted = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profileDetailsForm = this.formBuilder.group({
    gender: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dob: this.formBuilder.group({
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required]
    }),
    nationality: ['', Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.profileDetailsForm.controls;
  }
  get d(): { [key: string]: AbstractControl}{
      return ((this.profileDetailsForm.get('dob') as FormGroup).controls);
  }

  onSubmit() {
    this.submitted = true;
    if (this.profileDetailsForm.invalid) {
      return;
    }
    localStorage.setItem('form-data', JSON.stringify(this.profileDetailsForm.value));
    let formValue = localStorage.getItem('form-data');
    alert("Profile details is saved successfully!!");
    window.location.reload();
  };

}
