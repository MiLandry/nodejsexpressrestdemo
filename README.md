##Getting started
npm install
npm start

browse to...
localhost:8080

To import Book data into your mongoDB database. Make sure MongoDB is running then run 'mongo bookAPI < booksJson.js' from the command line.


###misc

I used this cmd to export books.json:
 mongoimport -h ds033126.mlab.com:33126 -d book_db -c books -u mike -p 12345 --file books.json --jsonArray