// //pure nodejs code without installing express
// const http = require('node:http');


// //this http modele create serve or we can call module  which will listen our request
// const server = http.createServer(function (req, res) {
//     if (req.url === '/getdata') {
//         res.end("No data found")
//     } else {
//         //below line is use to send response to cline or in real world we just pass real daat here
//         res.end("Hello world")
//     }
// });


// //after below line m server is create and know able to listen
// server.listen(2525);



//-------------------------- Note ------------------------
// above code which was writen to create server using http its have some drawback and its low level language
// so we use Express to create server which is framework of nodejs

