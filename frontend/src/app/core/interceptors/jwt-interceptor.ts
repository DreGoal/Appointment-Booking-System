import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');

  console.log('🔥 JWT INTERCEPTOR RUNNING:', req.url);

  // ❌ DO NOT attach token to auth APIs
  if (
    token &&
    !req.url.includes('/api/auth/login') &&
    !req.url.includes('/api/auth/register')
  ) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
