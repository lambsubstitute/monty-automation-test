const path = require('path')
const Report = require('cucumber-html-report');

var options = {
  source: path.join(process.env.CIRCLE_TEST_REPORTS, 'bdd', 'bdd-report.json'),
  dest: path.join(process.env.CIRCLE_TEST_REPORTS, 'bdd'),
  name: 'bdd-report.html'
};

var report = new Report(options);
report.createReport();
