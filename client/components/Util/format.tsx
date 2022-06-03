export const formatTime = (t: Date) => {
    const d = new Date(t)
    return d.toLocaleTimeString()
  }

 export  function formatHash(hash:string,index:number,chr:string) {
    if(index > hash.length-1) return hash;
    return hash.substring(0,index).slice(0 ,6) + chr + hash.substring(index+1).slice(-6); 
}
 
export const sortValidatorsByVotingPower = (validatorsArray: any[]) => validatorsArray?.sort((validator1, validator2) => validator2.tokens - validator1.tokens)