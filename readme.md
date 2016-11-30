* READ ME
 BEFORE STARTING -

 1. you will need to run ```npm i``` from the terminal in the root of the test project folder. This will pull down all the required node packages and creates the node folders.

 2. install selenium server in to the node folder using ```./node_modules/.bin/selenium-standalone install``` in the terminal in the root of hte test project

you should be ready to start writing and running tests

To run the tests, make sure you ahve the selenium server running in a different terminal, then from the root of hte project run ```./node_modules/.bin/wdio test/e2e/wdio.config.js```
This will run all the tests in the feature file ```filter-by-colour.feature```
