export function generateNColors(length:number):string[]{
    const colors:string[]=[]
    for (let i = 0; i < length; i++) {
        colors.push(randomColor())
        
        
    }

    return colors;
}

function randomColor():string{
    var allowed = "ABCDEF0123456789", S = "#";
     
    while(S.length < 7){
        S += allowed.charAt(Math.floor((Math.random()*16)+1));
    }
    return S;
 }