// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
  "firstName": firstName,
  "familyName": familyName,
  "title": title,
  "payPerHour": payPerHour,
  "timeInEvents": [],
  "timeOutEvents": []
  }
}

function createEmployeeRecords(employeeData) {
  return employeeData.map(createEmployeeRecord)
}
// date format "YYYY-MM-DD HHMM"
function createTimeInEvent(record, date) {
  let timeInEvent = {
      type: "TimeIn",
      hour: parseInt(date.split(" ")[1]),
      date: date.split(" ")[0]
  }
  record.timeInEvents.push(timeInEvent)
  return record
}

function createTimeOutEvent(record, date) {
  let timeOutEvent = {
      type: "TimeOut",
      hour: parseInt(date.split(" ")[1]),
      date: date.split(" ")[0]
  }
  record.timeOutEvents.push(timeOutEvent)
  return record
}

function hoursWorkedOnDate(employee) {
  // calculates that the employee worked 2 hours
   
}

function wagesEarnedOnDate() {
  
}

function findEmployeeByFirstName() {
  
}

function calculatePayroll() {
  
}