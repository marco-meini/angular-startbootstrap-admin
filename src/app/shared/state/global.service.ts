import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface GlobalState { 
  applicationName: string;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService { 
  private state: GlobalState = {
    applicationName: ""
  };

  private stateSubject = new BehaviorSubject<GlobalState>(this.state);

  getState(): Observable<GlobalState> {
    return this.stateSubject.asObservable();
  }

  private setState(newState: Partial<GlobalState>) {
    this.state = { ...this.state, ...newState };
    this.stateSubject.next(this.state);
  }

  setApplicationName(applicationName: string) {
    this.setState({ applicationName });
  }
}