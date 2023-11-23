import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadFarmacia = () => {
const {id} = useParams();
const [farmacia, setLivro] = useState([]);
useEffect(() => {
axios.get("http://localhost:8081/farmacia/"+id)
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
<h1>Detalhes da Farmacia</h1>
<table className="table">
<thead>
<tr>
<th>ID</th>
<th>Nome</th>
<th>Contato</th>
<th>Endereco</th>
<th>Data Cadastro</th>
<th>Data Alteração</th>
</tr>
</thead>
<tbody>
<tr>
<td>{farmacia.id}</td>
<td>{farmacia.nome} </td>
<td>{farmacia.contato} </td>
<td>{farmacia.fk_endereco} </td>
<td>{farmacia.createdAt} </td>
<td>{farmacia.updatedAt}
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
)}
export default ReadFarmacia;