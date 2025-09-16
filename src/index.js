import http from 'http';
import fs from 'fs/promises';
import dogs from './dogs.js'; // твоя JSON масив с кучета

const server = http.createServer(async (req, res) => {
    try {
        // Главна страница с кучета
        if (req.url === '/') {
            const homeHtml = await fs.readFile('./src/views/home/index.html', 'utf-8');
            const dogsHtml = dogs.map(dog => dogTemplate(dog)).join('\n');
            const result = homeHtml.replace('{{dogs}}', dogsHtml);

            res.writeHead(200, { "content-type": "text/html" });
            res.end(result);

        // Добавяне на порода
        } else if (req.url === '/dogs/add-breed') {
            const addBreedHtml = await fs.readFile('./src/views/addBreed.html', 'utf-8');

            res.writeHead(200, { "content-type": "text/html" });
            res.end(addBreedHtml);

        // Добавяне на куче
        } else if (req.url === '/dogs/add-dog') {
            const addDogHtml = await fs.readFile('./src/views/addDog.html', 'utf-8');

            res.writeHead(200, { "content-type": "text/html" });
            res.end(addDogHtml);

        // CSS файл
        } else if (req.url === '/styles/site.css') {
            const homeCss = await fs.readFile('./src/content/styles/site.css', 'utf-8');

            res.writeHead(200, { "content-type": "text/css" });
            res.end(homeCss);

        // Всички други пътища
        } else {
            res.writeHead(404, { "content-type": "text/plain" });
            res.end("404 Not Found");
        }

    } catch (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("Server error: " + err.message);
    }
});

// Функция за генериране на HTML за едно куче
function dogTemplate(dog) {
    return `
        <li>
            <img src="${dog.imageUrl}" alt="${dog.name}">
            <h3>Name: ${dog.name}</h3>
            <p><span>Breed: </span>${dog.breed}</p>
            <p><span>Description: </span>${dog.description}</p>
            <ul class="buttons">
                <li class="btn edit"><a href="">Change Info</a></li>
                <li class="btn delete"><a href="">New Home</a></li>
            </ul>
        </li>
    `;
}

server.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});
