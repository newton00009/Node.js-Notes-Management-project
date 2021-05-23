const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk')
yargs.command({
    command : 'add' ,
    desc: 'Add a new note' ,
    builder: {

        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },

        body :{
           describe:'Body of note',
           demandOption:true,
           type:'string'        
        },

        ending:{
          
            describe:'ending of note'
        }
    },


    handler : function(argv) {
        // console.log("Title :",argv.title)
        // console.log("Body :",argv.body)
        // console.log("ending of note :",argv.ending)


        notes.addnote(argv.title,argv.body)
    }

})

yargs.command({
    command : 'remove' ,
    desc: 'remove a new note' ,
    builder: {

        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
   
    handler : (argv)=> {
        notes.removenote(argv.title)
       
    }

})

yargs.command({
    command : 'list' ,
    desc: 'listing notes' ,

   
    handler : function() {
   
        notes.listnote()
    }

})

yargs.command({
    command : 'read' ,
    desc: 'reading notes' ,
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },

    handler(argv) {
       notes.readnote(argv.title)
    }

})





yargs.parse()
//console.log(process.env)







