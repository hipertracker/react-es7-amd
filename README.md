# react-es7-amd

This is an example of rebulding [hipertracker/react-es7](https://github.com/hipertracker/react-es7) project rebuild with pure AMD modules.

* All JavaScript files are transpiled with [6to5](https://6to5.org/) library with enabled [experimental ES7 syntax](https://6to5.org/features.html).
* The workflow and communication between components is built using [Reflux](https://github.com/spoike/refluxjs), a slighty [improved](http://blog.krawaller.se/posts/reflux-refinement/) Flux paradigm.

## Install

```
bower install
```

Usage:

```
$ http-server
```

Open `http://localhost:8080`

## Todo

* Add [RequireJS optimizer](http://requirejs.org/docs/optimization.html) to produce single, mangled, compressed file.
* Add unit tests examples
* Add [Semantic-UI](http://semantic-ui.com/) integration 
