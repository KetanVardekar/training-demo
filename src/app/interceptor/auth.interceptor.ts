import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {


  // if (req.url.includes('/login')) {
  //   return next(req); 
  // }
  
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25JZCI6Ik9SRzAyIn0sImlhdCI6MTcyMDA3NjEwOCwiZXhwIjoxNzIwMTYyNTA4fQ.b-77UqGz6PvndyUsMGy1im0oetp6Cj_c7ilTN8mDaj4';

  
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  
  return next(authReq);
};
