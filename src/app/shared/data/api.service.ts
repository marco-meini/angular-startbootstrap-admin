import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Alert } from "../components/alert.component";

export const API_RELATIVE_PATH = "/api/v1";

export interface ApiResponse<T> {
  result: Alert;
  data: T | null;
}

interface QueryParams {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private errorHandling<T>(error: any): ApiResponse<T> {
    let message = error.error?.message || error.message || null;
    let subMessages = error.error?.subMessages || null;
    if (error.status === 401) {
      return { result: { success: false }, data: null };
    } else if (error.status === 403) {
      return { result: { success: false, message: message || 'Non sei autorizzato ad eseguire questa azione' }, data: null };
    } else if (error.status === 400) {
      return { result: { success: false, message: message || "Parametri non validi", subMessages }, data: null };
    } else {
      return { result: { success: false, message: message || 'Si è verificato un errore' }, data: null };
    }
  }

  get<T>(path: string, query: QueryParams = {}): Promise<ApiResponse<T>> {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      this.http.get<T>(API_RELATIVE_PATH + path, { params: query }).subscribe({
        next: (result) => {
          resolve({ result: { success: true }, data: result });
        },
        error: (error) => {
          resolve(this.errorHandling(error));
        }
      });
    });
  }

  post<T>(path: string, body: any): Promise<ApiResponse<T>> {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      this.http.post<T>(API_RELATIVE_PATH + path, body).subscribe({
        next: (result) => {
          resolve({ result: { success: true }, data: result });
        },
        error: (error) => {
          resolve(this.errorHandling(error));
        }
      });
    });
  }

  patch<T>(path: string, body: any): Promise<ApiResponse<T>> {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      this.http.patch<T>(API_RELATIVE_PATH + path, body).subscribe({
        next: (result) => {
          resolve({ result: { success: true }, data: result });
        },
        error: (error) => {
          resolve(this.errorHandling(error));
        }
      });
    });
  }

  delete<T>(path: string): Promise<ApiResponse<T>> {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      this.http.delete<T>(API_RELATIVE_PATH + path).subscribe({
        next: (result) => {
          resolve({ result: { success: true }, data: result });
        },
        error: (error) => {
          resolve(this.errorHandling(error));
        }
      });
    });
  }
}