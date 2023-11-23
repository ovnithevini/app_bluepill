import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddLivro = () => {
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
  }, []);

  const handleChange = (e) => {
    setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/livro', livro);
      navigate('/livro');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Adicionando Livro</h2>
      <div className="row">
        <div className="col-md-12">
          <h3>Livro</h3>
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label">Titulo:</label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                placeholder="Digite o Livro"
                name="titulo"
                onChange={handleChange}
              />
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
            <button type="submit" className="btn btn-primary" onClick={handleClick}>
              Cadastrar
            </button>
            <br />
            <Link to="/livro">Listar Livros</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLivro;