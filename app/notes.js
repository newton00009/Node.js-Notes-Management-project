const fs = require('fs')
const chalk = require('chalk')

const addnote = function(title,body)
{
      const notes = loadnote()
      //console.log(notes)

      const duplicatenotes = notes.find((notes)=>{
              return notes.title===title

          }
      )

      if(!duplicatenotes)
      {
        notes.push({
            title: title,
            body : body
        })
  
       savenotes(notes)
        console.log('New note added')
      }
      else
      {
          console.log(chalk.inverse.red('Note title taken!'))
      }
    
}

const savenotes = function(notes)
{
  const data = JSON.stringify(notes)
  fs.writeFileSync('notes.json',data)
}

const loadnote = function() {


    try{
        const databuff = fs.readFileSync('notes.json')
        const data = databuff.toString()
        return JSON.parse(data)
    }
    catch(e)
    {
        return []
    }


}


const removenote = function(title)
{
    const notes=loadnote()
    const duplicatenotes = notes.filter((notes)=>{
            return notes.title!==title

        }
    )

    if(notes.length>duplicatenotes.length)
    {
        console.log(chalk.green.inverse(title,' Note with given title found and is being removed '))
        
        fs.writeFileSync('notes.json',JSON.stringify(duplicatenotes))
    }
    else
    {
        console.log(chalk.inverse.red('Note not found with the title provided'))
    }
}




const listnote = () =>
{
    const note=loadnote()
    // note.forEach((n) => {
    //     console.log("title is "+n.title+ " body is "+ n.body)
        
    // });
    console.log(  chalk.inverse.green("Your Notes!")         )
    //  console.log(note)

    note.forEach((notes) => {

        console.log(notes.title)
    });
}


const readnote = (title) =>
{


    const note= loadnote()
    // note.forEach((n)=>{
           
    //     if(n.title===title)
    //     {
    //          console.log(chalk.inverse.green("Note FOUND!!!"))
    //          console.log("Note title => "+n.title +"      "+"Note Body =>"+n.body  )
    //          flag=1
    //     }
    // })

    // if(flag===0)
    // {
    //     console.log(chalk.inverse.red("Note Not found"))
    // }
    const notes = note.find((notes)=> notes.title===title)
    if(notes)
    {
        console.log(chalk.inverse.green("Note FOUND!!!"))
                 console.log("Note title => "+notes.title +"      "+"Note Body =>"+notes.body  )
    }
    else{
        console.log(chalk.inverse.red("Note Not found"))
    }
}

module.exports = {
   // getnote: getnote ,
    addnote: addnote,
    removenote: removenote,
    listnote:listnote,
    readnote:readnote

}