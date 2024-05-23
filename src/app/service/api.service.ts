import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private apiUrl = 'https://demotrade.efintradeplus.com/ExamAPI/examdata';

  constructor(private http: HttpClient) { }

  getExamData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
