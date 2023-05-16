import { BaseService } from "./baseService";
import { PlayersRespository, playersRepository } from "../repository/players";

export class PlayersService extends BaseService {
  protected repository: PlayersRespository;

  constructor(repository: PlayersRespository) {
    super(repository);
  }
}

export const playersService = new PlayersService(playersRepository);
