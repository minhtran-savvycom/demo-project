import express, { Express, Request, Response } from 'express';
const publisherRouter = express.Router();

// Home page route.
publisherRouter.get('/', function (req, res) {
  res.send('Wiki home page');
});

// About page route.
publisherRouter.get('/about', function (req, res) {
  res.send('About this wiki');
});

export default publisherRouter;
