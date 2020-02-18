// function codeBreaker (word) {


// }


// //tests:

// function codeBreaker(vnqc) = > word
// function codeBreaker(sdrs) => test
// function codeBreaker () => 


// You are one of santa's elves, and are working in his toy factory in the run up to christmas. In order to get all the toys made in time for christmas, you must complete 10 toys per hour. If you complete less than 10 toys per hour, you will need to let santa know and he will have to take on extra elves to cover for you. Write a function that (takes in the number of toys you have made in a day, and the total time you have worked and) returns your productivity per hour, and one of 2 messages, depending on how whether you have fulfilled your hourly quota: "Congratulations you are a brilliant little helper" or "You are too slow. Tell santa to take on extra help"

function productivity (toysMade, timeWorked) {
    if (toysMade / timeWorked >= 10 ) {
        return "Congratulations, you are a brilliant little helper"
    } else return "You are too slow. Tell santa to take on extra help"
    }
    
    // tests:
    
    productivity(50,5)"Congratulations, you are a brilliant little helper"
    productivity()
    
    //
    
    // Meet Larry, larry is a bit of a wild one. His mates are always getting him into trouble and telling him to pick a fight with anybody on a night out. Larry doesn't like the odds when his opponent is taller than him, but he will take his chances on an enemy his own height. Here, the outcome of the fight is random. In addition, Larry doesn't want to walk too far to fight, and won't start a fight if it takes longer than 2 minutes to get to his enemy. 
    
    // Larry is 170cm and can cover a distance of 2 miles per hour. His opponents' distance is expressed in km.
    // Taking all the above in to account, make a function that tells Larry to either "use escape" when an enemy is either too large, or too far away, or to "finish them" when he can win.
    
    // 
    
    // Test components
    // michael(170, 25) 16)
    // louise(162, 
    // Kanin (168, ) 1 mile
    
    function Larryfight(h,d){
        if (h > 170) {
            return "use escape"
        } else if (d > 0.11 ){
        return "used escape"
        } else if (h===h) {
        var randomOutcome = math.random()
        if (randomOutcome >= 0.5){
            return "use escape"
         } 
        } else return "finish them"
    }