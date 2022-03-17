import {getCatsList, vote} from '../../app/useCases/CatUseCases';
import Cat, {VotePayload} from '../../domain/entities/Cat';
import ApiCatRepository from '../repositories/ApiCatRepository';

const api = new ApiCatRepository();

export default class CatController {
  static async getAllCats(): Promise<Cat[]> {
    return getCatsList({repository: api});
  }
  static async vote({payload}: {payload: VotePayload}): Promise<void> {
    return vote({repository: api, payload});
  }
}
