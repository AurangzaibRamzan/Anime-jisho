import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { get } from 'lodash';

import Image from '../../widget/Image';
import SearchBar from '../SearchAnime/SearchBar';
import FlatList from './FlatList';

import { MainWrapperView, TextWrapper, CoverLabel } from './styles';

export default class index extends Component {
  renderItem = ({ item, index }) => {
    const { navigation } = this.props;
    console.log(item)
    const name = get(item, 'name.first', '') + ` ${get(item, 'name.last', '') ? get(item, 'name.last', '') : ''}`;
    const nameNatve = get(item, 'name.native', '');
    const image = get(item, 'image.medium', 'https://i.pinimg.com/474x/11/da/6c/11da6c29f4ad4236431d0f45ac47c2c2.jpg')
    return <MainWrapperView onPress={() => item.id && navigation.navigate('Character', { id: item.id })}>
      <Image source={{ uri: image }} size={70} style={{ borderRadius: 35 }} />
      <TextWrapper>
        {name && <CoverLabel> {name}</CoverLabel>}
        {nameNatve && <CoverLabel> {nameNatve}</CoverLabel>}
      </TextWrapper>
    </MainWrapperView>
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
      <View style={{ backgroundColor: '#004f4f' }}>
        <SearchBar
          title="Search Character"
          handleInputChange={this.handleInputChange} />
        <FlatList
          data={SearchCharactorQuery}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}