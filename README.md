##Getting started
npm install
npm start

browse to...
localhost:8080

To import Book data into your mongoDB database. Make sure MongoDB is running then run 'mongo bookAPI < booksJson.js' from the command line.

## Test an endpoint
browse to
http://localhost:3000/api/books

http://localhost:3000/api/books/57dab561f4184504b68cb364




###misc

I used this cmd to export books.json:
 mongoimport -h ds033126.mlab.com:33126 -d book_db -c books -u mike -p 12345 --file books.json --jsonArray


### The demo
Whats included
rest api demo with ?express?
winston for logging
mondodb backend
