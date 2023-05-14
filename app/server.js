const http = require("http");
const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'mysql',
  database: 'mydb'
});

const server = http.createServer(async (req, res) => {
  const urlPath = req.url;
    connection.connect(function (error) {
      if (error) console.log(error);
      else console.log("Connected!");
    });
    ;

    await connection.promise().query(`
      INSERT INTO urls (name)
      SELECT * FROM (SELECT '${urlPath}') AS tmp
      WHERE NOT EXISTS (
          SELECT name FROM urls WHERE name = '${urlPath}'
      ) LIMIT 1;
    `);

    const [result] = await connection.promise().query(`SELECT * FROM urls;`);
    if(result.length) {
      res.end(`
      <h1>Thanks for visiting ${urlPath}</h1>
      <p>Here are all the urls already visited:</p>
      <ul>
        ${result.map(url => `<li>${url.name}</li>`).join('')}
      </ul>
    `)
    } else {
      res.end(`
      <h1>Thanks for visiting ${urlPath}</h1>
      <p>No urls visited yet</p>
    `)
    }
});

server.listen(3000, function () {
  console.log('Server is running on port 3000');
});
