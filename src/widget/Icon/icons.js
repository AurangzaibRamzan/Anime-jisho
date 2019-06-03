function findIconSrc(name) {
  let iconSrc = null;

  switch (name) {
    case 'logo':
      iconSrc = require('../../../asserts/images/logo.png');
      break;
    case 'home':
      iconSrc = require('../../../asserts/images/home.png');
      break;
      case 'SearchAnime':
      iconSrc = require('../../../asserts/images/searchMovie.png');
      break;
      case 'SearchCharactor':
      iconSrc = require('../../../asserts/images/searchUser.png');
      break;

    default:
      iconSrc = null;
      break;
  }

  return iconSrc;
}

export default findIconSrc;
