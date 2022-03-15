//write units test to check BreedUseCases

import ApiCatRepository from '../../infrastructure/repositories/ApiCatRepository';
import {getCatsList} from './CatUseCases';

const api = new ApiCatRepository();

describe('cat use cases', () => {
  it('should be defined', () => {
    expect(getCatsList).toBeDefined();
  });

  it('should return a list of cats', async () => {
    const result = await getCatsList(api);
    let expected = result.length;
    expect(expected).toBeGreaterThan(0);
  });
});
