const hello = require("helloWorld");

exports.handler = async (event) => {
    // TODO implement
    console.log(hello.sayHello("Mark"));amp
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
