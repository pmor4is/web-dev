import React, { useEffect, useState } from 'react';
import axios from "axios";
import { FaPencil, FaTrashCan } from 'react-icons/fa6';


export default function CrudUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [operacao, setOperacao] = useState("");

  // Conexão com o backend criado na pasta react-backend
  // URL cadastrada no deploy da Vercel
  const url = "react-backend-gamma.vercel.app/usuarios/";
  
  // useEffect para pegar os dados do banco de dados
  useEffect(() => {
    fetch(url)
    .then((respFetch) => respFetch.json())
    .then((respJson) => setUsuarios(respJson))
    .catch((err) => console.log(err));
    }, [url]);
  
  return (
    <div>
      <h1>Lista de usuarios</h1>

      {/* Deve usar map ao ivés de ForEach pois deve ser retornado array */}
      {usuarios.map( (user) => {
        return (
          <p>{user.name}</p>
          // user.email,
          // user.altura,
          // user.peso
        )
      })}
    </div>
  )
}
