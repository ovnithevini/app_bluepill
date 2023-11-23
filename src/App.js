import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMedico from './Components/Medico/AddMedico';
import ListMedicos from './Components/Medico/ListMedico';
import UpdateMedico from './Components/Medico/UpdateMedico';
import ReadMedico from './Components/Medico/ReadMedico';

import AddEndereco from './Components/Endereco/AddEndereco';
import UpdateEndereco from './Components/Endereco/UpdateEndereco';
import ListEnderecos from './Components/Endereco/ListEndereco';
import ReadEndereco from './Components/Endereco/ReadEndereco';

import UpdateFarmacia from './Components/Farmacia/UpdateFarmacia';
import ReadFarmacia from './Components/Farmacia/ReadFarmacia';
import AddFarmacia from './Components/Farmacia/AddFarmacia';
import ListFarmacias from './Components/Farmacia/ListFarmacia';

import AddMedicamento from './Components/Medicamento/AddMedicamento';
import ListMedicamentos from './Components/Medicamento/ListMedicamento';
import ReadMedicamento from './Components/Medicamento/ReadMedicamento';
import UpdateMedicamento from './Components/Medicamento/UpdateMedicamento';

import AddPaciente from './Components/Paciente/AddPaciente';
import ListPacientes from './Components/Paciente/ListPaciente';


function App() {
return (
<div className="App">
<header className="App-header">
<BrowserRouter>
<Routes>
<Route path="/medico" element={<ListMedicos/>} />
<Route path="/addMedico" element={<AddMedico/>} />
<Route path="/readMedico/:id" element={<ReadMedico/>} />
<Route path="/updateMedico/:id" element={<UpdateMedico/>} />

<Route path="/endereco" element={<ListEnderecos/>} />
<Route path="/addEndereco" element={<AddEndereco/>} />
<Route path="/readEndereco/:id" element={<ReadEndereco/>} />
<Route path="/updateEndereco/:id" element={<UpdateEndereco/>} />

<Route path="/farmacia" element={<ListFarmacias/>} />
<Route path="/addFarmacia" element={<AddFarmacia/>} />
<Route path="/readFarmacia/:id" element={<ReadFarmacia/>} />
<Route path="/updateFarmacia/:id" element={<UpdateFarmacia/>} />

<Route path="/addMedicamento" element={<AddMedicamento/>} />
<Route path="/medicamento" element={<ListMedicamentos/>} />
<Route path="/readMedicamento/:id" element={<ReadMedicamento/>} />
<Route path="/updateMedicamento/:id" element={<UpdateMedicamento/>} />

<Route path="/addPaciente" element={<AddPaciente/>} />
<Route path="/paciente" element={<ListPacientes/>} />

</Routes>
</BrowserRouter>
</header>
</div>
);
}
export default App;