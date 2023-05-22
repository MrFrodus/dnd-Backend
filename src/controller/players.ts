import { BaseController } from "./baseController";
import { PlayersService, playersService } from "../service/players";


class PlayersController extends BaseController {
  protected service: PlayersService;

  constructor(service: PlayersService) {
    super(service);
  }
}

export const playersController = new PlayersController(playersService);
