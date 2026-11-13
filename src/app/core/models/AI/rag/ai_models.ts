export interface ChatResponse {
    response?: string;
}

export interface ChatRequest {
    sessionId: string;
    message: string;    
}