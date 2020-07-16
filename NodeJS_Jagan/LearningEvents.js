//we will learn events module
// const events=require('events')
//2 things
//action , response to the action - reaction 
// generating action programatically
// respond to the action (listener)
//step1 : create an object of EventEmitter
//let , const . const values & array & objects
//const customEvent=new events.EventEmitter()
//step2: create the listener function
// customEvent.on('learn', function(language){
//     console.log('we are learning ',language )
// } )
//step 3 : create / raise /trigger the action
let listener=require('./LearningListener')
listener.event.emit('learn',"React JS")
listener.event.emit('learn',"Node JS")
