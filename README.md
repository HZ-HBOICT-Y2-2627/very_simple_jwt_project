# very_simple_jwt_project
A very simple JWT implementation in express.

Make sure you have the JWT_SECRET set in your .env file, e.g.:
`JWT_SECRET="a-strong-secret-keya-strong-secret-key"`

Start project with `node src/app.js`

With Postman or Bruno, access:

* http://localhost:3000/public
* http://localhost:3000/private
* http://localhost:3000/hzOnly

To access the private url, encode a JWT with https://www.jwt.io/. Make sure to use the same secret as set in the .env.

To access the hzOnly, update the payload of the JWT, having `"affiliation": "hz"`.
