import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { DateRangeOutlined, AssignmentLateOutlined, AccountBoxOutlined, ComputerOutlined } from '@material-ui/icons';
import ErrorIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { Chip } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    chipModule: {
        marginLeft: '10px',
    },
    iconBox: {
        fontSize: 'x-large',
        color: '#616161',
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    list: {
        paddingTop: '8px',
        paddingBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
}));

const Information = ({ curso }) => {
    const classes = useStyles();

    const courseInformation = curso.duracion_del_curso.inicio_del_curso && curso.duracion_del_curso.fin_del_curso || curso.duracion_del_curso.fin_inscripciones || curso.docente || curso.clases.lugar_de_cursado

    return (
        <>
            {courseInformation
                ?
                <div className="infoBox">
                    <div className="infoChip">
                        {curso.duracion_del_curso.inicio_del_curso && curso.duracion_del_curso.fin_del_curso
                            ? <div className="myChip">
                                <DateRangeOutlined className={classes.iconBox} />
                                <div className="myChipContent">
                                    <p className="myChipTitle"><strong>Fecha de Realización:</strong></p>
                                    <p className="myChipText">
                                        Del {curso.duracion_del_curso.inicio_del_curso} al {curso.duracion_del_curso.fin_del_curso}
                                    </p>
                                </div>
                            </div>
                            : null
                        }
                        {curso.duracion_del_curso.fin_inscripciones &&
                            <div className="myChip">
                                <AssignmentLateOutlined className={classes.iconBox} />
                                <div className="myChipContent">
                                    <p className="myChipTitle"><strong>Cierre de Inscripción:</strong></p>
                                    <p className="myChipText">
                                        {curso.duracion_del_curso.fin_inscripciones}
                                    </p>
                                </div>
                            </div>
                        }
                        {curso.docente &&
                            <div className="myChip">
                                <AccountBoxOutlined className={classes.iconBox} />
                                <div className="myChipContent">
                                    <p className="myChipTitle"><strong>Docente/es:</strong></p>
                                    <p className="myChipText">{curso.docente}</p>
                                </div>
                            </div>}
                        {curso.clases.lugar_de_cursado &&
                            <div className="myChip">
                                <ComputerOutlined className={classes.iconBox} />
                                <div className="myChipContent">
                                    <p className="myChipTitle"><strong>Sede / Plataforma:</strong></p>
                                    <p className="myChipText">{curso.clases.lugar_de_cursado}</p>
                                </div>
                            </div>}
                    </div>
                </div>
                :
                <div className="infoBox">
                    {curso.titulo === "Instalador electricista categoría III"
                        ? <div className="infoChip">
                            <Alert severity="info">
                        <strong>Examen Libre Ersep  20 de febrero, capacitacion previa de repaso desde el 12/01/21</strong>
                      </Alert>
                        </div>
                        :
                        <div className="infoChip">
                            <Chip className="animate__animated animate__rubberBand" variant="outlined" color="primary" label='Consultar' />
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default Information;