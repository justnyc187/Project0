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



const BabyTomagatchi = {
    name: null,
    age: 0,
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    timer: 0,
    clickName() {
        BabyTomagatchi.name = $("#tomaName").val();
        $(".newTomaName").text(`My Tomagatchi name is ${BabyTomagatchi.name}`);
        $(".window").remove();
        BabyTomagatchi.boredomTimer = window.setInterval(BabyTomagatchi.increaseBoredom, 2222);
        BabyTomagatchi.hungerTimer = window.setInterval(BabyTomagatchi.increaseHunger, 2222);
        BabyTomagatchi.sleepinessTimer = window.setInterval(BabyTomagatchi.increaseSleepiness, 2222);
        BabyTomagatchi.GameTimer = window.setInterval(BabyTomagatchi.increaseTimer, 5000);
        BabyTomagatchi.animateTomagatchi();
        BabyTomagatchi.increaseAge();
        
    },
    decreaseBoredom() {
        if (BabyTomagatchi.boredom < 10) {
            BabyTomagatchi.boredom--;
            console.log("Please Work");
            $("#boredomBar").val(BabyTomagatchi.boredom);
        }
    },
    decreaseSleepiness() {
        if (BabyTomagatchi.sleepiness < 10) {
            BabyTomagatchi.sleepiness--;
            console.log(BabyTomagatchi.sleepiness);
            console.log("Go to sleep");
            $("#sleepinessBar").val(BabyTomagatchi.sleepiness);
        }
    },
    decreaseHunger() {
        if (BabyTomagatchi.hunger < 10) {
            BabyTomagatchi.hunger--;
            console.log("Please Dont be Hungry");
            $("#healthBar").val(BabyTomagatchi.hunger);
        }
    },
    increaseTimer(){
        if(BabyTomagatchi.hunger >= 10){
            return;
        }
        if(BabyTomagatchi.sleepiness >= 10){
            return;
        }
        if(BabyTomagatchi.boredom >= 10){
            return;
        }
        BabyTomagatchi.timer++;
        $("#gameBar").val(BabyTomagatchi.timer);
        if(BabyTomagatchi.timer === 100 && BabyTomagatchi.hunger < 10 && BabyTomagatchi.boredom < 10 && BabyTomagatchi.sleepiness < 10){
        BabyTomagatchi.age++
        $("#tomaAge").text(` Age: ${BabyTomagatchi.age}`);
        $(".tomaSpawn").text(`${BabyTomagatchi.name}'s Tomagatchi has now Spawned, Have Fun changing diapers!`).append(`<img class="babyTomaImg" src="https://i.pinimg.com/236x/f1/12/02/f11202db2143fb61969aed75ad2a0e1f.jpg" alt="baby tomagatchi">`);
        }
    },
    increaseBoredom(){
        if(BabyTomagatchi.timer > 100){
        return;
    }
    if(BabyTomagatchi.hunger >= 10){
        return;
    }
    if(BabyTomagatchi.sleepiness >= 10){
        return;
    }
        BabyTomagatchi.boredom++;
        $("#boredomBar").val(BabyTomagatchi.boredom);
        console.log("increase Boredom")
    },
    increaseHunger(){ 
        if(BabyTomagatchi.timer > 100){
        return;
    }
    if(BabyTomagatchi.sleepiness >= 10){
        return;
    }
    if(BabyTomagatchi.boredom >= 10){
        return;
    }
        BabyTomagatchi.hunger++;
        $("#healthBar").val(BabyTomagatchi.hunger);
        console.log("increase hunger")
    },
    increaseSleepiness() {
        if(BabyTomagatchi.timer > 100){
            return;
        }
        if(BabyTomagatchi.boredom >= 10){
            return;
        }
        if(BabyTomagatchi.hunger >= 10){
            return;
        }
        BabyTomagatchi.sleepiness++;
        $("#sleepinessBar").val(BabyTomagatchi.sleepiness);
        console.log("increase sleepiness")
    },
    increaseAge() {
        console.log("Is this WORKING YET?????");
        if(BabyTomagatchi.timer === 100 && BabyTomagatchi.hunger < 10 && BabyTomagatchi.boredom < 10 && BabyTomagatchi.sleepiness < 10) {
        BabyTomagatchi.age++;
        
        }
    },
    animateTomagatchi() {
        var width = 500;
        console.log("Walk");

        function goRight() {
            if(BabyTomagatchi.hunger >= 10){
                return $(".endGame").text(`So Sorry ${BabyTomagatchi.name}, your Tomagatchi has died of hunger`);
            }
            if(BabyTomagatchi.boredom >= 10){
                return $(".endGame").text(`So Sorry ${BabyTomagatchi.name}, your Tomagatchi has died of Boredom`);
            }
            if(BabyTomagatchi.sleepiness >= 10){
                return $(".endGame").text(`So Sorry ${BabyTomagatchi.name}, your Tomagatchi has died Sleepiness`);
            }
            $(".babyTomaImg").animate({left: 400}, 5000, function() {setTimeout(goLeft, 50);}) .css({transform: "scaleX(1)"});
        }
        function goLeft() {
            if(BabyTomagatchi.hunger >= 10){
                return $(".endGame").text(`So Sorry ${BabyTomagatchi.name}, your Tomagatchi has died of Hunger`);
            }
            if(BabyTomagatchi.boredom >= 10){
                return$(".endGame").text(`So Sorry ${BabyTomagatchi.name}, your Tomagatchi has died of Boredom`);
            }
            if(BabyTomagatchi.sleepiness >= 10){
                return$(".endGame").text(`So Sorry ${BabyTomagatchi.name}, your Tomagatchi has died of Sleepiness`);
            }
            $(".babyTomaImg").animate({left: -300}, 5000, function() {setTimeout(goRight, 50);}) .css({transform: "scaleX(-1)"});
        }
        setTimeout(goRight, 50); 
    }

}


$("#tomaNameButton").on("click", BabyTomagatchi.clickName);
$("#Boredom-button").on("click", BabyTomagatchi.decreaseBoredom);
$("#Sleepiness-button").on("click", BabyTomagatchi.decreaseSleepiness);
$("#Hunger-button").on("click", BabyTomagatchi.decreaseHunger);
