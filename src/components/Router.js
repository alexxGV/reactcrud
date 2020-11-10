import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Menu from './Crud/Menu';
import TablaHospitales from './Crud/TablaHospitales';
import DetallesHospital from './Crud/DetallesHospital';
import NuevoHospital from './Crud/NuevoHospital';
import ModificarHospital from './Crud/ModificarHospital';
import EliminarHospital from './Crud/EliminarHospital';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Menu />
                    <Switch>
                        <Route exact path="/"
                            component={TablaHospitales} />
                        <Route exact path="/detalles/:id"
                            render={props => {
                                var idhospital = props.match.params.id;
                                return <DetallesHospital idhospital={idhospital} />
                            }}
                        />
                        <Route exact path="/nuevo"
                            component={NuevoHospital} />
                        <Route exact path="/modificar/:id/:nombre/:direccion/:telefono/:camas"
                            render={props => {
                                var id = props.match.params.id;
                                var nombre = props.match.params.nombre;
                                var direccion = props.match.params.direccion;
                                var telefono = props.match.params.telefono;
                                var camas = props.match.params.camas;
                                return <ModificarHospital idhospital={id} nombre={nombre} direccion={direccion} telefono={telefono} camas={camas} />
                            }}
                        />
                        <Route exact path="/eliminar/:id"
                            render={props => {
                                var id = props.match.params.id;
                                return <EliminarHospital idhospital={id} />
                            }}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
