console.log("i am inside second file")
function add(x,y){
    return x+y
}
function sub(x,y){
    return y-x
}
//create  mul and division 
// export variables

//function //variables
//export those manually
// module=> global object available in node js
//exports is a property in the module object
// we export Objects from the file
module.exports={ addFn:add , subFn:sub}

