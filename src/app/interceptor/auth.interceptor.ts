import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {


  // if (req.url.includes('/login')) {
  //   return next(req); 
  // }
  
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0dC5jb20iLCJvcmdhbml6YXRpb25JZCI6Ik9SRzAxIn0sImlhdCI6MTcxOTQ2ODkzNSwiZXhwIjoxNzE5NTU1MzM1fQ.rrneke2Ea55Fz-fQoWNkxEa37mRGjcq-dKkqF6gTEp8';

  
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  
  return next(authReq);
};
