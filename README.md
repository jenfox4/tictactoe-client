# Tic Tac Toe Game-- Project One by Jen Fox WDI cohort 26

## Technologies Used:

- AJAX
- Javascript
- HTML
- CSS
- Sass
- Bootstrap
- Tic Tac Toe API
- Minimax Game Theory Algorithm and simple artificial intelligence


## Planning and development process:

I organized the structure of my documents first. I started by breaking down the project into various smaller projects: the authentication API interaction, the game API interaction, the game logic, the user interface, and the computer/AI logic. Then, I created folders and documents named after those various smaller projects. I begin by working on the game logic. Then, I worked on the authentication API interaction and then the game API interaction. Finally, I put it together with a user interface and then worked on the computer/AI logic.

When working on my API interactions, I worked meticulously to ensure each document interacted with each other just as it should. I compartmentalized my event handlers in index.js which linked to events.js that included the functions that called upon the API and then interacted with the UI. In api.js I used AJAX to access the api and retrieve and send information. I used ui.js to create functions that changed the user interface depending on the API information.

My favorite part of the project was working on the computer logic. As someone passionate about cognitive sciences, artificial intelligence fascinates me. First, I started with a basic “easy mode” computer which was simply a random number generator that choose a spot for the computer to select. The next step was to make the computer unbeatable. I found the game theory algorithm called the Minimax Algorithm that analyzes the each empty spot to see what could possibly happen if the computer chooses that spot. Although I know there are already code solutions to the Minimax Algorithm for Tic Tac Toe, but, as a math lover and a curious problem solver, I wanted to figure out how I could turn this decision tree into code without looking at anyone else’s code.

The first thing I did to figure out how to write the Minimax Algorithm was do it myself. I once heard a talk at a tech event that said, “If you can’t manually do it, how can you expect the computer to do it?”. So, I wrote out the entire Minimax Algorithm for a Tic Tac Toe game. Then, I systematically and meticulously went through my own steps. I wrote instructions as if I was speaking to a five year old. What was it that I did first? What was it I did next? My instructions looked like this: “First, I made a list of all empty positions. Then, I put X in the first empty position. Next, I looked at all the empty position to see where O could go next…”. Based on these logic steps, I started coding. Through coding, my code slowly evolved to be better and better as I console logged and figured out what was happening each step of the way.

It was exhilarating to see the computer slowly get better and make better choices as I evolved my code to be more complex. I have a long way to go and I know there are more efficient ways to write recursives than nested loops, but the process of creating a computer that can make decisions was invigorating.


## Future intentions:

Looking through my code post functionability, I realize how overdone much of the code is. There are nested for loops when there could be recursions. There are for loops when I could use for each. Frankly, it looks like spaghetti code. My future intentions are to clean up the code to make sure it is as precise and to the point that it can be while not being so short it’s unreadable.

Now that I have a grasp on the Minimax Algorithm, I would like to improve upon it. I would like to make this function recursive and I would like to make it so that it is smaller and faster. I have now seen other’s code that is only a few lines long and I would like to shorten mine to that it is also clean and precise. My Minimax code is not unbeatable as of yet as there are a few cases that the computer is tricked on, so I would like to tighten that code to be unbeatable.

I would also like to work on the multiplayer API. I would like my game to be played through multiple devices.


## Wireframes and User stories:

User stories for Tic Tac Toe:
-As a competitive user, I want to keep score and know my winning streak.
-As a power user, I want to be able to play games over and over again without signing out.
-As a user that likes short games, I want to be able to play a computer and not have my friends log in.
-As a designer, I want a sleek interface with not too many flashy things.
-As an iphone lover, I want a responsive webpage that plays on my phone.

UI sketches from moqups attached.
![change password](https://media.git.generalassemb.ly/user/15464/files/d181dfd4-9af0-11e8-9521-ca02f6fdf05b)
![error message](https://media.git.generalassemb.ly/user/15464/files/d19420d6-9af0-11e8-809a-034756234dd4)
![game over](https://media.git.generalassemb.ly/user/15464/files/d1a18f0a-9af0-11e8-9222-fd2cb62b0739)
![mainmenu](https://media.git.generalassemb.ly/user/15464/files/d1b09e0a-9af0-11e8-9f99-469674b41ea9)
![newgame](https://media.git.generalassemb.ly/user/15464/files/d1c39f8c-9af0-11e8-9ab4-9408482144ef)
![signin](https://media.git.generalassemb.ly/user/15464/files/d1d0ee76-9af0-11e8-80eb-0d1da484c200)
![signinsuccess](https://media.git.generalassemb.ly/user/15464/files/d1dfaa56-9af0-11e8-8b0a-d8aa3f2cf271)
![signup](https://media.git.generalassemb.ly/user/15464/files/d1f15e9a-9af0-11e8-9925-8bafbbd911ef)
![signupsuccess](https://media.git.generalassemb.ly/user/15464/files/d2016b32-9af0-11e8-9404-eb199e8ea3cb)
![successful password](https://media.git.generalassemb.ly/user/15464/files/d21075aa-9af0-11e8-93e2-d08b5178b59d)
![waiting for other player](https://media.git.generalassemb.ly/user/15464/files/d221e614-9af0-11e8-9ac5-e21ea8efa332)
![wrong username password](https://media.git.generalassemb.ly/user/15464/files/d2321142-9af0-11e8-8ef0-e86355446d76)
