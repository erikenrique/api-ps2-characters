document.querySelector('button').addEventListener('click', getCharacter)

function getCharacter(){
    const character = document.querySelector('input').value
    const url = `/api/${character}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    
}
