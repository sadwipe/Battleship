import './styles/reset.css';
import './styles/fonts.css';
import './styles/style.css';

import init from './js/init';

init();

document.addEventListener('restartGame', () => {
  init();
});
