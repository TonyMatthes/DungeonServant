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
---
I've got the 5e SRD open and I figure the best place to start in the Database is to just keep track of player characters, so I'm going to get player attributes in a table somewhere.
---
looking through just how deep this is, I've decided to just focus on some MVP goals, coming up with a complete ERD for stretch goals would be counter productive at this point, accomplishing the MVP is actually going to be relatively simple.
---
I've built some dummy data and a die roller, gonna test those. The die roller is a module in the server so no one messes with it. The server is serving up the dummy data, and the die roller rolls and number of any sided dice and serves up an array. gonnna commit and take a break.

