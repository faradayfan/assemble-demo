
let store = {};

let findFunc = async (key)=>{
    return store[key];
};
let storeFunc = async (key, value) =>{
    store[key] = value;
};
let collatorFunc = async (data) => {
    return data;
};

class Assemble {
    constructor(){
    }
    // setters
    find(func){
        findFunc = func;
    }
    store(func){
        storeFunc = func;
    }

    collator(func){
        collatorFunc = func;
    }

    // event handler.
    async event(key, data){
        storeFunc(key, await collatorFunc(data));
    }

    async search(key){
        return findFunc(key);
    }

}

module.exports = Assemble;