
                                            TOMA WORLD MISSION
    You begin in Toma World as a young baby dinosaur and with just the right amount of sleep, food and play, you might make it to your first birthday, and spawn into a bigger dinosaur. You will have to make sure your hunger, sleepiness and boredom leves dont get too high, or else you will die!
    Take care of your Toma as if they were your own child, and maybe you will get to see them grow into another little monster.

                                                APPROACH
    Since I am a father of a 4 year old little girl, I approached this project with her in mind, and wanted to create a game that my daughter would; A. have fun playing, B. have the attention span to play, C. be able to play with easy functionality.

    - created a playful easy ui that would be inviting for the younger age range
    - The game has only 4 buttons so as not to overwhlem younger kids, and make it a game that they could play on their own if need be
    - The length of game can be decided by changing intervals but I wanted to keep it fairly short because as we all know kids have a very short attention span

                                                Specifications
    - Enter your name, Name is entered into text and displayed on page and game begins
    - On game begin the Hunger, Sleepiness, Boredom levels, as well as game timer will all increase on games start
    - you must click the buttons associated with each meter in order to decrease the values and keep your tomagatchi alive
    - If the game timer has completed and your Tomagatchi's Hunger, Sleepiness and Boredom levels are all below the limit, then you have succeeded in keeping your Tomagatchi alive, it will increase in age and spawn into a beatiful new creature

                                                PROPERTIES
    - Name 
    - Age
    - Hunger
    - Boredom
    - Sleepiness
    - Spawn Timer
    

!![IMG_4274](https://media.git.generalassemb.ly/user/35204/files/8b53c380-992e-11eb-9f6c-393308c7b22f)
!![IMG_4273](https://media.git.generalassemb.ly/user/35204/files/8c84f080-992e-11eb-9312-0b180cd22e94)











    
    
                                                // M.V.P

// MISSION - "keep tomagotchi alive"

// User Story
                    // UI 1
// Opening UI will have a box with a name input 
// User types in name in the opening "name" window and pushes the click button and game begins


/* more details */ 
// When User types in name and hits click button it will trigger a multitude of event listeners


/* click button event listeners on game begin */
// name will be appended to the second section of the UI
// Hunger timer/bar will increase ++1 every 5000ms - if hunger reaches 10 tomagatchi will die
// Boredom timer/bar will increase ++1 every 4000ms - if boredom reaches 10 tomagatchi will die
// Sleepiness timer/bar with increase ++1 every 7000ms - if sleepiness reaches 10 tomagatchi will die
// Age timer will start at a default of 120,000ms and decrease by 1000ms - if tomagatchi is still alive after 120,000 - baby tomagatchi will spawn into nigger tomagatchi

                                            
                                            // UI Section 2
// User will see a page with Users "name" displayed
// the tomagatchi
// Sleepiness bar 
// Boredom bar
// Hunger bar
// tomagatchi age
// User will have to click buttons in order to keep tomagatchi from being Hungry, Tired or Bored

/* more details */
// 2nd UI page will open 
// tomagatchi age will increase ++1 if Boredom, Hunger and Sleepiness are < 10 && age timer = 0
// Hunger timer will begin at a default of 0 -> event listener - and it will ++1 every 5000ms
// Boredom timer will begin at a default of 0 -> event listener - and it will increase ++1 every 4000ms
// Sleepiness timer will begin at a default of 0 -> event listener - and it will ++1 every 7000ms
// Age timer will begin at 120,000ms and decrease by 1000ms
// tomagotchi will walk around while it is alive
// if Tomagatchi's Sleepiness, Boredom or Hunger reaches 10, tomagatchi will die
// if Boredom, Sleepiness and Hunger timer < 10 && Age time is = 0, tomagatchi will spawm + age will increase ++1
// text will appear "'User' is now 1 year old" and baby 
