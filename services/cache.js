let Assemble = require('./assemble')
let request = require('r2');

let assemble = new Assemble();

async function getPupResults(item, page) {
    let results = [];
    try {
        results = (await request.get(`http://www.recipepuppy.com/api/?i=${item}&p=${page}`).json).results;
    } catch (error) {

    }
    return results;
}


assemble.collator(async (data) => {
    data.collationStarted = new Date();
    let page = 1
    let result = await getPupResults(data.item, page);

    data.recipies = result.map((v) => {
        let i = {
            title: v.title.trim(),
            url: v.href
        };
        return i;
    });

    data.collationEnded = new Date();
    data.collationDuration = data.collationEnded.getTime() - data.collationStarted.getTime() + 'ms';
    return data;
})

module.exports = assemble;