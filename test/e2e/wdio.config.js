require('babel-register')
require('babel-polyfill')


const url = 'http://m.topshop.com'
const environment = process.env.WDIO_ENVIRONMENT || 'local' // E.g. local, stage and integration
const featuresPath = process.env.FEATURES_PATH || 'test/e2e/features/**/*.feature'
const stepDeffPath = process.env.STEP_PATH || 'test/e2e/features/step_definitions'
const reportsPath = process.env.TEST_REPORTS || 'test/reports/'
const browserName = process.env.BROWSER_NAME || 'chrome'
const reporters = process.env.REPORTERS || 'cucumber'
const maxInstances = process.env.MAX_INSTANCES || 1
const logLevel = process.env.WDIO_LOG_LEVEL || 'error'
const failFast = (process.env.CUCUMBER_FAIL_FAST === 'true') || false

var cucumberTags
if (typeof process.env.CUCUMBER_TAGS !== 'undefined') {
  cucumberTags = process.env.CUCUMBER_TAGS.split(',')
} else {
  cucumberTags = ['@test']
}


exports.config = {
  // =====================
  // Server Configurations
  // =====================
  // Host address of the running Selenium server. This information is usually obsolete as
  // WebdriverIO automatically connects to localhost. Also if you are using one of the
  // supported cloud services like Sauce Labs, Browserstack or Testing Bot you also don't
  // need to define host and port information because WebdriverIO can figure that our
  // according to your user and key information. However if you are using a private Selenium
  // backend you should define the host address, port, and path here.
  host: '0.0.0.0',
  port: 4444,
  path: '/wd/hub',
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    featuresPath
  ],
  // Patterns to exclude.
  exclude: [],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: maxInstances,
  capabilities: [{
    browserName: browserName,
    'phantomjs.binary.path': 'node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs'
  }],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an  way
  // e.g. using promises you can set the sync option to false.
  sync: true,
  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: logLevel,
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: null,
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  baseUrl: url,
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 60000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'cucumber',
  //
  // Test reporter for stdout.
  // The following are supported: dot (default), spec and xunit
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  reporters: reporters.split(','),
  reporterOptions: {
    outputDir: reportsPath + 'bdd/'
  },
  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    require: [stepDeffPath],        // <string[]> (file/dir) require files before executing features
    backtrace: true,   // <boolean> show full backtrace for errors
    compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false,      // <boolean> invoke formatters without executing steps
    failFast: failFast,    // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true,       // <boolean> disable colors in formatter output
    snippets: true,     // <boolean> hide step definition snippets for pending steps
    source: true,       // <boolean> hide source uris
    profile: [],        // <string[]> (name) specify the profile to use
    strict: true,      // <boolean> fail if there are any undefined or pending steps
    tags: cucumberTags,           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 280000,     // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false // <boolean> Enable this config to treat undefined definitions as warnings.
  },

  // =====
  // Hooks
  // =====
  // For more hooks, see: http://webdriver.io/guide/testrunner/configurationfile.html
  //
  // WebdriverIO provides a several hooks you can use to interfere the test process in order to enhance
  // it and build services around it. You can either apply a single function to it or an array of
  // methods. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
    //
  // Gets executed before test execution begins. At this point you can access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before: function (capabilities, specs) {
  },

  // Cucumber specific hooks
  beforeScenario: function () {
  },

  afterStep: function (step) {

  },

  afterScenario: function (scenario) {
  }
}
