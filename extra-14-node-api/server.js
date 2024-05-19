console.log('script started!');


const serverPort = 8888;

const { log } = require("console");
// Import the HTTP module
const http = require("http");

// Import the URL module
const url = require("url");

//create a server object:
http.createServer(function (req, res) {
    console.log('');
    console.log('=== NEW REQUEST ===');
    const reqUrl = url.parse(req.url).pathname;
    console.log(reqUrl);

    let response;

    switch (reqUrl) {
        case '/':
            const articles = [
                {
                    name: "10 steps to become a ballerina",
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ballet-Ballerina-1843.jpg/800px-Ballet-Ballerina-1843.jpg'
                },
                {
                    name: "Ballet for beginers", 
                    img:  "https://images.squarespace-cdn.com/content/v1/5dae52c874901c36cd3525f8/1672747878343-X6UKPSYMNLY5XUC9Y8Z3/9A4F4184-5EAB-45BE-9376-455D8B569618+3.JPG"               
                }
            ];
            response = JSON.stringify(articles);
            break;

        case '/products':
            const products = [{ name: "Tutu", price: 250 }, { name: "Pointes", price: 150 }];
            response = JSON.stringify(products);
            break;

        default:
            response = 'Unknown resource!';
            break;
    }

    // Set our header
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    // Writing the response
    res.write(response);            //write a response to the client
    res.end();                      //end the response
}).listen(serverPort);              //the server object listens on port 8080


console.log(`HTTP server is listening on port ${serverPort}`);