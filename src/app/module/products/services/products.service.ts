import { Injectable } from '@angular/core';
import { ApiService } from '@core/_services';
import { PageState, IPageState } from '@core/_types';
import { setFilters } from '@core/_utils';
import { Observable } from 'rxjs';
import { IProduct } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _apiService: ApiService) { }

  getProducts(pageState: PageState): Observable<IPageState> {
    const params = {
      ...setFilters(pageState.filters ?? {}),
      limit: pageState.limit,
      page: pageState.page + 1,
      sort: pageState.sort || 'id',
      direction: pageState.sortDirection || 'desc'
    };

    return this._apiService.get('/v1/products', params);
  }

  saveProduct(payload: any): Observable<any> {
    return this._apiService.post('/v1/products', payload);
  }
}
