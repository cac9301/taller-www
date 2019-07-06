import React, { useState } from 'react';
import Error from './Error';
//import shortid from 'shortid';

function Formulario() {


    // state
    const [operacion, guardaroperacion] = useState('');
    const [suma, actualizarsuma] = useState(0);
    const [resta, actulizarresta] = useState(0);
    const [multiplicar, actulizarmulitplicar] = useState(0);
    const [divicion, actulizardivicion] = useState(0);
    const [error, guardarError] = useState(false);


    // Cuando se agrega el gasto
    const operaracion = e => {
        e.preventDefault();

        // validar
        if (operacion < 1 || operacion === '') {
            guardarError(true);
            return;
        }
        calcular(operacion)
        guardarError(true)
    }


    




    const calcular = () => {
        const operar = operacion.split("")
        let rsuma = 0;
        let rresta = 0;
        let rmult = 0;
        let rdiv = 0;
        operar.map((parametro, index) => {
            const siguiente = operar[index + 1]
            const anterior = operar[index - 1]

            if (parametro === '+') {
                rsuma += parseInt(siguiente) + parseInt(anterior);
                actualizarsuma(rsuma)


            } else {
                if (parametro === '-') {
                    rresta += parseInt(siguiente) - parseInt(anterior);
                    actulizarresta(rresta)
                }
                else {
                    if (parametro === '/') {
                        rdiv += parseInt(siguiente) / parseInt(anterior);
                        actulizardivicion(rdiv)
                    }
                    else {
                        if (parametro === '*') {
                            rmult +=parseInt(siguiente) * parseInt(anterior);
                            actulizarmulitplicar(rmult)
                        }
                    }
                }
            }
        })
        console.log(typeof (suma));


    }

    return (
        <form
            onSubmit={operaracion}
        >
            <h2>PON LO QUE QUIERAS AQUI </h2>

            {error ? <Error mensaje='ingresa datos validos' />  : null }

            <div className="campo">
                <label>Coloca aqui tus numeros</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej 5+4+3/2"
                    onChange={e => guardaroperacion(e.target.value)}
                    value={operacion}
                />

            </div>
            <div className="suma">
                <label>suma</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Resultado suma = 300"
                    //onChange={e => guardarCantidadGasto( parseInt( e.target.value, 10) )}
                    value={String(suma)}
                />
            </div>
            <div className="resta">
                <label>resta</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Resultado resta = 300"
                    value={String(resta)}
                />
            </div>

            <div className="multiplicacion">
                <label>multiplicacion</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Resultado multiplicaion = 300"
                //onChange={e => guardarCantidadGasto( parseInt( e.target.value, 10) )}
                 value={String(multiplicar)}
                />
            </div>
            <div className="divicion">
                <label>divicion</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Resultado divicion = 300"
                //onChange={e => guardarCantidadGasto( parseInt( e.target.value, 10) )}
                value={String(divicion)}
                />
            </div>


            <input type="submit" className="button-primary u-full-width" value="operar" />

        </form>
    )
}
export default Formulario;