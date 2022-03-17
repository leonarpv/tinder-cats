import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Cat from '../../../../domain/entities/Cat';
import CatController from '../../../controllers/CatController';
import {red} from '../../../utils/colors';
import CatsPager from '../../components/CatsPager';
import CustomText, {TextSize} from '../../components/CustomText';
import ScreenIndicator from '../../components/CustomText';
import ScreenLayout from '../../components/ScreenLayout';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    async function getBreadList() {
      setLoading(true);
      try {
        const catList = await CatController.getAllCats();
        setCats(catList);
      } catch (error) {}
      setLoading(false);
    }

    getBreadList();
  }, []);

  return (
    <ScreenLayout>
      {loading && <CustomText size={TextSize.Big}>Loading</CustomText>}
      {cats.length > 0 && <CatsPager cats={cats} />}
    </ScreenLayout>
  );
};

export default Home;
