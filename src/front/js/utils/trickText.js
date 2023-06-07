export const trickText = (text) => {
    if(text.length > 110){
        return text.slice(0 , 108) + "..."
    } else return text
}