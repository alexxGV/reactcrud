import Axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Global from '../Global';

export default class NuevoHospital extends Component {

    state = { status: false }

    cajaIdRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaDireccionRef = React.createRef();
    cajaTelefonoRef = React.createRef();
    cajaCamasRef = React.createRef();


    insertarHospital = (e) => {
        e.preventDefault();
        var idHosp = this.cajaIdRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var dir = this.cajaDireccionRef.current.value;
        var tel = this.cajaTelefonoRef.current.value;
        var camas = this.cajaCamasRef.current.value;

        var hospital = {
            idhospital: idHosp,
            nombre: nom,
            direccion: dir,
            telefono: tel,
            camas: camas
        };

        var url = Global.hospitales + "/webresources/hospitales/post";
        Axios.post(url, hospital).then(res => {
            this.setState({
                status: true
            })
        });
    }

    render() {
        if (this.state.status) {
            console.log("STATUS TRUE")
            return <Redirect to="/" />
        }
        return (
            <div>
                <form>
                    <label>ID HOSPITAL</label>
                    <input type="number"
                        className="form-control"
                        ref={this.cajaIdRef} />
                    <br />

                    <label>NOMBRE</label>
                    <input type="text"
                        className="form-control"
                        ref={this.cajaNombreRef} />
                    <br />

                    <label>DIRECCION</label>
                    <input type="text"
                        className="form-control"
                        ref={this.cajaDireccionRef} />
                    <br />

                    <label>TELEFONO</label>
                    <input type="text"
                        className="form-control"
                        ref={this.cajaTelefonoRef} />
                    <br />

                    <label>CAMAS</label>
                    <input type="number"
                        className="form-control"
                        ref={this.cajaCamasRef} />
                    <br />

                    <button className="btn btn-info" onClick={this.insertarHospital}>
                        Insertar hospital
                    </button>
                </form>
            </div>
        )
    }
}
