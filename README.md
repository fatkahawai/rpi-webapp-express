README

webapp-express

an example of a we bapp server in Node & Express taht procies a RESTful API responding to an ajax request which returns a JSON object which can be directly referenced.

myapu.js is a node.js application. its an http server which serves html and js files,
and also responds to API requests

to start, open terminal window and run node with the myapi.js file as argument
    > node myapi.js

this starts the http server on http://localthost using port 3000

When a user now browses to http://localhost:3000, index.html is loaded (served by myapi.js, 
index.html loads the myclient.js file with the JSON query logic.

