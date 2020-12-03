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
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
        summaryAmount: 20,
        debtors: [],
        payments: [],
      },
      {
        id: 2,
        title: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
        summaryAmount: -10,
        debtors: [],
        payments: [],
      },
      {
        id: 3,
        title: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
        summaryAmount: 2,
        debtors: [],
        payments: [],
      },

      {
        id: 4,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
        summaryAmount: 20,
        debtors: [],
        payments: [],
      },
      {
        id: 5,
        title: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
        summaryAmount: -10,
        debtors: [],
        payments: [],
      },
      {
        id: 6,
        title: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
        summaryAmount: 2,
        debtors: [],
        payments: [],
      },

      {
        id: 7,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
        summaryAmount: 20,
        debtors: [],
        payments: [],
      },
      {
        id: 8,
        title: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
        summaryAmount: -10,
        debtors: [],
        payments: [],
      },
      {
        id: 9,
        title: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
        summaryAmount: 2,
        debtors: [],
        payments: [],
      },
    ]);
  }
}
