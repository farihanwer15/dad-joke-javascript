var jokeel = document.getElementById('joke')
var jokebtn = document.getElementById('jokeBtn')

jokebtn.addEventListener('click', generatejoke)


generatejoke()

// USING ASYNC/AWAIT
// async function generatejoke(){
//     var config = {
//         headers:{
//             'Accept' : 'application/json',
//         },
//     }

//     const res = await fetch ('http://icanhazdadjoke.com', config)

//     const data = await res.json()

//     jokeel.innerHTML = data.joke
// }

//USING.then
function generatejoke(){
    var config = {
        headers:{
            Accept : 'application/json',
        },
    }
    
    fetch('http://icanhazdadjoke.com',
    config).then((res) => res.json())
    .then((data) => {
        jokeel.innerHTML = data.joke
    })
}
