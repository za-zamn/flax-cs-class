// Create your get matches algorithm here


const getMatches = (string, top200) =>{
    return top200.filter( song => song.title.toLowerCase().includes(string) || song.artist.toLowerCase().includes(string));
}



const isAnyLetter = (character) => {
    return (/[a-zA-Z]/).test(char);
}
