import {getCatsList} from '../../app/navigation/useCases/CatUseCases';
import Cat from '../../domain/entities/Cat';
import ApiCatRepository from '../repositories/ApiCatRepository';

const api = new ApiCatRepository();

export default class CatController {
  static async getAllCats(): Promise<Cat[]> {
    return getCatsList(api);
  }
}
