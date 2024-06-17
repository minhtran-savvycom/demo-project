import express from 'express';
import publisherController from '../controllers/publisher.controller';
import dtoValidationMiddleware from '../middlewares/dto-validator';
import { CreatePublisherModel } from '../shared/dtos/models/create-publisher.model';
import { UpdatePublisherModel } from '../shared/dtos/models/update-publisher.model';

const publisherRouter = express.Router();

publisherRouter.get('/:id', function (req, res) {
  publisherController.getPublisherById(req, res);
});

publisherRouter.get('/', function (req, res) {
  publisherController.findAllPublishers(req, res);
});

publisherRouter.post(
  '/',
  dtoValidationMiddleware(CreatePublisherModel),
  function (req, res) {
    publisherController.createPublisher(req, res);
  },
);

publisherRouter.put(
  '/:id',
  dtoValidationMiddleware(UpdatePublisherModel),
  function (req, res) {
    publisherController.updatePublisher(req, res);
  },
);

publisherRouter.delete('/:id', function (req, res) {
  publisherController.deletePublisher(req, res);
});

export default publisherRouter;
