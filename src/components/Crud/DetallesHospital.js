import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class DetallesHospital extends Component {
    state = { hospital: {}, status: false };

    detallesHospital = () => {
        var url = Global.hospitales + "/webresources/hospitales/" + this.props.idhospital;
        axios.get(url).then(res => {
            this.setState({
                hospital: res.data,
                status: true
            })
        });
    }

    componentDidMount = () => {
        this.detallesHospital();
    }

    render() {
        return (
            <div>
                <h1>Detalles del hospital</h1>
                {this.state.status == true && (
                    <React.Fragment>
                        <h3>ID HOSPITAL : {this.state.hospital.idhospital}</h3>
                        <h3>NOMBRE : {this.state.hospital.nombre}</h3>
                        <h3>DIRECCION : {this.state.hospital.direccion}</h3>
                        <h3>TELEFONO : {this.state.hospital.telefono}</h3>
                        <h3>CAMAS : {this.state.hospital.camas}</h3>
                        <NavLink to={"/modificar/" + this.state.hospital.idhospital +
                            "/" + this.state.hospital.nombre +
                            "/" + this.state.hospital.direccion +
                            "/" + this.state.hospital.telefono +
                            "/" + this.state.hospital.camas}
                            className="btn btn-success">
                            Modificar
                        </NavLink>
                        <NavLink to={"/eliminar/" + this.state.hospital.idhospital}
                            className="btn btn-danger">
                            Eliminar
                        </NavLink>
                    </React.Fragment>
                )}
            </div>
        )
    }
}
