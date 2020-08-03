const express = require('express');

const setMiddlewares = require('./middlewares');
const setRoutes = require('./routes');
const initDb = require('./data/db');

const app = express();

setMiddlewares(app);
setRoutes(app);

const port = process.env.PORT || 8080;

initDb({
  connectionString: 'mongodb://username:password666@ds229448.mlab.com:29448/shows'
}).then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
})
.catch(err => {
  console.log(err);
});
