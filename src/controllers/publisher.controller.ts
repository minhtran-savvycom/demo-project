import express, { Express, Request, Response } from 'express';
const publisherController = express.Router();

// Home page route.
publisherController.get('/', function (req, res) {
  res.send('Wiki home page');
});

// About page route.
publisherController.get('/about', function (req, res) {
  res.send('About this wiki');
});

export default publisherController;
