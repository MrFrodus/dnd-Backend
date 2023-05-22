import { BaseRepository } from "../repository/baseRespository";
import { BaseModel } from "../models/interfaces/baseModel";

export class BaseService {
  protected repository: BaseRepository<BaseModel>;

  constructor(repository: BaseRepository<BaseModel>) {
    this.repository = repository;
  }

  add(item: object): Promise<number[]> {
    return this.repository.add(item);
  }

  getById = async (id: string): Promise<BaseModel[] | null> => {
    const item = await this.repository.getById(id);
    if (!item.length) {
      return null;
    } else {
      return item;
    }
  };

  getAll = async (): Promise<BaseModel[][] | null> => {
    const items = await this.repository.getAll();
    if (!items.length) {
      return null;
    } else {
      return items;
    }
  };

  update(id: string, changes: object): Promise<BaseModel[]> {
    return this.repository.update(id, changes);
  }

  remove(id: string): Promise<number> {
    return this.repository.remove(id);
  }
}
