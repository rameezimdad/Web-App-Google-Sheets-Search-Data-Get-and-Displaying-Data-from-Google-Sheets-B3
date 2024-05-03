function doGet() {
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('ASTOE COLLEGE : COLLEGE OF LAHORE')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function searchRollNumber(rollNumber) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  var results = [];
  
  for (var i = 1; i < data.length; i++) {
    if (data[i][5] == rollNumber) { // Assuming F column is column 6 (0-indexed)
      var student = data[i][0];
      var examRoll = data[i][1];
      var program = data[i][3];
      var maxMarks =data[i][7]; // Initially empty
      var obtainMarks = data[i][8]; // Initially empty
      var signature = data[i][9]; // Initially empty
      
      results.push([student, examRoll, program, maxMarks, obtainMarks, signature]);
    }
  }
  
  return results;
}
