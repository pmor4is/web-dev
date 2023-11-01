# Backend
Utilizando React, Node.js

##### Bibliotecas utilizadas:
Para esse projeto foram utilizadas as seguintes bibliotecas abaixo:
~~~ bash
npm install express dotenv cors body-parser

# Biblioteca para o acesso ao banco de dados
npm install pg

# Biblioteca para LiveServer
npm install --save-dev nodemon
~~~

Para monitorar o servidor de forma real, adicionar ao item scripts do package.json 
~~~
"scripts": {
  "start": "nodemon index.js", 
  ....
}
~~~

Rotas de queries:
* [GET] 
* DELETE
* POST
* PUT

#### DELETE: 

~~~ react
app.delete("/usuarios/:id", (req, res) => {
  try {
    console.log("Chamou delete /:id " + req.params.id);
    const id = req.params.id;
    client.query(
      "DELETE FROM Usuarios WHERE id = $1",
      [id],
      function (err, result) {
        if (err) {
          return console.error("Erro ao executar a qry de DELETE", err);
        } else {
          if (result.rowCount == 0) {
            res.status(400).json({ info: "Registro não encontrado." });
          } else {
            res.status(200).json({ info: "Registro excluído. Código ${id}" });
          }
        }
        console.log(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});
~~~

#### POST

#### PUT