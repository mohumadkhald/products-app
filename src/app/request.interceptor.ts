import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log("FROM INTERCEPTOR" , req)
  return next(req);
};
