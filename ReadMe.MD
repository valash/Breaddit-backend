# Breaddit:

Breaddit is a reddit clone with a bread theme. It allows the users to post and comment on people's posts. The goal is to create a site where bread enthusiasts can share recipes and stories about bread related ativities, but you'll be able to post anything.

## Getting Started

### Prerequisites

What things you need to install the software and how to install them

To make sure you have all the dependencies you'll need, first, you'll want to, in the "Breaddit-backend" folder, type `npm i` to make sure that you're installing node modules, and then you're going to follow that up with all the dependencies needed. At the time of this writing, the dependencies needed are :

- Mongoose
- Express
- Body-parser
- Cors

So when you go to type this into your command line, it should read `npm i mongoose express body-parser cors` That will make sure you have all the dependencies you need for the program to run. If you're interested in interacting with the backend without using the front end, you'll also want to download a program called Postman. It allows you to make AJAX requests to the backend without a functioning front end, so you can download it at [this site](https://www.getpostman.com/), and use that to make your AJAX requests instead of the front end (although why you wouldn't want bread based puns is beyond me)

## Give examples

First fork and clone the repo down to your system. Navigate to the appropriate folder in two separate terminals.

In the first terminal, you'll run the phrase `mongod`, in the command line. This is going to start running the database system, which is what you'll need in order to access the database. You should see a ** ton ** of lines of code and then it should end with an empty line, but you should not be in your command line anymore.

In the second terminal, you'll run the command `nodemon`. (If that doesn't work, run the command `npx nodemon`) This is going to start your server and attach it to a local port. You'll need this in order to actually interact with the database.

Once you've run the command nodemon, you'll be able to check if it's working by going to `localhost:3001` in your browser. Since this repo is a backend, you should only see a message that says `"Cannot GET '/'"`. If you're seeing that message, you know it's working.

To interact with the database using the front end, you'll have to clone down the front end half of the application, follow the setup guide, and then you'll be able to use the application as intended

If you don't want to do that for some reason, your other option as listed above is to use Postman. Postman is a little bit complicated, but it's not too difficult to use. You'll open Postman, type the address into the bar at the top, and then you'll have to type out ** JSON ** requests into the body portion, make sure you're using the correct kind of request (the dropdown selector is located next to the address bar) and then press the big blue button on the far left to make your attempt.

### Running the tests

Currently there are no tests and no plans to implement tests into the backend. For now at least.

## Built With

The MERN stack:

- Mongoose
- Express
- React
- Node
  It was also built with teamwork, hard work, sweat, a lot of tears, and at least two separate sacrifices to heroku.

### Versioning

We just have the old commits if you'd like to go back and look through them. It's nothing special, but you can watch our progress (and in some cases watch us lose our minds)

### Authors

Chase Ross
Joey Deras
(Virginia Lash and Alsia Plybeah we're responsible for the front end mostly but helped out here and there)

### License

This project isn't licensed. We're just learning to code.

## Acknowledgments:

Hat tip to anyone whose code was used
Reddit is obviously a major design influence

Joey is the broey\
Chase is the face
