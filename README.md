## Server mock tech test at Makers

### How to run it:

* clone this repo;
* $ cd lib
* $ node server.js
* go to localhost:4000

* create a set of key & value for example:
http://localhost:4000/set?coding=fun
* retrieve the value of a key:
http://localhost:4000/get?key=coding

### Task:

"Before your interview, write a program that runs a server that is accessible on http://localhost:4000/. When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory. When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code."

### If I had more time...

* I would make the Storage an array of objects instead of an array of arrays;
* I would finish one unfinished test.
