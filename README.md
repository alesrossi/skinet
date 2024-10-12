# Skinet! A simple Ecommerce website
Skinet is my biggest project so far, a fullstack application for an commerce website.
To try this project you can visit this link: https://skinet-sharp.alessandrorossi.tech/


# Technology Stack
![My tech stack](https://i.imgur.com/0UsSggl.png)

For the backend I chose to work on dotnet as I consider myself to be proficient with C# and Entity Framework works really well with relationship databases.
I used postgres as my main DB and Redis as a support for the basket (a basket is created for everyone, including clients who have not created an account) and for caching to speed up the application. Both of them are managed and installed using a [docker-compose file.](https://github.com/AlessandroRossi-unige/skinet/blob/master/docker-compose.yml)

For my javascript framework I chose Angular as it supports Typescript from the start and it scales really well, one of the main focus on this project is scalability and modularity.
To make it look better I chose Boostrap for its simplicity. For payments I use stripe, again its simplicity made it a very clear choice.

## Backend

The main focus of this project was to create the foundation of an easily scalable project, to accomplish this I implemented the Unit of work and Repository patterns.

![Unit of work](https://www.asp.net/media/2578149/Windows-Live-Writer_8c4963ba1fa3_CE3B_Repository_pattern_diagram_1df790d3-bdf2-4c11-9098-946ddd9cd884.png)

With these patterns I'm able to add generic entities with ease, while mantain the abstraction layer. This makes it convenient to switch DB, in fact at the start of the project I wsa using sqlite but I was able to switch to postgres for production.

## Frontend

Angular makes it really easy to create modular applications, my focus was to reuse as much code as possible, many shared components can be found in the [shared folder.](https://github.com/AlessandroRossi-unige/skinet/tree/master/client/src/app/shared)

## Stripe

Stripe was easy to setup, the main challenge was setting up the authentication API but using JWT I was able to ensure that no unathorised user made any payments.
To test a payment in the demo app you can use the 4242 4242 4242 4242 card number alongside any expiration and CVC.

## Installation

 1. Clone the repo:
	```shell
	$ git clone https://github.com/AlessandroRossi-unige/skinet.git
 2. Create docker containers:
	```shell
	$ docker-compose up -d
 3. Install nodejs dependencies on client:
	  ```shell
	$ npm install
## Final notes

If you are an HR or a recruiter and you want more information on this project, feel free to send me an email at alessandro0024@gmail.com
Many thanks to professor Neil Cummings for his: [ incredible course.](https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-net-core-and-angular/)



