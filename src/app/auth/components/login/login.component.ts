import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ocultar = true;

  constructor(private fb: FormBuilder) {}
  loginForm = this.fb.group({
  
  email:['', [Validators.required, Validators.email]],
  senha:['', [Validators.required, Validators.minLength(8)]]
  });

  onLoginGoogle() {}
    

  onSubmit(){
    alert("Login efetuado com sucesso!")
  }

  ngOnInit(): void {
  }

}
