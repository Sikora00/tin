import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Debt } from '../entities/debt';

@Injectable({ providedIn: 'root' })
export class DebtDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Debt[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Debt[]>(url, {params, headers});
        */

    return of([
      {
        id: 1,
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
        summaryAmount: 20,
      },
      {
        id: 2,
        name: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
        summaryAmount: -10,
      },
      {
        id: 3,
        name: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
        summaryAmount: 2,
      },

      {
        id: 4,
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
        summaryAmount: 20,
      },
      {
        id: 5,
        name: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
        summaryAmount: -10,
      },
      {
        id: 6,
        name: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
        summaryAmount: 2,
      },

      {
        id: 7,
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
        summaryAmount: 20,
      },
      {
        id: 8,
        name: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
        summaryAmount: -10,
      },
      {
        id: 9,
        name: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
        summaryAmount: 2,
      },
    ]);
  }
}
