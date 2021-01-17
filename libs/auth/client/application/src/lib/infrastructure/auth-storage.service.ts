import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStorageService {
  private readonly keys = {
    accessToken: 'accessToken',
  };
  constructor() {}

  getAccessToken(): string | null {
    return localStorage.getItem(this.keys.accessToken);
  }

  saveAccessToken(accessToken: string): void {
    localStorage.setItem(this.keys.accessToken, accessToken);
  }

  forgotAccessToken(): void {
    localStorage.removeItem(this.keys.accessToken);
  }
}
