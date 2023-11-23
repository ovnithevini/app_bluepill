import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListFarmacias = () => {
const [farmacias, setFarmacias] = useState([]);
//Listar Farmacias
useEffect(() => {
const fetchAllFarmacias = async () => {
try {
const res = await axios.get("http://localhost:8081/farmacia");
setFarmacias(res.data);
} catch (err) {
console.log(err);
}
};
fetchAllFarmacias();
}, []);
console.log(farmacias);
//Deletar Farmacias
const handleDelete = async (id) => {
try {
await axios.delete(`http://localhost:8081/farmacia/${id}`);
window.location.reload()
} catch (err) {
console.log(err);
}
};
return (
<div className="container">
<h2 className='w-100 d-flex justify-content-center p-3'>Listando
Farmacias</h2>
<div className='row'>
<div className='col-md-12'>
<p><Link to="/addFarmacia" className="btn btnsuccess">Adicionar nova Farmacia</Link></p>
<table className="table table-bordered">
<thead>
<tr>
<th>ID</th>
<th>Nome</th>
<th>Contato</th>
<th>Endereco</th>
<th>Data Cadastro</th>
<th>Data Alteração</th>
<th>Ações</th>
</tr>
</thead>
<tbody>
{farmacias.map((farmacia) => {
return (
<tr>
<td>{farmacia.id}</td>
<td>{farmacia.nome} </td>
<td>{farmacia.contato} </td>
<td>{farmacia.fk_endereco} </td>
<td>{farmacia.createdAt} </td>
<td>{farmacia.updatedAt}
</td>
<td>
<Link
to={`/readFarmacia/${farmacia.id}`} className="btn btn-success mx2">Ler</Link>
<Link
to={`/updateFarmacia/${farmacia.id}`} className="btn btn-info mx2">Editar</Link>
<button
onClick={()=>handleDelete(farmacia.id)} className="btn btndanger">Deletar</button>
</td>
</tr>
)})
}
</tbody>
</table>
</div>
</div>
</div>
)}
export default ListFarmacias;