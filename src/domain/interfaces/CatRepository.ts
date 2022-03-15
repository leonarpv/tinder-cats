import Cat, {VotePayload} from '../entities/Cat';

export default interface CatRepository {
  getCats(): Promise<Cat[]>;
  vote(payload: VotePayload): Promise<void>;
}
