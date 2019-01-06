
const fastimport = modules_arr => {
    if(modules_arr !== undefined) {
        modules_arr.forEach(el => {
            window[el] = require(el)
        });
    }
    else {
        console.log("[ERROR] Enter modules")
    }
}

module.exports = fastimport;