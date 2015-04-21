studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
  $scope.addStudentWithPermissionSlip = function(student) {
    student.permissionSlip = true;
  };



});
