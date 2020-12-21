import app from '../../../app';
import template from './grade.html';
import './grade-controller';

app.component('grade', {
  template:  template,
  controller: 'GradeController',
  bindings: {
    grade: '<',
  }
});
