// // import { isValidEmail } from "../validation/uservalidation"
// // import { isValidPassword } from "../validation/uservalidation"

// const validator = (arrOfMiddleware)=> async(ctx,next)=> {

// for (const i of arrOfMiddleware) {
//     console.log(i);
// }
//     await next()
// }

// // export {validator}



const Validator = (arr_validator) => async(ctx,next)=>{
    let err=[]
    for (const i of arr_validator) {
        let res= await i(ctx,next)
        if(res) err.push(res)
    }
    console.log(err);
    if (err.length==0) await next()
    else ctx.body={err}     
}
export{Validator}