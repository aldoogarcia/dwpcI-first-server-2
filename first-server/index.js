import http from "http";

const server = http.createServer((req, res) => {
  // Desestructurando de "req"
  let { url, method } = req;

  console.log(`📣 CLIENT-REQUEST: ${req.url} ${req.method}`);

  // Enrutando peticiones
  switch (url) {
    case '/author':
      // Peticion raiz
      // Estableciendo cabeceras
      res.setHeader('Content-Type', 'text/html');
      // Escribiendo la respuesta
      res.write(`
      <html>
        <head>
          <link rel="icon" type="image/png" sizes="32x32" href="https://img.icons8.com/fluency/256/domain.png">
          <title>My App</title>
        </head>
        <body> 
          <h1 style="color: #333">Hello from my server</h1>
          <p style="color: #34495E">Estas en el recurso raiz.</p>
        </body>
      </html>
      `);
      console.log(`📣 Respondiendo: 200 ${req.url} ${req.method}`);
      // Estableciendo codigo de respuesta
      res.statusCode = 200;
      // Cerrando la comunicacion
      res.end();
      break;
    case '/':
      // Peticion raiz
      // Estableciendo cabeceras
      res.setHeader('Content-Type', 'text/html');
      let url_image = 'https://imgs.search.brave.com/DyrRUzETp1CaVbtx8TUbdWKMk7efLX_wikMthRJs8eU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9tdWplci1wZWNh/cy1jYXJhLW11ZXN0/cmEtcGVjYXMtcm9z/dHJvXzEyMjE5NTMt/MTk0MzMuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA';
      // Escribiendo la respuesta
      res.write(`
      <html>
        <head>
          <link rel="icon" type="image/png" sizes="32x32" href="https://img.icons8.com/fluency/256/domain.png">
          <title>My App</title>
        </head>
        <body style="text-align: center;">
          <h1 style="color: #333;">&#9889; Author &#9889;</h1>
          <p style="color: #34495E;">Aldo Garcia Carrasco</p>
          <div>
            <img width="300px" src="https://imgs.search.brave.com/DyrRUzETp1CaVbtx8TUbdWKMk7efLX_wikMthRJs8eU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9tdWplci1wZWNh/cy1jYXJhLW11ZXN0/cmEtcGVjYXMtcm9z/dHJvXzEyMjE5NTMt/MTk0MzMuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA" alt="Foto Ivan Rivalcoba">
          </div>
        </body>
      </html>
      `);
      console.log(`📣 Respondiendo: 200 ${url} ${method}`);
      // Estableciendo codigo de respuesta
      res.statusCode = 200;
      // Cerrando la comunicacion
      res.end();
      break;
    default:
      // Peticion raiz
      // Estableciendo cabeceras
      res.setHeader('Content-Type', 'text/html');
      // Escribiendo la respuesta
      res.write(`
      <html>
        <head>
          <link rel="icon" type="image/png" sizes="32x32" href="https://img.icons8.com/fluency/256/domain.png">
          <title>My App</title>
        </head>
        <body> 
          <h1>&#128534; 404 Recurso no encontrado</h1>
          <p>Lo sentimos pero no tenemos lo que buscas...</p>
        </body>
      </html>
      `);
      console.log(`📣 Respondiendo: 404 ${url} ${method}`);
      // Estableciendo codigo de respuesta
      res.statusCode = 404;
      // Cerrando la comunicacion
      res.end();
      break;
  }
}); 

server.listen(3000, "0.0.0.0", () => {
  console.log("👩‍🍳 Servidor escuchando en http://localhost:3000"); 
});