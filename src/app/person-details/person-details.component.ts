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


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profileDetailsForm = this.formBuilder.group({
firstName: ['', Validators.required],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.profileDetailsForm.controls;
  }

  onSubmit() {
    if (!this.profileDetailsForm.valid) {
      return;
    }
    localStorage.setItem('form-data', JSON.stringify(this.profileDetailsForm.value));
    let formValue = localStorage.getItem('form-data');
    console.log(formValue);
    alert("Profile details is saved successfully!!");
    window.location.reload();
  };

}
