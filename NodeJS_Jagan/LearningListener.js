const events=require('events')
const customEvent=new events.EventEmitter()
// customEvent.on('learn', function(language){
//     console.log('we are learning ',language )
// } )
// 'Once'  will listen only once where as on listener will listen to multiple emit.
// customEvent.once('learn',function(language){
//     console.log("we are learning ", language)
// })
customEvent.addListener('learn', function(language){
         console.log('we are learning ',language )
     }) 
customEvent.removeListener('learn', function(){
        console.log(' removing listener')
    }) 


module.exports={ event:customEvent}