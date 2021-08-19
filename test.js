let ob = { 'b': 'asdsad', 'c': 'masdas', 'a': 'dsfdsfsdf' }
let keys=Object.keys(ob)

function sortObject(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}
let newOb=sortObject(ob)
for(let item in ob){
    console.log(ob[item])
}

console.log("alo:"+newOb)
console.log(JSON. stringify(newOb))