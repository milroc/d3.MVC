d3.MVC
==============

This repository is very similar to the ToDoMVC library built to compare MVC front-end frameworks but it will be comparing front end frameworks and their ability to work with d3.js. This was created for the talk on reusable visualizations ([slides](http://bl.ocks.org/milroc/raw/5553051/#0)).

-Miles
[@milr0c](https://twitter.com/Milr0c)

# Installation

`git clone --recursive git://github.com/milroc/d3.MVC.git`

# Running

In order to run a specific example. `python -m SimpleHTTPServer` in that directory will allow you to run it, if not I recommend you look at the README.md in said subfolder.

# Code Structure

### reusable API

The [reusable](http://bost.ocks.org/mike/chart/) visualiztion API is an initial paradigm that Mike Bostock has given in the talk. He goes over a convention that is used to create the reusable components of d3.js (e.g [d3.svg.axis](https://github.com/mbostock/d3/wiki/SVG-Axes)). Every example in this folder of the repository is using the name of the folder (e.g: /d3.MVC/reusableAPI/angular is using [angular.js](http://angularjs.org/)). 

### MVC Paradigm

This is following an object oriented MV* paradigm that would be akin to leveraging the library itself, this is not leveraging the d3.js reusable chart API.

### vanilla d3.js

This is the code created solely in d3.js with little to no encapsulation.

# Please Pull Request

### gist based

If your favorite purely frontend MV* framework isn't supported, create a gist and add it as a submodule. Follow `vanillad3` as an example.

### github based

Please only create your own repository, if the framework supported is one of the hybrid frontend/backend system (e.g: derby, meteor). Follow `reusableAPI/derby-barchart` as an example.