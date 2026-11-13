import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { ChatRequest } from '../../models/AI/rag/ai_models';


@Injectable({
  providedIn: 'root'
})
export class RagService {
  private apiUrl = environment.apiUrl;
  private chatEndpoint = "api/chat"
  private sessionId: string; 

  constructor(private http: HttpClient) {
    this.sessionId = crypto.randomUUID();
  }

  public sendMessage(message: string): Observable<any> {
    const body: ChatRequest = { sessionId: this.sessionId, message };
    return this.http.post<any>(`${this.apiUrl}/${this.chatEndpoint}`, body);
    
  }

}