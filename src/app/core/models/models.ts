export interface pageSelection {
  skip: number;
  limit: number;
}
export interface apiResultFormat {
  data: Array<any>;
  totalData: number;
}
export interface paginatorResult {
  result?: any;
  error?: boolean;
  message?: string;
  statusCode?: string;
  success?: boolean;
  pageNumber?: number,
  pageSize?: number,
  length?: number,
  totalPages?: number,
  hasPrevious?: boolean,
  hasNext?: boolean,
}
export interface Pais {
  id?: number;
  codigo?: string;
  pais?: string;
  nacionalidad?: string;
  codigoNacionalidad?: string;
}
export interface Provincia {
  id?: number;
  idPais?: number;
  provincia?: string;
  codigo?: string;
}
export interface Ciudad {
  id?: number;
  idProvincia?: number;
  ciudad?: string;
  codigo?: string;
  longitud?: number;
  latitud?: number;
}
export interface Parroquia {
  id?: number;
  idCiudad?: number;
  parroquia?: string;
  longitud?: number;
  latitud?: number;
}

export interface Clientes {
  id?: number;
  codigo?: string;
  cuentaCliente?: string;
  cuentaProveedor?: string;
  razonSocial?: string;
  nombreComercial?: string;
  tipoPrecio?: string;
  ruc?: string;
  telefono1?: string;
  telefono2?: string;
  vendedor?: string;
  diasCredito?: number;
  fechaUltimaVenta?: null;
  valorUltimaVenta?: null;
  fechaUltimaCompra?: null;
  valorUltimaCompra?: null;
  porcentajeDescuento?: number;
  comenta?: string;
  credito?: number;
  idPais?: number;
  idProvincia?: number;
  idCiudad?: number;
  idParroquia?: number;
  fechaNacimiento?: Date;
  sexo?: string;
  titulo?: string;
  profesion?: string;
  email?: string;
  esContribuyente?: string;
  estadoCivil?: string;
  representanteLegal?: string;
  representanteCedula?: string;
  representanteTelefono?: string;
  esCliente?: boolean;
  esProveedor?: null;
}



