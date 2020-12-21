import app from '../../app';
import template from './dominos.html';
import './dominos.scss';
import './dominos-controller';
import dominosModal from './modal/dominos-modal';
import domino from './domino/domino';

app.component('dominos', {
  template:  template,
  controller: 'DominosController'
});
