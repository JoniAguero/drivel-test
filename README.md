# Drivel CODE TEST :rocket:

Drivel Test it's a small project that has been built with the MEAN Stack.
API built with Node JS, express and mongoose. Mongo is used as a database, and a cluster has been created in [Mongo Atlas](https://www.mongodb.com/cloud/atlas).  

Hosted: [Heroku](https://www.heroku.com/what)   
API Preview: [API hosted by Heroku](https://salty-dawn-54483.herokuapp.com/)
## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the app.

```bash
npm install
npm run dev - Run server
ng serve - Run client
```

## POSTMAN

```bash
API URL: http://localhost:8080/api

Auth
POST Singup: /api/auth/new/ -> Body: { name, email, password }
POST Login: /api/auth/ -> Body: { email, password }

Recipes
GET /api/recipes - Without token
GET /api/recipes/fav - With token
POST /api/recipes/ -> Body: { title, href, ingredients }
DELETE /api/recipes/:id
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)