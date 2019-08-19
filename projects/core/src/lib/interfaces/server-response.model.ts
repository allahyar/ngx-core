export interface ServerResponse<T> {
  result?: T;
  message?: string;
  errors?: string[];
  status_code?: number;
  success?: boolean;
}
