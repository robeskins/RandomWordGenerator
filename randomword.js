function createMessage(A, B, C){
    return `I have to go to ${A} to play my ${B} with ${C} `
};

function location(){
    location = ['New York', 'London', 'Paris', 'Dublin'];
    return location[Math.floor(Math.random()*4)]
};

function instrument(){
    instrument = ['Piano', 'Double Bass', 'Flute', 'Drums'];
    return instrument[Math.floor(Math.random()*4)]
};

function famousPerson(){
    famousPerson = ['Elton John', 'Boris Johnson', 'Drake', 'Rob Eskins'];
    return famousPerson[Math.floor(Math.random()*4)]
};

console.log(createMessage(location(),instrument(),famousPerson()))

