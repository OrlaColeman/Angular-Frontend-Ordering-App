import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginInfo } from './login-info';
import { JwtResponse } from './jwt-response';
import { SignUpInfo } from './signup-info';

const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) { }


attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
  return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
}
SignUp(info: SignUpInfo): Observable<string>{
  return this.http.post<string>(this.signupUrl, info, httpOptions);
}

}