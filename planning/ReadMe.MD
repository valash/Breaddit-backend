Breaddit:
Breaddit is a reddit clone with a bread theme. It allows the users to post and comment on people's posts. The goal is to create a site where bread enthusiasts can share recipes and stories about bread related ativities, but you'll be able to post anything.  

Getting Started

Prerequisites
What things you need to install the software and how to install them

To make sure you have all the dependencies you'll need, first, you'll want to, in the "Breaddit-backend" folder, type "npm i" to make sure that you're installing node modules, and then you're going to follow that up with all the dependencies needed. At the time of this writing, the dependencies needed are :
    Mongoose
    Express
    Body-parser
    Cors

So when you go to type this into your command line, it should read "npm i mongoose express body-parser cors" That will make sure you have all the dependencies you need for the program to run. If you're interested in interacting with the backend without using the front end, you'll also want to download a program called Postman. It allows you to make AJAX requests to the backend without a functioning front end, so you can download it at this site: https://www.getpostman.com/, and use that to make your AJAX requests instead of the front end (although why you wouldn't want bread based puns is beyond me)


Give examples

First fork and clone the repo down to your system. Navigate to the appropriate folder using your terminal. Once in the appropriate folder, you'll need to install the appropriate packages for the applicatino to work. First, you'll need to install the correct dependencies


Once you have the repo, run the command "mongod" in one terminal to make sure your database is running. You should see a whole b. Once your database is running, run nodemon (if this doesn't work try npx nodemon) and this should set your thing to appear in the browser on localhost 3001 (if that's not working, you can set your localhost address by messing with the port in the index.js file). While nothing will pop up on the screen in terms of an actual website, you'll know it's working if it says it "Cannot GET '/'". 


Installing
A step by step series of examples that tell you how to get a development env running

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Give an example
Deployment
Add additional notes about how to deploy this on a live system

Built With
Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors
Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc