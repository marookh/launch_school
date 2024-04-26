// There are some issues in this program 1 it asks for language choice, but doesn't
// confirm it. 2 It doesn't display the result of calculation. 3 It doesn't display 
// the last message and stops the running. 4 it clears the console before displaying the result.
// It doesn't use the selected language as a default language.

// make the program so that it make the choosen language confirmed to the user. 
// if the lanuage is first of the languages, print you chose this lang...
// if the language is the second one, print you chose this lang....

   // The bug is that the `language` variable is reassgined to an invalid value
    // which can something like this: 'gd' and it is this value that is passed to
    // getMessage function to retrieve the message from JSON file. 

I learned a bunch of usefule things from working on this basic program. Although it looks simple,
it thought me that even these simple programs can have lots of bugs and you need debugging skills to
solve them. 