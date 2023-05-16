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

    console.log(item)
    if (!item) {
      return next(ApiErr.notFound("Such item doesn't exist"));
    }
    return res.status(200).json(item);
  };
}
