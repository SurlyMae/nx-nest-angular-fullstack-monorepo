import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bird } from '@fullstack-monorepo/api-interfaces';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class BirdService {
  private birdsUrl = '/api/birds';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private msgService: MessageService) {}

  getBirds(): Observable<Bird[]> {
    return this.http.get<Bird[]>(this.birdsUrl).pipe(
      tap(() => this.log('fetching birds')),
      catchError(this.handleError<Bird[]>('getBirds', []))
    );
  }

  getBird(id: string): Observable<Bird> {
    const url = `${this.birdsUrl}/${id}`;
    return this.http.get<Bird>(url).pipe(
      tap(() => this.log(`fetched bird id=${id}`)),
      catchError(this.handleError<Bird>(`getBird id = ${id}`))
    );
  }

  updateBird(bird: Bird): Observable<any> {
    return this.http.put(this.birdsUrl, bird, this.httpOptions).pipe(
      tap(() => this.log(`updated bird id = ${bird.id}`)),
      catchError(this.handleError<any>('updateBird'))
    );
  }

  addBird(bird: Bird): Observable<Bird> {
    return this.http.post<Bird>(this.birdsUrl, bird, this.httpOptions).pipe(
      tap((newBird: Bird) => this.log(`added bird w/ id = ${newBird.id}`)),
      catchError(this.handleError<Bird>('addBird'))
    );
  }

  deleteBird(id: string): Observable<Bird> {
    const url = `${this.birdsUrl}/${id}`;

    return this.http.delete<Bird>(url, this.httpOptions).pipe(
      tap(() => this.log(`deleted bird id = ${id}`)),
      catchError(this.handleError<Bird>(`deleteBird`))
    );
  }

  searchBirds(term: string): Observable<Bird[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Bird[]>(`${this.birdsUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found birds matching "${term}"`)
          : this.log(`no birds matching "${term}"`)
      ),
      catchError(this.handleError<Bird[]>('searchBirds', []))
    );
  }

  private log(message: string) {
    this.msgService.add(`birdService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
