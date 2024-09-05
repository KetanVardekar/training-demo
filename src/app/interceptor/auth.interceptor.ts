import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {


  // if (req.url.includes('/login')) {
  //   return next(req); 
  // }
  
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IlZfS0VUQU5fRUxFR0FOVCIsImVtYWlsIjoia2V0YW5AZWxlZ2FudG1pY3Jvd2ViLmNvbSIsIm9yZ2FuaXphdGlvbklkIjoiTkVXX0hDUF9PUkdfMDAxIiwic2VjdXJpdHlMZXZlbCI6IlRyZWF0bWVudCIsInN1cGVydXNlciI6MH0sImlhdCI6MTcyNTUxODM3OCwiZXhwIjoxNzI1NjA0Nzc4fQ.TczbmE4u3AHIkfTf55n_avyOnsvg79C6E6EPEVMqhbI';

  
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  
  return next(authReq);
};
