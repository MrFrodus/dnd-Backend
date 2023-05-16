import { BaseController } from "./baseController";
import { PlayersService, playersService } from "../service/players";
import express from "express";
import { ApiErr } from "../errorDnd/ApiErr";

class PlayersController extends BaseController {
  protected service: PlayersService;

  constructor(service: PlayersService) {
    super(service);
  }
}

export const playersController = new PlayersController(playersService);
