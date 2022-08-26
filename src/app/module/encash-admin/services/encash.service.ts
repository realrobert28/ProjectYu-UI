import { Injectable } from '@angular/core';
import { ApiService } from '@core/_services';
import { PageState, IPageState } from '@core/_types';
import { setFilters } from '@core/_utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncashService {

  constructor(private _apiService: ApiService) { }

  getVouchers(pageState: PageState): Observable<IPageState> {
    const params = {
      ...setFilters(pageState.filters ?? {}),
      limit: pageState.limit,
      page: pageState.page + 1,
      sort: pageState.sort || 'id',
      direction: pageState.sortDirection || 'desc'
    };

    return this._apiService.get('/v1/vouchers', params);
  }

  save(payload: any): Observable<any> {
    return this._apiService.post('/v1/vouchers', payload);
  }

  update(id: number, payload: any): Observable<any> {
    return this._apiService.put(`/v1/vouchers/${id}`, payload);
  }

  delete(id: number): Observable<any> {
    return this._apiService.delete(`/v1/vouchers/${id}`);
  }

  getVoucherCategories(): Observable<any> {
    const params = {
      sort: 'id',
      direction: 'desc'
    };

    return this._apiService.get('/v1/voucher-categories', params);
  }
}
