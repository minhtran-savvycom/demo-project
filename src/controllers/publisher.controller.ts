import { Request, Response } from 'express-serve-static-core';
import publisherService from '../services/publisher.service';

class PublisherController {
  private static _instance: PublisherController;

  private constructor() {}

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new PublisherController();
    return this._instance;
  }

  createPublisher(req: Request, res: Response) {
    publisherService.createPublisher(req, res);
  }

  deletePublisher(req: Request, res: Response) {
    publisherService.deletePublisher(req, res);
  }

  updatePublisher(req: Request, res: Response) {
    publisherService.updatePublisher(req, res);
  }

  findAllPublishers(req: Request, res: Response) {
    publisherService.findAllPublishers(req, res);
  }

  getPublisherById(req: Request, res: Response) {
    publisherService.getPublisherById(req, res);
  }
}

export default PublisherController.getInstance();
