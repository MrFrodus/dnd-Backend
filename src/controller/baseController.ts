import { BaseService } from "../service/baseService";
import { BaseModel } from "../models/interfaces/baseModel";
import express from "express";
import { ApiErr } from "../errorDnd/ApiErr";

export class BaseController {
  protected service: BaseService;

  constructor(service: BaseService) {
    this.service = service;
  }

  getById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const item: BaseModel[] | null = await this.service.getById(
      req.params.id as string
    );

    if (!item) {
      return next(ApiErr.notFound("Such item doesn't exist"));
    }
    return res.status(200).json(item);
  };

  getAll = async (
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const items: BaseModel[][] | null = await this.service.getAll();

    if (!items) {
      return next(ApiErr.notFound("There is no items yet"));
    }
    return res.status(200).json(items);
  };

  add = async (req: express.Request, res: express.Response) => {
    const newItem = await this.service.add(req.body as object);
    return res.status(201).json(newItem[0]);
  };

  update = async (req: express.Request, res: express.Response) => {
    const updatedItem = await this.service.update(
      req.params.id as string,
      req.body as object
    );
    return res.status(201).json(updatedItem);
  };
}
