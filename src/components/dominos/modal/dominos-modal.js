import app from './../../../app';
import template from './dominos-modal.html';
import './dominos-modal-controller';
import './dominos-modal.scss';

app.component('dominosModal', {
  template:  template,
  controller: 'DominosModalController',
  bindings: {
    dominoItem: '<',
    onAdd: '&',
    onCancel: '&'
  }
});
