# Backend
Utilizando React, Node.js

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