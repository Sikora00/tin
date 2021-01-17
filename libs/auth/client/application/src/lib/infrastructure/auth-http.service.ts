import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginWriteModel } from '../../../../../domain/src/lib/write-models/login.write-model';
import { Observable } from 'rxjs';
import { LoginReadModel } from '../../../../../domain/src/lib/write-models/login.read-model';
import { RegisterWriteModel } from '../../../../../domain/src/lib/write-models/register.write-model';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private readonly endpoints = {
    login: '/api/auth/login',
    register: '/api/auth/register',
  };
  constructor(private http: HttpClient) {}

  login(value: LoginWriteModel): Observable<LoginReadModel> {
    return this.http.post<LoginReadModel>(this.endpoints.login, value);
  }

  register(value: RegisterWriteModel): Observable<void> {
    return this.http.post<void>(this.endpoints.register, value);
  }
}
