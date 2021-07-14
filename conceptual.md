### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT = JSON Web Token

- What is the signature portion of the JWT?  What does it do?
The signature portion of a JWT is a hashed value using the body of the JWT as data, a secret key and a hashing algorithm to generate it. It essentially makes it so a JWT can be authenticated against a secret key, so that you can see if it's valid and not tapered with.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, JWT's are only used to sign and authenticate a users information, not encrypt it.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
You can generate a JWT when a user account is created or logs in, this can be passed in the response header to authentication middleware that is used on routes that check for the correct user. when you hit a route checking if you are logged in, admin, etc, the jwt can be authenticated and you can continue to run the route, other wise throw authentication errors.

- Compare and contrast unit, integration and end-to-end tests.
Unit testing tests smaller portions of an app usually, methods,functions, etc. integration testing usually concerns all the portions of models/routes and testing various request/response and database calls. end to end testing would be a test of the actual user usage and experience, from them loading the page and clicking through the app.

- What is a mock? What are some things you would mock?
Mock functions are functions that can be defined and used in tests, they are commonly used when there are variables that would change often or when you are using random numbers. using a mock and create static values instead but still test the same functionality of a function.

- What is continuous integration?
Constantly deploying small pieces of code vs pushing large updates.

- What is an environment variable and what are they used for?
A high level variable that is set and used by multiple applications, this is usually settings for how your app with behave or configuring for testing.

- What is TDD? What are some benefits and drawbacks?
Test driven development. Some benefits are having a code base that as you code it, passes all tests, so it will potential free of bugs and very organized. drawback is that you need to take time upfront to code the tests, taking away from just going straight into writting routes/models etc.

- What is the value of using JSONSchema for validation?
Prevents inaccurate db data or data in general that is used in your app.
Sanitizes data essentially.

- What are some ways to decide which code to test?
Each route and major function or model, also any code that is repeated and used often.

- What are some differences between Web Sockets and HTTP?
lol

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?

Only thinc I might have preferred about learning flask was using an ORM and learning it along side front end libraries, like the one that controls form validation. I guess it was kinda ok refreshing my SQL query skills though.