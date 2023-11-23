import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateLivro() {
  const { id } = useParams();
  const [livro, setLivro] = useState({
    titulo: '',
    fk_autor: '',
    fk_editora: '',
    fk_categoria: '',
  });

  const [autores, setAutores] = useState([]);
  const [editoras, setEditoras] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setLivro((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };
  useEffect(() => {

    const fetchData = async () => {
      try {
        const autoresResponse = await axios.get('http://localhost:8081/autor');
        setAutores(autoresResponse.data);

        const editorasResponse = await axios.get('http://localhost:8081/editora');
        setEditoras(editorasResponse.data);

        const categoriasResponse = await axios.get('http://localhost:8081/categoria');
        setCategorias(categoriasResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();

    axios.get("http://localhost:8081/livro/" + id)
      .then(res => {
        //console.log("Valor do parametro"+id);
        console.log(res);
        setLivro(res.data);
      })
      .catch(err => console.log(err))
  }, []);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/livro/${id}`,
        livro);
      navigate("/livro");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <h1>Formulário para Editar os Livros</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="form-label"> ID:</label>
          <input type="text" className="form-control" id="id"
            placeholder="ID"
            name="id" value={livro.id} disabled
            onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label"> Titulo</label>
          <input type="text" className="form-control"
            id="descricao" placeholder="Titulo do Livro"
            name="titulo" value={livro.titulo}
            onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Autor:</label>
          <select
            className="form-select"
            id="fk_autor"
            name="fk_autor"
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Selecione o Autor
            </option>
            {autores.map((autor) => (
              <option key={autor.id} value={autor.id}>
                {autor.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Editora:</label>
          <select
            className="form-select"
            id="fk_editora"
            name="fk_editora"
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Selecione a Editora
            </option>
            {editoras.map((editora) => (
              <option key={editora.id} value={editora.id}>
                {editora.descricao}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Categoria:</label>
          <select
            className="form-select"
            id="fk_categoria"
            name="fk_categoria"
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Selecione a Categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.descricao}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label">createdAt:</label>
          <input type="text" className="form-control"
            id="createdAt" placeholder="Data da criação"
            name="createdAt"
            value={livro.createdAt} onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">updatedAt:</label>
          <input type="text" className="form-control"
            id="updatedAt" placeholder="Data de Alteração"
            name="updatedAt" value={livro.updatedAt}
            onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary"
          onClick={handleClick}>Alterar</button>
      </form>
      <div className='container d-flex justify-content-center'>
        <Link to="/">Veja todas as editoras</Link>
      </div>
    </div>
  )
}
export default UpdateLivro;