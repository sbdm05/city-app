import { HttpInterceptorFn } from '@angular/common/http';


export const newsInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);

  return next(req);
};
