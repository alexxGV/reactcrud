import React, { Component } from 'react';
import Global from './../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export default class TablaHospitales extends Component {
    state = {
        hospitales: [],
        status: false
    }

    leerHospitales = () => {
        var url = Global.hospitales + "/webresources/hospitales";
        axios.get(url).then(res => {
            this.setState({
                hospitales: res.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.leerHospitales();
    }


    render() {
        return (
            <div>
                <table className="table table-border">
                    <thead>
                        <tr>
                            <th>ID HOPITAL</th>
                            <th>NOMBRE</th>
                            <th>DIRECCION</th>
                            <th>TELEFONO</th>
                            <th>CAMAS</th>
                            <th>DETALLES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status == true && (
                            this.state.hospitales.map((hosp, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{hosp.idhospital}</td>
                                        <td>{hosp.nombre}</td>
                                        <td>{hosp.direccion}</td>
                                        <td>{hosp.telefono}</td>
                                        <td>{hosp.camas}</td>
                                        <td>
                                            <NavLink to={"/detalles/" + hosp.idhospital}>
                                                Detalles
                                            </NavLink>
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
