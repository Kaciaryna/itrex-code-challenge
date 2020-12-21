import 'bulma';
import 'regenerator-runtime/runtime';

import './style.scss';

import app from './app';
import './components/dominos/dominos';
import './components/grades/grades';
import './components/dominos/dominos-controller';
import './services/grades-service';

app.config(['$stateProvider', function($stateProvider) {
  [
    {
      name:      'dominos',
      url:       '/dominos',
      component: 'dominos'
    },

    {
      name:      'grades',
      url:       '/grades',
      component: 'grades',
      resolve: {
        grades: function(gradesService) {
          return gradesService.getGrades();
        }
      }
    },

    {
      name: 'grades.grade',
      url: '/{gradeId}',
      component: 'grade',
      resolve: {
        grade: function(grades, $stateParams) {
          return grades.find(function(grade) {
            return grade.id === $stateParams.gradeId;
          })
        }
      }
    }
  ].forEach((state) => $stateProvider.state(state))
}]);

app.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/dominos');
}]);
