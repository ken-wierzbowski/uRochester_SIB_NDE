import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IlliadData {
  Articles: any[];
  Requests: any[];
  data: any[];

}

export interface userData {
  userId: string;
}

// ============================================================================
// Service: IllService
// This service is responsible for making the API call.
// ============================================================================

@Injectable({
  providedIn: 'root',
})

export class IllService {
  constructor(private http: HttpClient) {}

   /**
   * Fetches ILLiad data from the remote script.
   * @param url The URL of the remote script.
   * @param user The user's identifier.
   * @returns An Observable of the ILLiad data.
   */

  getILLiadData(url: string, user: string): Observable<IlliadData> {
    return this.http.get<IlliadData>(url, {
      params: {user},
    });
  }
}