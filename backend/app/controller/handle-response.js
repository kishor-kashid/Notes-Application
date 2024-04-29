


//Hnadle Response if error or Not
export const setResponse = (responseData,response)=>{

    response.status(200);
    response.json(responseData);
   
}

//Internal Server Error if any error occures
export const setError = (error,response)=>{
    console.log(error);
    response.json({
        error: {
            code: 500,
            desc:"Internal server Error...."
        }
    });
}