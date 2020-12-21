import app from './../../../app';
import template from './grade-modal.html';
import './grade-modal-controller';

app.component('gradeModal', {
  template:  template,
  controller: 'GradeModalController',
  bindings: {
    onAdd: '&',
    onCancel: '&',
  }
});
