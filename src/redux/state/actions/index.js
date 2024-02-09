
 export const withdrawl =(amount)=>{
    return {
        type:"Withdraw",
        payload:amount
    }
}

export const deposit=(amount)=>{
    return{
        type:'Deposit',
        payload:amount
    }
}