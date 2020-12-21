import app from '../../app';
import template from './grades.html';
import './grades-controller';
import './grades.scss';
import grade from './grade/grade';
import gradeModal from './modal/grade-modal';

app.component('grades', {
  template:  template,
  controller: 'GradesController',
  bindings: {
    grades: '='
  }
});
