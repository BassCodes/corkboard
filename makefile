debug: clean build js_debug

clean:
	-rm -rf target
	-rm -rf .sass-cache

build: javascript
	- mkdir target
	sass source/scss/main.scss target/style.css
	-mkdir target/assets
	cp source/assets/* target/assets/
	cp source/index.html target/index.html

javascript: 
	npx rollup -c

js_debug:
	-mkdir target/js
	cp -r source/js/* target/js/
