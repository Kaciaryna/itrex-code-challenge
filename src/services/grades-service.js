import app from './../app';

const gradesService = app.service('gradesService', ['$http', function($http) {
  const grades = [];
  let firstLoad = true;

  async function loadJson() {
    return $http.get('data/grades.json', {cache: true}).then((response) => {
      return response.data;
    });
  }

  return {
    async getGrades() {
      if (firstLoad) {
        const newGrades = await loadJson();
        grades.push(...newGrades);
        firstLoad = false;
      }

      return grades;
    },

    addGrade(grade) {
      grades.push(grade);
    },

    removeGrade(grade) {
      const index = grades.indexOf(grade);
      grades.splice(index, 1);
    }
  };
}]);

export default gradesService;
