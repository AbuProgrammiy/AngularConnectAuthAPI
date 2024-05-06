import { Component } from '@angular/core';
import { GetTokenRequest } from '../../interfaces/get-token-request';
import { AuthService } from '../../services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrl: './register-login.component.scss'
})
export class RegisterLoginComponent {
  getTokenRequest: GetTokenRequest = {
    userName: "",
    role: ""
  }

  decodetToken!:any

  constructor(private authService: AuthService) { }

  login() {
    this.authService.getToke(this.getTokenRequest).subscribe({
      next: (data) => {
        console.log(data)
        this.decodetToken=jwtDecode(localStorage.getItem("accessToken")!)
        //                ^^^^^^^^^ -> tokeni decode qilish. Uning uchun [npm install jwt-daecode qilish kerak]

        console.log(this.decodetToken)
        console.log(this.decodetToken.permissions)
        console.log(this.decodetToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"])
        console.log(new Date(this.decodetToken.exp*1000))
        /*              ^^^^                      ^^^^^ -> secondni millisecondga ogirish
                          |
                          |-> millisecondni Datega ogirish*/
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
