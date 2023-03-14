// convention is to name the variable _ for the packages. This example used flatten deep which is in the package of lodash and in of itself isn't important to know
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
