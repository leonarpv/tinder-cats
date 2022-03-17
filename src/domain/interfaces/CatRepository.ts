import Cat, {VotePayload} from '../entities/Cat';

export default interface CatRepository {
  getCats(): Promise<Cat[]>;
  vote({payload}: {payload: VotePayload}): Promise<void>;
}
