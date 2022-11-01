document.getElementById("excusa").innerHTML=onLoad();      
function onLoad(){    
    
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed', 'crushed', 'broked'];
    let when = ['before the class', 'right in time','when i finished', 'during my lunch','while i was praying'];
   
    let randomNumber = (long) => {
        return Math.floor(Math.random()*long);
    };
    
    return `${who[randomNumber(who.length)]} ${what[randomNumber(what.length)]} ${when[randomNumber(when.length)]}`;  
    }
console.log(onLoad());
