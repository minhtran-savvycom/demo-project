import express from 'express';
import gameRouter from './game.router';
import userRouter from './user.router';
import publisherRouter from './pulisher.router';
const router = express.Router();

// Game route.
router.use('/game', gameRouter);

// User route.
router.use('/user', userRouter);

// Publisher route.
router.use('/publisher', publisherRouter);

// Home route.
router.get('/', function (req, res) {
  res.send('This is home');
});

export default router;
