# Dev Log

## An informal log of the build process

The purpose of this log is to have a record of my build process and thoughts for future reference, and to be a tool to help me be more mindful and deliberate about the process.

***

### 2/22/2019

Yesterday we set up a trello board and github repo for the project. I copied over a starter repo from Prime, it's a React/Node/Express/Postgress app with basic user authentication built in already. There's some uneccesary bits like styling, and I'm not happy with the styling or the way redux is set up, but I'm not going to worry about stripping that stuff out now. 

Today's goals are:

- Go over reference material to find out what data I need to keep track of
- Create an Entity releationship diagram
- Create wireframes to know what this thing is going to look like
- Start work on a scope document to sum this all up

### Progress

I've got the 5e SRD open and I figure the best place to start in the Database is to just keep track of player characters, so I'm going to get player attributes in a table somewhere.

looking through just how deep this is, I've decided to just focus on some MVP goals, coming up with a complete ERD for stretch goals would be counter productive at this point, accomplishing the MVP is actually going to be relatively simple.

I've built some dummy data and a die roller, gonna test those. The die roller is a module in the server so no one messes with it. The server is serving up the dummy data, and the die roller rolls and number of any sided dice and serves up an array. gonnna commit and take a break.

didn't actually take a break, wrote an initiative roller instead.

---

### 2/23/2019

After a day with the family, my wife isn't feeling well and going to bed early, so I'm going to get back to it here.

The goals for tonight:

- bring in some material-ui, probably an app bar and side navagation drawers
- work on some components conforming to the wireframes made by the person I'm making this for.


### Progress

I've added an app bar and swipeable nav menu, I've learned a bit about how Material-ui does styling with JSS as well. I can see myself using that. Now I'm going to take a look at what I can do about player and npc cards and stuff, but not before committing.

I got an initiative roller up on the client-side using the code I had already written for the server side. Considering this app is going to mostly be for the DM, I'm not to worried about dice rolls being messed with to not be random. It's actually totally within the DM's mission statement to change rolls if it would be more interesting. If I eventually have players doing their own rolls though, I may want to take that out of their hands. Commiting now and calling it quits for tonight.


---

### 2/24/2019

I've done some very minor tweaking on things during the day, but not much of note. I've got another set of eyes on this thing, and I've gotten some feedback. Tonights goals are simply going to be to work on that feedback which includes:

- hide action buttons on cards it can't be used on
- emphasizing current actor
- further differentiating player characters and npcs

I'll re-evaluate the trello board after that to determine whether or not there's anything I can do tonight.

### Progress

Actions are hidden, that was quick.