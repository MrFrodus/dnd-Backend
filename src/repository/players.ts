import { IPlayer } from "../models/interfaces/players";
import { BaseRepository } from "./baseRespository";

export class PlayersRespository extends BaseRepository<IPlayer> {}

export const playersRepository = new PlayersRespository("players", [
  "players.id",
  "players.name",
]);


