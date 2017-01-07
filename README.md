# AngularDash angular-dash
## Simple DataViz Management System based on AngularJS, Bootstrap, D3js and C3js

AngularDash is a simple DataViz Management System, that build on top of [RDash](https://github.com/rdash/rdash-angular) to natively implement data visualization in D3js and C3js.

* Get and manipulate data with AngularJS controllers
* Use directives to build d3js / c3js object the angular way
* Add as many visualization contexts you need by building stand alone app (see below for further details)

[//]: # Check out the [live example](?)!

## What's new
AngularDash helps organize data visualization projects in dashboards, using the Angular philosophy to create d3js / c3js objects. It has a basic set of UI tools that inherits from rdash-angular, and organize dashboards into stand-alone apps. Each app can develop its own html template and js scripts, or use the standard resources provided internally by AngularDash.

## Usage

What follows are the instructions for RDash-Angular project, which are the same for this.
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

### Installation
1. Clone the repository: `git clone hhttps://github.com/lilloraffa/angular-dash.git`
2. Install the NodeJS dependencies: `npm install`.
3. Install the Bower dependencies: `bower install`.
4. Run the gulp build task: `gulp build`.
5. Run the gulp default task: `gulp`. This will build any changes made automatically, and run a live reload server on [http://localhost:8888](http://localhost:8888).

The code to be deployed is automatically generated and saved into the `dist` directory.

### Development
Continue developing the dashboard further by editing the `src` directory. With the `gulp` command, any file changes made will automatically be compiled into the specific location within the `dist` directory.

If you'd like to include any additional modules/packages not included with angular-dash, add them to your `bower.json` file and then update the `src/index.html` file, to include them in the minified distribution output.
