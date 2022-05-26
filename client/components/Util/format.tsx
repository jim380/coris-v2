export const formatTime = (t: Date) => {
    const d = new Date(t)
    return d.toLocaleTimeString()
  }

 export  function formatHash(str:string,index:number,chr:string) {
    if(index > str.length-1) return str;
    return str.substring(0,index).slice(0 ,6) + chr + str.substring(index+1).slice(-6); 
}