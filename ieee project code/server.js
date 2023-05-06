
const express = require("express");
const app = express();
const fs = require("fs");
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: '/dev/cu.usbmodem1101', baudRate: 9600 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

parser.on('data', function(data) {
    console.log(data);
    if (data>=0 & data <100){
        console.log("Entered >50");
        app.get("/video", function (req, res) {
            var videoPath = "dance1.mp4";
            var videoSize = fs.statSync("dance1.mp4").size;
            var range = req.headers.range;
            if (!range) {
                res.status(400).send("Requires Range header");
            }
            var CHUNK_SIZE = 10 ** 6;
            var start = Number(range.replace(/\D/g, ""));
            var end = Math.min(start + CHUNK_SIZE, videoSize - 1);
            var contentLength = end - start + 1;
            var headers = {
                "Content-Range": `bytes ${start}-${end}/${videoSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": contentLength,
                "Content-Type": "video/mp4",
            };
            res.writeHead(206, headers);
            var videoStream  = fs.createReadStream(videoPath, { start, end });
            videoStream.pipe(res);
        }); 
    }
    else if(data <250){
        console.log("Entered <50");
        app.get("/video", function (req, res) {
            var videoPath = "dance2.mp4";
            var videoSize = fs.statSync("dance2.mp4").size;
            var range = req.headers.range;
            if (!range) {
                res.status(400).send("Requires Range header");
            }
            var CHUNK_SIZE = 10 ** 6;
            var start = Number(range.replace(/\D/g, ""));
            var end = Math.min(start + CHUNK_SIZE, videoSize - 1);
            var contentLength = end - start + 1;
            var headers = {
                "Content-Range": `bytes ${start}-${end}/${videoSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": contentLength,
                "Content-Type": "video/mp4",
            };
            res.writeHead(206, headers);
            var videoStream  = fs.createReadStream(videoPath, { start, end });
            videoStream.pipe(res);
        }); 
    }else{
        app.get("/video", function (req, res) {
            var videoPath = "dance3.mp4";
            var videoSize = fs.statSync("dance3.mp4").size;
            var range = req.headers.range;
            if (!range) {
                res.status(400).send("Requires Range header");
            }
            var CHUNK_SIZE = 10 ** 6;
            var start = Number(range.replace(/\D/g, ""));
            var end = Math.min(start + CHUNK_SIZE, videoSize - 1);
            var contentLength = end - start + 1;
            var headers = {
                "Content-Range": `bytes ${start}-${end}/${videoSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": contentLength,
                "Content-Type": "video/mp4",
            };
            res.writeHead(206, headers);
            var videoStream  = fs.createReadStream(videoPath, { start, end });
            videoStream.pipe(res);
        });  
    }
});


app.listen(8000,function () {
    console.log("Listening on port 8000!");
});
