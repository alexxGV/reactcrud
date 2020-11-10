import Axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { Redirect } from 'react-router-dom';

export default class EliminarHospital extends Component {

    state = { status: false };

    eliminarHospital = (e) => {
        e.preventDefault();
        var url = Global.hospitales + "/webresources/hospitales/delete/" + this.props.idhospital;
        Axios.delete(url).then(res => {
            this.setState({
                status: true
            });
        });
    }

    render() {
        if (this.state.status) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h2>Seguro que quieres eliminar el hospital con id: {this.props.idhospital}</h2>
                <button onClick={this.eliminarHospital} className="btn btn-danger">
                    Eliminar permanenetemente
                </button>
            </div>
        )
    }
}
