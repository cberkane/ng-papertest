import { Component, OnInit } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CountService } from '../../services/count.service';

@Component({
  standalone: true,
  selector: 'app-page-reset',
  templateUrl: './page-reset.component.html',
  styleUrl: './page-reset.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
  ],
})
export class PageResetComponent implements OnInit {
  birthDateForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    public countService: CountService
  ) {}

  ngOnInit(): void {
    this.birthDateForm = this.initBirthDateForm();
  }

  private initBirthDateForm(): FormGroup {
    return this.fb.group({
      birthDate: this.fb.control('', [Validators.required]),
    });
  }

  onSubmit(): void {
    const value = this.birthDateForm.controls['birthDate'].value;
    const isAdult = this.isAdult(value);
    if (isAdult) this.countService.reset();
  }

  private isAdult(value: string): boolean {
    const today = new Date();
    const birthDate = new Date(value);

    const thisMonth = today.getMonth();
    const birthMonth = birthDate.getMonth();
    const thisDay = today.getDate();
    const birthDay = today.getDate();

    let age = today.getFullYear() - birthDate.getFullYear();
    if (
      thisMonth < birthMonth ||
      (thisMonth === birthMonth && thisDay < birthDay)
    )
      age--;

    return age >= 18;
  }
}
