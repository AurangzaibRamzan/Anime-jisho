
function findIconSrc(name) {
  let iconSrc = null;

  switch (name) {
    case 'logo':
      iconSrc = require('../../../assets/images/logo.png');
      break;
    case 'home':
      iconSrc = require('../../../assets/images/home.png');
      break;
    case 'SearchAnime':
      iconSrc = require('../../../assets/images/searchMovie.png');
      break;
    case 'SearchCharactor':
      iconSrc = require('../../../assets/images/searchUser.png');
      break;
    case 'search':
      iconSrc = require('../../../assets/images/search.png');
      break;
    case 'noData':
      iconSrc = require('../../../assets/images/noData.png');
      break;
    case 'wifi':
      iconSrc = require('../../../assets/images/wifi.png');
      break;
    case 'left-arrow':
      iconSrc = require('../../../assets/images/left-arrow.png');
      break;


    default:
      iconSrc = null;
      break;
  }

  return iconSrc;
}

export default findIconSrc;
