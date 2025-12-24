import { expressjwt } from 'express-jwt';
import jwks from 'jwks-rsa';

export const checkJwt = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-kztmpz0gs58euu0w.us.auth0.com/.well-known/jwks.json`
  }),
  audience: 'https://api.onlinepublishinghub.com',
  issuer: `https://dev-kztmpz0gs58euu0w.us.auth0.com/`,
  algorithms: ['RS256']
});