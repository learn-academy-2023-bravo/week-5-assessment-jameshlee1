# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Super method allows data to be passed along classes and sub-classes.

Researched answer: It calls a method on the parent class with the same name as the method that calls super. For example, if you call a method named i_like_chocolate, and then you call super within that method, Ruby will try to find another method with that same name on the parent class of whoever owns this method.

2. What is a gem? 

Your answer: Gems are dependencies and file packages that is used for Ruby.

Researched answer: Gem is an open source libraries that contain Ruby code and are packaged with a little extra data . Using a gem allows a programmer to use the code within the gem in their own program, without explicitly inserting that code.


3. What is a relational database? Are there other kinds of databases?

Your answer: a relational database uses the SQL and stores data in a table that relates to each other through a primary key.

Researched answer: A relational database management system is a program used to create, update, and manage relational databases. Some of the most well-known include MySQL, PostgreSQL, MariaDB, Microsoft SQL Server, and Oracle Database.

4. What are primary keys? Why are they important?

Your answer: A primary key is the parent container that has values and keys.

Researched answer: A primary key contains unique values and identifies each row in a table. For some databases, the primary key cannot contain NULL values. A table can have only one primary key and this primary key can consist of single or multiple columns

5. What are the HTTP verbs? What is each verb's corresponding CRUD action? 

Your answer: Create sends data to server, Read retrieve the data from the server, Update modify and existing data from server and Delete removes the data from server.

Researched answer: The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Ensure that only the valid information is stored in the database. Rails rus all model validations before information is added and will not save if the validations experiences any errors

2. RESTful routes: are how specific requests are directed to code that handles the routes. RESTful routes is a more structured way of defining how a route will work.

3. ERB: (Embedded Ruby) is a file that allows the web developer to embed HTML and Ruby code.

4. Params: add information by passing a value. Adding Params allows the developer to add information by passing the value into the route rather than the URL.

5. API: (Application Programming Interface) which is a set of protocols for building application software.
