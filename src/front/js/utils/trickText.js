export const trickText = (text) => {
    if(text.length > 140){
        return text.slice(0 , 138) + "..."
    } else return text
}