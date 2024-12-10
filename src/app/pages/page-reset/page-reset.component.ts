import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
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
import { AsyncPipe } from '@angular/common';

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
    MatSnackBarModule,
    AsyncPipe,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageResetComponent implements OnInit {

  birthDateForm: FormGroup;
  today = new Date();

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
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
    if (isAdult) {
      this.countService.reset();
      this.birthDateForm.reset();
      this.toggleSnackbar('Vous êtes adulte, le compte est remis à 0');
    } else {
      this.toggleSnackbar("Vous n'êtes pas adulte, le compte est maintenu");
    }
  }

  private isAdult(value: string): boolean {
    const birthDate = new Date(value);
    const thisMonth = this.today.getMonth();
    const birthMonth = birthDate.getMonth();
    const thisDay = this.today.getDate();
    const birthDay = birthDate.getDate();

    let age = this.today.getFullYear() - birthDate.getFullYear();
    if (
      thisMonth < birthMonth ||
      (thisMonth === birthMonth && thisDay < birthDay)
    ) age--;

    return age >= 18;
  }

  private toggleSnackbar(message: string): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 5000,
      horizontalPosition: 'right',
    });
  }
}
