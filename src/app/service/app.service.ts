import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiData = environment.apiData;
  private useBinId = environment.useBinId;

  constructor(private http: HttpClient) {}

  getData(binId: string = '6752435eacd3cb34a8b4df52'): Observable<any> {
    let url = this.apiData;
    if (this.useBinId) {
      if (!binId) {
        throw new Error('binId manquant');
      }
      url += `?binId=${binId}`;
    }
    return this.http.get(url);
  }
}
