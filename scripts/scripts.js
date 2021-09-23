document.addEventListener('DOMContentLoaded', initalizedApp);

function initalizedApp(){
    displayMeme();
}

async function displayMeme(){
    try{
        const response = await
        // This is a change...
        fetch("https://api.imgflip.com/get_memes");
        const jsonResponse = await response.json();
        
        console.log("🚀 ~ file: scripts.js ~ line 12 ~ displayMeme ~ jsonResponse", jsonResponse)
        
        const meme = jsonResponse.data.memes[2];

        const image = document.createElement("img");
        image.src = meme.url;
        image.alt = meme.name;
        image.width = 200;

        const memeContainer = document.querySelector("#meme");
        memeContainer.appendChild(image);
    }
    catch(error){
        console.log("🚀 ~ file: scripts.js ~ line 24 ~ displayMeme ~ error", error)
    }
}