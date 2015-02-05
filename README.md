

Turn Based Game

Description

Create a Final Fantasy style game

Objectives

Learning Objectives

After completing this assignment, you should

Understand how and why to sketch a user flow
Understand CRC cards and domain objects
Understand how and why to write features as user stories
Understand how and why to use prototypical inheritance
Performance Objectives

After completing this assignment, you be able to effectively use

Trello
Details

Deliverables

Individual

A set of sketches (either on paper or digital) of the screens of your app
A set of CRC cards (either on paper or digital) of your domain objects.
A Trello board with all of the features of your app written out as user stories. (You should write as many stories as possible before programming so that tasks can be more easily delegated amongst the team).
Group

A repo containing at least:
main.js
index.html
Requirements

No JSHint warnings or errors
Normal Mode

You will be building a turn based battle game. If you're familiar with older
video games, think of Pokemon or Final Fantasy. The UI can be very very basic,
just some headings for names and info, a dropdown, and a couple of buttons. If
you have no idea what any of this means, read through
this
and/or watch this.

The gameplay should go back and forth between an enemy and the player, each inflicting damage on the other when they launch a successful attack.
There should be multiple player types.
There should be multiple enemy types.
You should be able to select the player type from a dropdown.
The enemy type should be randomly generated.
The player should manually select the "Fight" action to attack.
The enemy should automatically attack when it is its turn.
You should use constructors and prototypes for the players and enemies.
The player's health should be visible.
The enemies health may be visible, at your discretion.
Hard Mode

The player should be able to either "Fight" or "Use Magic", or some similar setup. Each player type should have different types of attack and/or magic.
Give the player the ability to use items, such as items that regain health or increase attack.
Make a party of players, rather than just one (a la Final Fantasy). The game play would cycle between Player 1 -> Enemy -> Player 2 -> Enemy, etc.
Implement "ailments". E.g. being poisoned makes you weaker, being put to sleep makes you skip your turn.
Nightmare Mode

Use http://tiny-pizza-server.herokuapp.com/ to make the game multiplayer. You could either have multiple players, or have one person control the enemy and one control the player.
Notes

Feel free to use separate JavaScript files to avoid merge conflicts.
Additional Resources

Artwork is not required, but if you'd like to include artwork, this might help. Maybe this too. Get your game working before you introduce artwork. If you have a beautiful page that doesn't work, it will be considered an incomplete assignment.
