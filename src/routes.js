import React from 'react';
import {Route, Routes} from 'react-router-dom';
import TableDinamica from './Components/Table_Dinamica';
import Login from './Components/Login';
import Persona from './Components/Persona';
import Peticiones from './Components/Peticiones';
import PersonNew from './Components/PersonNew';
import PersonUpdate from './Components/PersonUpdate';
import Register from './Components/Register';
import MedicalAreas from './Components/MedicalAreas';
import MedicalServices from './Components/MedicalServices';
import Catalogs from './Components/Catalogs';
import Appointments from './Components/Appointments';
import DetailMedical from './Components/DetailMedical';
import Patient from './Components/Patient';

export default function LinkRoutes () {
    return(
    <Routes>
        <Route path="/" element={<Login></Login>}>
        </Route>
        <Route path="/tabla" element={<TableDinamica></TableDinamica>}>
        </Route>
        <Route path="/persona/:address" element={<Persona name="Andrea" lastName="Cevallos" age="20" ></Persona>}>
        </Route>
        <Route path="/peticiones" element={<Peticiones></Peticiones>}>
        </Route>
        <Route path="/personnew" element={<PersonNew></PersonNew>}>
        </Route>
        <Route path="/personupdate/:id" element={<PersonUpdate></PersonUpdate>}>
        </Route>
        <Route path="/register" element={<Register></Register>}>
        </Route>
        <Route path="/medical-areas" element={<MedicalAreas></MedicalAreas>}>
        </Route>
        <Route path="/medical-services" element={<MedicalServices></MedicalServices>}>
        </Route>
        <Route path="/catalogs" element={<Catalogs></Catalogs>}>
        </Route>
        <Route path="/appointments" element={<Appointments></Appointments>}></Route>
        <Route path="/detail-medical/:id" element={<DetailMedical></DetailMedical>}></Route>
        <Route path="/patient/:id" element={<Patient></Patient>}></Route>
      </Routes>
    )
}