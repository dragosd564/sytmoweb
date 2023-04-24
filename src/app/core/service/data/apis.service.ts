import { Injectable } from '@angular/core';
import { paginatorResult } from '../../core.index';
import { map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  public env = environment
  urlApiCatalago = this.env.services.apiCatalog
  urlApiEntidad = this.env.services.apiEntidad

  constructor(private http: HttpClient) { }
  //nuevos endPoints
  public getPais() {
    return this.http.get<any>(`${this.urlApiCatalago}/paises`).pipe(
      map((pais: paginatorResult) => {
        return pais;
      })
    );
  }
  public getProvincia(idPais: any) {
    return this.http.get<any>(`${this.urlApiCatalago}/provincias/${idPais}`).pipe(
      map((pais: paginatorResult) => {
        return pais;
      })
    );
  }
  public getCiudad(idProvincia: any) {
    return this.http.get<any>(`${this.urlApiCatalago}/ciudades/${idProvincia}`).pipe(
      map((pais: paginatorResult) => {
        return pais;
      })
    );
  }
  public getParroquia(idCiudad: any) {
    return this.http.get<any>(`${this.urlApiCatalago}/parroquias/${idCiudad}`).pipe(
      map((pais: paginatorResult) => {
        return pais;
      })
    );
  }
  //clientes 
  public getClientes(pagina?: number, size?: number, termino?: string) {
    let params = new HttpParams();

    if (pagina && size) {
      params = params.append('page', String(pagina));
      params = params.append('pageSize', String(size));
    }

    if (termino && pagina && size) {
      params = params.append('term', String(termino));
      params = params.append('page', String(pagina));
      params = params.append('pageSize', String(size));
    }

    return this.http.get<any>(`${this.urlApiEntidad}/clientes`, { params: params }).pipe(
      map((clientes: paginatorResult) => {
        return clientes;
      })
    );
  }
  public getProveedores(pagina?: number, size?: number, termino?: string) {
    let params = new HttpParams();

    if (pagina && size) {
      params = params.append('page', String(pagina));
      params = params.append('pageSize', String(size));
    }

    if (termino && pagina && size) {
      params = params.append('term', String(termino));
      params = params.append('page', String(pagina));
      params = params.append('pageSize', String(size));
    }

    return this.http.get<any>(`${this.urlApiEntidad}/proveedores`, { params: params }).pipe(
      map((proveedores: paginatorResult) => {
        return proveedores;
      })
    );
  }
  public crearCliente(datosClientes: any) {
    return this.http.post<any>(`${this.urlApiEntidad}/crear`, datosClientes).pipe(
      map((clientes: paginatorResult) => {
        return clientes;
      })
    );
  }
  public getEntidadById(id: number) {
    return this.http.get<any>(`${this.urlApiEntidad}/consultar/${id}`).pipe(
      map((clientes: paginatorResult) => {
        return clientes;
      })
    );
  }
  public modificarCliente(id?: number, datosClientes?: any) {
    return this.http.put<any>(`${this.urlApiEntidad}/modificar/${id}`, datosClientes).pipe(
      map((clientes: paginatorResult) => {
        return clientes;
      })
    );
  }
  public deleteEntidad(id: number) {
    return this.http.delete<any>(`${this.urlApiEntidad}/eliminar/${id}`).pipe(
      map((clientes: paginatorResult) => {
        return clientes;
      })
    );
  }
}
