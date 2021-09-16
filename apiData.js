module.exports = function () {
    var faker =require("faker");
    var _=require("lodash")
    return {
       people: _.times(15, function (n) {
           return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar(),
                includes: _.times(30, function (x) {
                    return{
                    categoryNumber: n,
                    id: x,
                    title: faker.name.findName(),
                    imageUrl: faker.internet.avatar(),
                }})
           }
       })
    }

}