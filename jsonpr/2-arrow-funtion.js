// const sqr = function(x)
// {
// return x*x
// }

// const sqr = (x) =>
// {
//     return x*x
// }

// const sqr = (x) => x*x
// console.log(sqr(3))

const event =
{
    name:'Birthday Party',
    guestlist:['Nilesh','Ayush','Krishnansh'],
    printguestlist()
    {
        console.log('Event is a '+ this.name)
        this.guestlist.forEach(function (guest)
        {
             console.log(guest+' is attending the party')
        }
        )
    }
}

event.printguestlist()