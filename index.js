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
}

function createTimeOutEvent(record, date) {
  let timeOutEvent = {
      type: "TimeOut",
      hour: parseInt(date.split(" ")[1]),
      date: date.split(" ")[0]
  }
}

function hoursWorkedOnDate() {

}
