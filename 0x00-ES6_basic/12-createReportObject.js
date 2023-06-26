export default function createReportObject(employeesList) {
  const allEmployees = employeesList;
  
  const reportObject = {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  
  return reportObject;
}
