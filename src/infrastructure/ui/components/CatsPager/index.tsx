import React from 'react';
import {ListRenderItem} from 'react-native';
import styled from 'styled-components/native';
import {useRef, useState} from 'react';
import Cat from '../../../../domain/entities/Cat';
import CatItem from '../CatItem';
import {SCREEN_HEIGHT} from '../../../utils/utils';
import {FlatList} from 'react-native-gesture-handler';
import VoteButtons, {VoteAction} from '../VoteButtons';
import CatController from '../../../controllers/CatController';

const Page = styled.View`
  height: ${SCREEN_HEIGHT}px;
  justify-content: space-evenly;
`;

const CatsPager = ({cats}: {cats: Cat[]}) => {
  const [indexPage, setIndexPage] = useState(0);
  const pagerRef = useRef<ViewPager>(null);
  const handleVote = async ({type, image_id}: VoteAction) => {
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

  return <FlatList renderItem={renderItem} data={cats} />;
};

export default CatsPager;
