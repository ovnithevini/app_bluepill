import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadLivro = () => {
const {id} = useParams();
const [livro, setLivro] = useState([]);
useEffect(() => {
axios.get("http://localhost:8081/livro/"+id)
.then(res => {
//console.log("Valor do parametro"+id);
console.log(res);
setLivro(res.data);
})
.catch(err => console.log(err))
}, []);
return (
<div className="container">
<div className='row'>
<div className='col-md-12'>
<h1>Detalhes do Livro</h1>
<table className="table">
<thead>
<tr>
<th>ID</th>
<th>Titulo</th>
<th>Autor</th>
<th>Editora</th>
<th>Categoria</th>
<th>Data Cadastro</th>
<th>Data Alteração</th>
</tr>
</thead>
<tbody>
<tr>
<td>{livro.id}</td>
<td>{livro.titulo} </td>
<td>{livro.autor} </td>
<td>{livro.editora} </td>
<td>{livro.categoria} </td>
<td>{livro.createdAt} </td>
<td>{livro.updatedAt} </td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
)}
export default ReadLivro;