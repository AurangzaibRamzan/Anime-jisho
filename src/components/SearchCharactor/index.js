import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import SearchBar from '../SearchAnime/SearchBar';
import FlatList from './FlatList';

import {
  MainWrapperView,
  TextWrapper,
  CoverLabel,
  CharacterImage,
  MainView,
} from './styles';

export default class SearchCharacter extends Component {
  renderItem = ({ item }) => {
    const { navigation } = this.props;
    const name = `${get(item, 'name.first', '')}  ${get(item, 'name.last', '') ? get(item, 'name.last', '') : ''}`;
    const nameNatve = get(item, 'name.native', '');
    const image = get(item, 'image.medium', 'https://i.pinimg.com/474x/11/da/6c/11da6c29f4ad4236431d0f45ac47c2c2.jpg');
    return (<MainWrapperView onPress={() => item.id && navigation.navigate('Character', { id: item.id })}>
      <CharacterImage source={{ uri: image }} size={70} />
      <TextWrapper>
        <CoverLabel> {`${name === null ? '' : name}`}</CoverLabel>
        <CoverLabel> {`${nameNatve === null ? '' : nameNatve}`}</CoverLabel>
      </TextWrapper>
    </MainWrapperView>);
  }

  handleInputChange = (text) => {
    this.props.SearchCharactorQuery.refetch(
      ({
        search: text === '' ? 'a' : text,
      }),
    );
  }


  render() {
    const { SearchCharactorQuery } = this.props;
    return (
      <MainView>
        <SearchBar
          title="Search Character"
          handleInputChange={this.handleInputChange} />
        <FlatList
          data={SearchCharactorQuery}
          renderItem={this.renderItem}
        />
      </MainView>
    );
  }
}

SearchCharacter.prototypes = {
  SearchCharactorQuery: PropTypes.object,
  navigation: PropTypes.object,
};
