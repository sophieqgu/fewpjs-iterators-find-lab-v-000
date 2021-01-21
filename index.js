const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let record = records.find(result => result === "W");
  if (record) {
    return record.year;
  }
}
