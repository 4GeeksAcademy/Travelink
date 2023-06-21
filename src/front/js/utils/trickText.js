export const trickText = (text) => {
    if(text.length > 115){
        return text.slice(0 , 113) + "..."
    } else return text
}