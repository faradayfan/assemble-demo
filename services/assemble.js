class Assemble {
    constructor(){
        this.store = {};
    }

    async collator(eventData){
        return eventData;
    }

    async event(storeName, searchKey, data){

        if(!Array.isArray(this.store[storeName])){
            this.store[storeName] = [];
        }

        this.store[storeName].push({
            key: searchKey,
            data: await this.collator(data)
        });
        console.log("Store: " + JSON.stringify(this.store))
    }

    async search(storeName, key){
        console.log("searching...", storeName, key, JSON.stringify(this.store));
        return this.store[storeName].find((d)=> d.key == key );
    }

}

module.exports = Assemble;