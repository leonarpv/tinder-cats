import axios, {AxiosResponse} from 'axios';
import Cat, {VotePayload} from '../../domain/entities/Cat';
import Config from 'react-native-config';
import CatRepository from '../../domain/interfaces/CatRepository';
const baseURL = Config.API_BASE_URL;

export default class ApiCatRepository implements CatRepository {
  async getCats(): Promise<Cat[]> {
    const response: AxiosResponse<any, any> = await axios.get(
      `${baseURL}/breeds`,
    );
    if (response.status !== 200) {
      throw new Error('Error getting data');
    }

    return response.data;
  }
  async vote({payload}: {payload: VotePayload}): Promise<void> {
    const response: AxiosResponse<any, any> = await axios.post(
      `${baseURL}/votes`,
      payload,
    );

    if (response.status !== 200) {
      throw new Error('Error voting');
    }
  }
}
