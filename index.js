const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let winRecord = records.find(record => record.result === "W");
  if (winRecord) {
    return winRecord.year;
  }
}
