function createMessage(A, B, C){
    return `I have to go to ${A} to play my ${B} with ${C} `
};

function location(){
    location = ['New York', 'London', 'Paris'];
    return location[Math.floor(Math.random()*3)]
};

function instrument(){
    instrument = ['Piano', 'Double Bass', 'Flute'];
    return instrument[Math.floor(Math.random()*3)]
};

function famousPerson(){
    famousPerson = ['Elton John', 'Boris Johnson', 'Drake'];
    return famousPerson[Math.floor(Math.random()*3)]
};

console.log(createMessage(location(),instrument(),famousPerson()))

