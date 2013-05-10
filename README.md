d3.MVC
==============

This repository is very similar to the ToDoMVC library built to compare MVC front-end frameworks but it will be comparing front end frameworks and their ability to work with d3.js. This was created for the talk on reusable visualizations ([slides](http://bl.ocks.org/milroc/raw/5553051/#0)).

-Miles
@milr0c


# reusable API

The [reusable](http://bost.ocks.org/mike/chart/) visualiztion API is an initial paradigm that Mike Bostock has given in the talk. He goes over a convention that is used to create the reusable components of d3.js (e.g [d3.svg.axis](https://github.com/mbostock/d3/wiki/SVG-Axes)). Every example in this folder of the repository is using the name of the folder (e.g: /d3.MVC/reusableAPI/angular is using [angular.js](http://angularjs.org/)). 

# MVC Paradigm

This is following an object oriented MV* paradigm that would be akin to leveraging the library itself, this is not leveraging the d3.js reusable chart API.

# vanilla d3.js

This is the code created solely in d3.js with little to no encapsulation.

# Running

In order to run a specific example. `python -m SimpleHTTPServer` in that directory will allow you to run it, if not I recommend you look at the README.md in said subfolder.

# please pull request

There are some inherent paradigms with a given MVC framework that may not be followed. If you notice something feel free to change it and pull request.