import app from '../../../app';
import template from './domino.html';
import './domino-controller'

app.component('domino', {
  template:  template,
  controller: 'DominoController',
  bindings: {
    dominoItem: "<",
  }
});
