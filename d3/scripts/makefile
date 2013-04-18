LIBRARY_FILES = \
	node_modules/d3/src/start.js \
	node_modules/d3/src/arrays/map.js \
	node_modules/d3/src/arrays/nest.js \
	node_modules/d3/src/format/format.js \
	node_modules/d3/src/geo/conic-conformal.js \
	node_modules/d3/src/geo/path.js \
	node_modules/d3/src/geom/quadtree.js \
	node_modules/d3/src/layout/force.js \
	node_modules/d3/src/scale/sqrt.js \
	node_modules/d3/src/selection/selection.js \
	node_modules/d3/src/transition/transition.js \
	node_modules/d3/src/xhr/json.js \
	node_modules/d3/src/end.js \
	node_modules/queue-async/queue.js

SOURCE_FILES = \
	src/charts/charts.js \
	src/charts/bar.js \
	src/run.js

lib.js: $(LIBRARY_FILES)
	node_modules/.bin/smash $(LIBRARY_FILES) | node_modules/.bin/uglifyjs - -c -m -o $@

src.js: $(SOURCE_FILES)
	node_modules/.bin/smash $(SOURCE_FILES) | node_modules/.bin/uglifyjs - -c -m -o $@