export const trickText = (text) => {
    if(text.length > 120){
        return text.slice(0 , 118) + "..."
    } else return text
}