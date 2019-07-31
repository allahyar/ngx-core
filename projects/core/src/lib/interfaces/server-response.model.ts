export interface ServerResponse<T> {
  result?: T;
  errors?: string[];
  success?: boolean;
}
