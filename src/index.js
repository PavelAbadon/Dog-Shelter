import http from 'http';
import homeHtml from './home.html.js';
import styleCss from './style.css.js';

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.writeHead(200, {
        "content-type": 'text/html'
    });

    res.write(homeHtml);

    res.end();
    }else if(req.url === '/styles/site.css'){
        res.writeHead(200,{
            "content-type": 'text/css'
        });

        res.write(styleCss);

    res.end()
    }
    
    
});

server.listen(5000);

console.log('Server is listening on http://localhost:5000...');
