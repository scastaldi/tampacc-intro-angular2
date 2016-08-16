# tampacc-intro-angular2
## Introduction to Angular2

### This project was made as a progressive learning tool, for students to be able to learn step by step. 

**Prerequisites:**
- NodeJS 6.x
- npm 3.x

Feel free to download a zip version or use the git command prompt (preferred)

```
$ git clone https://github.com/scastaldi/tampacc-intro-angular2.git
$ cd tampacc-intro-angular2/
$ git pull -all
$ git checkout step0 (or any branch you want to checkout)
$ npm install
$ npm start
```

Each branch has a step, if the student is not able to continue, they can just get the next step, 
find out what was missing and continue with the lesson. 
Each step is a git branch, for example, if the student wants to go to step 1 just need to type from the command:
$ git checkout step1

**step0**:
we start with our master branch, here we have the basic tools to start our angular2 application
index.html, package.json, tsconfig.json, systemjs.config.js, typings.json, node_modules

**step1**: the basic components to start our new application:
* *app.component*: is the starting point of all angular2 apps, where most of the components are imported.
* *moduleid*: used by CommonJS to resolve template urls and styles, if not declare it will always look in the root folder
* *selector*: name of the component (always use kebab notation) 
* *template*: used for inline html, remember to use back tick ` for multiline
* *templateUrl*: refer to an external html used by the component
* *styles*: Array of styles used by the component,
* *directives*: Array of directives used by the component

**step2**: create EmployeeListComponent, move inline html to external html
First we create a folder for the employeelist
use templateUrl to separate html from javascript

**step3**: create a simple EmployeeService that returns a static list of employees, also create a EmployeeModel

**step4**: create a simple Promise we will talk about RxJs but it will not be cover in the introductory course. 
create settings.json to hide .js files from the project 

**step5**: add a simple styling to our code with CSS

**step6**: upgrade to rc.5

