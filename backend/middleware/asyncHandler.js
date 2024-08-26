const asyncHandler = fn =>(res,req,next)=>{
    Promise.resolve(fn(res,req,next)).catch(next)
}

export default asyncHandler