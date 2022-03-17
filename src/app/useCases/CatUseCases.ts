import Cat, {VotePayload} from '../../domain/entities/Cat';
import CatRepository from '../../domain/interfaces/CatRepository';

export async function getCatsList({
  repository,
}: {
  repository: CatRepository;
}): Promise<Cat[]> {
  const catList = await repository.getCats();

  return catList;
}

export async function vote({
  repository,
  payload,
}: {
  repository: CatRepository;
  payload: VotePayload;
}): Promise<void> {
  await repository.vote({payload});
}
