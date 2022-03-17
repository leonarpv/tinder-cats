import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';
import styled from 'styled-components';
import Cat from '../../../../domain/entities/Cat';
import CatController from '../../../controllers/CatController';
import {SCREEN_HEIGHT} from '../../../utils/utils';
import CatItem from '../../components/CatItem';

import Loading from '../../components/Loading';
import ScreenLayout from '../../components/ScreenLayout';
import VoteButtons, {VoteAction} from '../../components/VoteButtons';
const Page = styled.View`
  height: ${SCREEN_HEIGHT}px;
  justify-content: space-evenly;
`;

function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [cats, setCats] = useState<Cat[]>([]);
  const flatList = useRef();
  const refreshList = useCallback(async () => {
    const catList = await CatController.getAllCats();
    setCats(catList);
  }, []);

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

  const onRefresh = async () => {
    setRefreshing(true);
    await refreshList();
    setRefreshing(false);
  };
  const handleVote = async ({type, image_id}: VoteAction) => {
    const index = cats.findIndex(item => item.reference_image_id === image_id);
    flatList?.current.scrollToIndex({index: index + 1});
    try {
      await CatController.vote({
        payload: {image_id, value: type as number},
      });
    } catch (error) {}
  };

  const renderItem: ListRenderItem<Cat> = ({item, index}) => (
    <Page>
      <CatItem cat={item} key={`${index}-${item.internalId}`} />
      <VoteButtons cat={item} onPressVote={handleVote} />
    </Page>
  );

  return (
    <ScreenLayout>
      {loading && <Loading />}
      {!loading && cats.length > 0 && (
        <FlatList
          ref={flatList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={renderItem}
          data={cats}
        />
      )}
    </ScreenLayout>
  );
}

export default Home;
