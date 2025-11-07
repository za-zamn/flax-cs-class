// Create your get matches algorithm here

const getMatches = (string, top200) =>{
    // split the input into words
    const stringWords = string.split(' ');
    console.log("string words", stringWords);

    // filter returns an array that meets the following condition
    return top200.filter( song => {
        //assume its not a match
        let isMatch = false;

        // for each of the split words... 
        for(const word of stringWords) {
            // if the song is a match to the word, make the song a match
             if(song.title.toLowerCase().includes(word) || song.artist.toLowerCase().includes(word)) {
                isMatch = true;
             };
        };

        // what ever is true will be put into the new array
        return isMatch;
    });
}

const getMatches2 = (string, top200) =>{
    // split the input into words
    const stringWords = string.split(' ');
    console.log("string words", stringWords);
    
    // initialize new array
    let matchingSongs = [];

    // For each song in the top 200...
    for ( const song of top200 ) {
        // assume it's not a match
        let isMatch = false;

        // for each of the split words...
        for(const word of stringWords) {
            // if the song is a match to the word, make the song a match
            if(song.title.toLowerCase().includes(word) || song.artist.toLowerCase().includes(word)) {
                isMatch = true;
            }
        }
        // if the songs is a match, add it to the array
        if(isMatch) {
            matchingSongs.push(song);
        }
    }

    // return the array
    return matchingSongs;
}

const isAnyLetter = (character) => {
    return (/[a-zA-Z]/).test(char);
}
