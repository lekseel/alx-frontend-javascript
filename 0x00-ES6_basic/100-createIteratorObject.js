export default function createIteratorObject(report) {
  const allEmployees = [];

  for (const department in report) {
    const employees = report[department].employees;
    allEmployees.push(...employees);
  }

  return allEmployees[Symbol.iterator]();
}
