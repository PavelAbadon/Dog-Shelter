import http from 'http';
import fs from 'fs/promises';

const server = http.createServer(async (req, res) =>{
    if (req.url === '/'){
        const homeHtml = await fs.readFile('./src/views/home/index.html', {encoding: 'utf-8'});
        res.writeHead(200, {
        "content-type": 'text/html'
    });

    res.write(homeHtml);
    res.end();

    }else if(req.url === '/cats/add-breed'){
        const addBreadHtml = await fs.readFile('./src/views/addBreed.html', {encoding: 'utf-8'});
        res.writeHead(200, {
        "content-type": 'text/html'
    });

    res.write(addBreadHtml);
    res.end();

    }else if(req.url === '/cats/add-cat'){
        const addCatHtml = await fs.readFile('./src/views/addCat.html', {encoding: 'utf-8'});
        res.writeHead(200, {
        "content-type": 'text/html'
    });

    res.write(addCatHtml);
    res.end();

    }
    else if(req.url === '/styles/site.css'){
        const homeCss = await fs.readFile('./src/content/styles/site.css', {encoding: 'utf-8'});
        res.writeHead(200,{
            "content-type": 'text/css'
        });

        res.write(homeCss);

    res.end()

    }else{
        res.end();
    }
    
    
});

server.listen(5000);

console.log('Server is listening on http://localhost:5000...');
