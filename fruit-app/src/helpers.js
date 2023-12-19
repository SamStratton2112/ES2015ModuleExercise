
const choice = (fruits)=>{
    let choiceIdx = Math.floor(Math.random() * fruits.length);
    return fruits[choiceIdx];
}

const remove = (fruits, fruit)=>{
    let remainingFruits= []
    for(let i = 0; i<fruits.length; i++){
        if(fruits[i] !== fruit){
            remainingFruits.push(fruits[i]);
        }
    }
    if(remainingFruits.length === 0){
        return undefined;
    }
    return remainingFruits;
}

export { choice, remove };