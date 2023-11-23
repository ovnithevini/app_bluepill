import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListMedicos = () => {
const [medicos, setMedicos] = useState([]);
//Listar Medicos
useEffect(() => {
const fetchAllMedicos = async () => {
try {
const res = await axios.get("http://localhost:8081/medico");
setMedicos(res.data);
} catch (err) {
console.log(err);
}
};
fetchAllMedicos();
}, []);
console.log(medicos);
//Deletar Medicos
const handleDelete = async (id) => {
try {
await axios.delete(`http://localhost:8081/medico/${id}`);
window.location.reload()
} catch (err) {
console.log(err);
}
};
return (
<div className="container">
<h2 className='w-100 d-flex justify-content-center p-3'>Listando
Medicos</h2>
<div className='row'>
<div className='col-md-12'>
<p><Link to="/addMedico" className="btn btnsuccess">Adicionar um novo Medico</Link></p>
<table className="table table-bordered">
<thead>
<tr>
<th>ID</th>
<th>Nome</th>
<th>Sobrenome</th>
<th>Especialidade</th>
<th>CRM</th>
<th>Contato</th>
<th>Data Cadastro</th>
<th>Data Alteração</th>
<th>Ações</th>
</tr>
</thead>
<tbody>
{medicos.map((medico) => {
return (
<tr>
<td>{medico.id}</td>
<td>{medico.nome} </td>
<td>{medico.sobrenome} </td>
<td>{medico.especialidade} </td>
<td>{medico.CRM} </td>
<td>{medico.contato} </td>
<td>{medico.createdAt} </td>
<td>{medico.updatedAt}
</td>
<td>
<Link
to={`/readMedico/${medico.id}`} className="btn btn-success mx2">Ler</Link>
<Link
to={`/updateMedico/${medico.id}`} className="btn btn-info mx2">Editar</Link>
<button
onClick={()=>handleDelete(medico.id)} className="btn btndanger">Deletar</button>
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
export default ListMedicos;