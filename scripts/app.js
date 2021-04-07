console.log("Hi Justin");
console.log("Your Game Has Begun");                    
                    
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
//



/*
    const BabyTomagatchi = {
        tomagatchiName = tomaName,
        age = 0,
        hunger = 0,
        sleepiness = 0,
        boredom = 0
    }
*/

$("#tomaNameButton").click(clickName);
function clickName(){
    const newTomaName = $("#tomaName").val();
    $(".newTomaName").text(`My Tomagatchi name is ${newTomaName}`);
    console.log(newTomaName);
}

$("button").on("click", function(event){
    console.warn("gameStart");
});
