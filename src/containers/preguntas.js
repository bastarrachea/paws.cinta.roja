import React from 'react';
import CentralImagePreg from '../components/CentralImagePreg';
import PreguntasCuidadores from '../components/PreguntasCuidadores';
import SeparateImages from '../components/SeparateImages';
import PreguntasUsuarios from '../components/PreguntasUsuarios';

const preguntas = () => {
    return (
        <div>
            < CentralImagePreg/>
            < PreguntasCuidadores/>
            < SeparateImages/>
            < PreguntasUsuarios/>
        </div>
    )
}

export default preguntas
