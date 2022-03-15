import Cat from '../../../domain/entities/Cat';
import CatRepository from '../../../domain/interfaces/CatRepository';

export async function getCatsList(
  catRepository: CatRepository,
): Promise<Cat[]> {
  const catList = await catRepository.getCats();

  return catList;
}
