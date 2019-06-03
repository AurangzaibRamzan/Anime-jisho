import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import { ImageWrapper } from './styles';

class Image extends React.Component {

  render() {
    const {
      name, source, size, height, width, ...restProps
    } = this.props;

    if (get(source, 'uri') === null || get(source, 'uri') === '') return null;

    return (
      <ImageWrapper
        source={source}
        width={width || size}
        resizeMethod={'auto'}
        resizeMode={'contain'}
        progressiveRenderingEnabled={true}
        height={height || size}
        {...restProps}
      />
    );
  }
}

Image.propTypes = {
  name: PropTypes.string,
  source: PropTypes.any,
  background: PropTypes.bool,
  size: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
};

Image.defaultProps = {
  size: 14,
  background: false,
};

export default Image;
