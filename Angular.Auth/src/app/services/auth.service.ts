import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetTokenRequest } from '../interfaces/get-token-request';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { GetTokenResponse } from '../interfaces/get-token-response';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }
    //             

  getToke(request: GetTokenRequest): Observable<GetTokenResponse> {
    return this.httpClient.post<GetTokenResponse>(environment.apiUrl + "GenerateToken/GeneratorToken", request).pipe(
      map((response) => {
        if (response.isSuccess) {
          localStorage.setItem("accessToken", response.token)
          this.router.navigate(["home"])
        }
        return response
      })
    )
  }
}