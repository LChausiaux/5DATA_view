import React, {Component} from "react";
import Graph from "./graph.component";
import {Bar, Pie} from 'react-chartjs-2';
import axios from 'axios';

export default class Students extends Component
{

    constructor()
    {
        super();
        this.state = {
            ectsByCampus: '',
            ectsByParents: '',
            ectsByPreviousDegree: '',
            raisonsArretReasons: '',
            raisonsArretCount: '',
        }
    }

    componentWillMount()
    {
        //ajax requests
        /*
           Moyenne ECTS/an/campus -> bar

           Moyenne ECTS/an etudiants chez les parents ou non -> bar

           Moyenne ECTS/an séparés par diplomes obtenus avant -> bar

           Moyenne rattrapages/an/campus -> bar
           Moyenne rattrapages/an/promo -> bar

           Arrêt etudes par rapport au campus -> bar
           Arrêt etudes par rapport à la Promo -> bar
         */
        axios.get('http://localhost:4000/ects/campus')
            .then(res =>
            {
                let means = {
                    troyes: {
                        count: 0,
                        total: 0
                    },
                    paris: {
                        count: 0,
                        total: 0
                    },
                    lyon: {
                        count: 0,
                        total: 0
                    },
                    marseille: {
                        count: 0,
                        total: 0
                    },
                    tours: {
                        count: 0,
                        total: 0
                    },
                    rennes: {
                        count: 0,
                        total: 0
                    }
                };

                res.data.forEach(item =>
                {
                    let years = item.nombreCrédit > 60 ? Math.floor(item.nombreCrédit / 60) : 1;

                    switch (item.campus) {
                        case 'Paris' :
                            means.paris.total += item.nombreCrédit / years;
                            means.paris.count++;
                            break;
                        case 'Troyes' :
                            means.troyes.total += item.nombreCrédit / years;
                            means.troyes.count++;
                            break;
                        case 'Lyon' :
                            means.lyon.total += item.nombreCrédit / years;
                            means.lyon.count++;
                            break;
                        case 'Marseille' :
                            means.marseille.total += item.nombreCrédit / years;
                            means.marseille.count++;
                            break;
                        case 'Tours' :
                            means.tours.total += item.nombreCrédit / years;
                            means.tours.count++;
                            break;
                        default :
                            means.rennes.total += item.nombreCrédit / years;
                            means.rennes.count++;
                            break;
                    }
                });
                this.setState({
                    ectsByCampus: <Bar
                        data={{
                            labels: ['Troyes', 'Paris', 'Lyon', 'Marseille', 'Tours', 'Rennes'],
                            datasets: [
                                {
                                    data: [
                                        means.troyes.total / means.troyes.count,
                                        means.paris.total / means.paris.count,
                                        means.lyon.total / means.lyon.count,
                                        means.marseille.total / means.marseille.count,
                                        means.tours.total / means.tours.count,
                                        means.rennes.total / means.rennes.count
                                    ],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(153, 102, 255, 0.6)',
                                        'rgba(255, 159, 64, 0.6)',
                                    ]
                                }
                            ]
                        }}
                        options={{
                            legend: false
                        }}
                    />
                })
            });

        axios.get('http://localhost:4000/ects/visChezParent')
            .then(res =>
            {
                let means = {
                    oui: {
                        count: 0,
                        total: 0
                    },
                    non: {
                        count: 0,
                        total: 0
                    },
                };

                res.data.forEach(item =>
                {
                    let years = item.nombreCrédit > 60 ? Math.floor(item.nombreCrédit / 60) : 1;

                    if (item.visChezParent) {

                        means.oui.total += item.nombreCrédit / years;
                        means.oui.count++;
                    } else {
                        means.non.total += item.nombreCrédit / years;
                        means.non.count++;
                    }
                });

                this.setState({
                    ectsByParents: <Bar
                        data={{
                            labels: ['Vis chez ses parents', 'Vis seul'],
                            datasets: [
                                {
                                    data: [
                                        means.oui.total / means.oui.count,
                                        means.non.total / means.non.count,
                                    ],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                    ]
                                }
                            ]
                        }}
                        options={{
                            legend: false
                        }}
                    />
                })
            });

        axios.get('http://localhost:4000/ects/promo')
            .then(res =>
            {
                let means = {
                    asc1: {
                        count: 0,
                        total: 0
                    },
                    asc2: {
                        count: 0,
                        total: 0
                    },
                    bsc: {
                        count: 0,
                        total: 0
                    },
                    msc1: {
                        count: 0,
                        total: 0
                    },
                    msc2: {
                        count: 0,
                        total: 0
                    },
                };

                res.data.forEach(item =>
                {
                    let years = item.nombreCrédit > 60 ? Math.floor(item.nombreCrédit / 60) : 1;

                    switch (item.promo) {
                        case 'ASC.1' :
                            means.asc1.total += item.nombreCrédit / years;
                            means.asc1.count++;
                            break;
                        case 'ASC.2' :
                            means.asc2.total += item.nombreCrédit / years;
                            means.asc2.count++;
                            break;
                        case 'BSC' :
                            means.bsc.total += item.nombreCrédit / years;
                            means.bsc.count++;
                            break;
                        case 'MSC.1' :
                            means.msc1.total += item.nombreCrédit / years;
                            means.msc1.count++;
                            break;
                        default :
                            means.msc2.total += item.nombreCrédit / years;
                            means.msc2.count++;
                            break;
                    }
                });

                this.setState({
                    ectsByPreviousDegree: <Bar
                        data={{
                            labels: ['ASC.1', 'ASC.2', 'BSC', 'MSC.1', 'MSC.2'],
                            datasets: [
                                {
                                    data: [
                                        means.asc1.total / means.asc1.count,
                                        means.asc2.total / means.asc2.count,
                                        means.bsc.total / means.bsc.count,
                                        means.msc1.total / means.msc1.count,
                                        means.msc2.total / means.msc2.count,
                                    ],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(153, 102, 255, 0.6)',
                                    ]
                                }
                            ]
                        }}
                        options={{
                            legend: false
                        }}
                    />
                })
            });

        axios.get('http://localhost:4000/rattrapageParAn/campus')
            .then(res =>
            {
                let means = {
                    troyes: {
                        count: 0,
                        total: 0
                    },
                    paris: {
                        count: 0,
                        total: 0
                    },
                    lyon: {
                        count: 0,
                        total: 0
                    },
                    marseille: {
                        count: 0,
                        total: 0
                    },
                    tours: {
                        count: 0,
                        total: 0
                    },
                    rennes: {
                        count: 0,
                        total: 0
                    }
                };

                res.data.forEach(item =>
                {
                    switch (item.campus) {
                        case 'Paris' :
                            means.paris.total += item.rattrapageParAn;
                            means.paris.count++;
                            break;
                        case 'Troyes' :
                            means.troyes.total += item.rattrapageParAn;
                            means.troyes.count++;
                            break;
                        case 'Lyon' :
                            means.lyon.total += item.rattrapageParAn;
                            means.lyon.count++;
                            break;
                        case 'Marseille' :
                            means.marseille.total += item.rattrapageParAn;
                            means.marseille.count++;
                            break;
                        case 'Tours' :
                            means.tours.total += item.rattrapageParAn;
                            means.tours.count++;
                            break;
                        default :
                            means.rennes.total += item.rattrapageParAn;
                            means.rennes.count++;
                            break;
                    }
                });
                this.setState({
                    rattrapageByCampus: <Bar
                        data={{
                            labels: ['Troyes', 'Paris', 'Lyon', 'Marseille', 'Tours', 'Rennes'],
                            datasets: [
                                {
                                    data: [
                                        means.troyes.total / means.troyes.count,
                                        means.paris.total / means.paris.count,
                                        means.lyon.total / means.lyon.count,
                                        means.marseille.total / means.marseille.count,
                                        means.tours.total / means.tours.count,
                                        means.rennes.total / means.rennes.count
                                    ],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(153, 102, 255, 0.6)',
                                        'rgba(255, 159, 64, 0.6)',
                                    ]
                                }
                            ]
                        }}
                        options={{
                            legend: false
                        }}
                    />
                })
            });

        axios.get('http://localhost:4000/rattrapageParAn/promo')
            .then(res =>
            {
                let means = {
                    asc1: {
                        count: 0,
                        total: 0
                    },
                    asc2: {
                        count: 0,
                        total: 0
                    },
                    bsc: {
                        count: 0,
                        total: 0
                    },
                    msc1: {
                        count: 0,
                        total: 0
                    },
                    msc2: {
                        count: 0,
                        total: 0
                    },
                };

                res.data.forEach(item =>
                {
                    switch (item.promo) {
                        case 'ASC.1' :
                            means.asc1.total += item.rattrapageParAn;
                            means.asc1.count++;
                            break;
                        case 'ASC.2' :
                            means.asc2.total += item.rattrapageParAn;
                            means.asc2.count++;
                            break;
                        case 'BSC' :
                            means.bsc.total += item.rattrapageParAn;
                            means.bsc.count++;
                            break;
                        case 'MSC.1' :
                            means.msc1.total += item.rattrapageParAn;
                            means.msc1.count++;
                            break;
                        default :
                            means.msc2.total += item.rattrapageParAn;
                            means.msc2.count++;
                            break;
                    }
                });
                this.setState({
                    rattrapageByPromo: <Bar
                        data={{
                            labels: ['ASC.1', 'ASC.2', 'BSC', 'MSC.1', 'MASC.2'],
                            datasets: [
                                {
                                    data: [
                                        means.asc1.total / means.asc1.count,
                                        means.asc2.total / means.asc2.count,
                                        means.bsc.total / means.bsc.count,
                                        means.msc1.total / means.msc1.count,
                                        means.msc2.total / means.msc2.count,
                                    ],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(153, 102, 255, 0.6)',
                                    ]
                                }
                            ]
                        }}
                        options={{
                            legend: false
                        }}
                    />
                })
            });

        axios.get('http://localhost:4000/raisonArret')
            .then(res =>
            {
                let means = {
                    empty: 0,
                    school: 0,
                    domain: 0,
                    personnel: 0,
                };

                res.data.forEach(item =>
                {
                    res.data.forEach(item =>
                    {
                        let raison = item.raisonArret ? item.raisonArret.split(',') : null;
                        if (raison) {
                            raison.forEach(element =>
                            {
                                switch (element) {
                                    case "Probleme vis a vis de l'ecole" :
                                        means.school++;
                                        break;
                                    case "Probleme personnel" :
                                        means.personnel++;
                                        break;
                                    default :
                                        means.domain++;
                                        break;
                                }
                            });
                        } else
                            means.empty++;
                    });

                    let total = (means.school + means.domain + means.personnel) /100;

                    this.setState({

                        raisonsArretReasons: <Bar
                            data={{
                                labels: ['Ecole', 'Informatique', 'Personnel'],
                                datasets: [
                                    {
                                        data: [
                                            means.school / total,
                                            means.domain / total,
                                            means.personnel / total,
                                        ],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.6)',
                                            'rgba(54, 162, 235, 0.6)',
                                            'rgba(255, 206, 86, 0.6)',
                                        ]
                                    }
                                ]
                            }}
                            options={{
                                legend: false
                            }}
                        />,
                        raisonsArretCount: <Pie
                            data={{
                                labels: ['OUI', 'NON'],
                                datasets: [
                                    {
                                        data: [
                                            means.school + means.domain + means.personnel,
                                            means.empty
                                        ],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.6)',
                                            'rgba(54, 162, 235, 0.6)',
                                        ]
                                    }
                                ]
                            }}
                        />
                    });
                });
            });
        console.log('GDFFDGDFSGDFGS');

    }

    render()
    {
        return (
            <div className='container'>
                <div className="row justify-content-center">
                    <Graph
                        title="ECTS moyen par campus"
                        graph="Graph"
                        graphLeft={this.state.ectsByCampus}
                        graphRight=""/>

                    <Graph
                        title="ECTS moyen selon la situation"
                        graph="Graph"
                        graphLeft={this.state.ectsByParents}
                        graphRight=""/>
                </div>
                <div className="row justify-content-center">
                    <Graph
                        title="ECTS moyen selon le diplôme d'origine"
                        graph="Graph"
                        graphLeft={this.state.ectsByPreviousDegree}
                        graphRight=""/>
                    <Graph
                        title="Rattrapage par an"
                        tabLeft="Campus"
                        tabRight="Promo"
                        graph="Graph"
                        graphLeft={this.state.rattrapageByCampus}
                        graphRight={this.state.rattrapageByPromo}/>
                </div>
                <div className="row justify-content-center">
                    <Graph
                        title="A voulu arrêter l'école"
                        graph="Graph"
                        graphLeft={this.state.raisonsArretCount}
                        graphRight=""/>
                    <Graph
                        title="Origine du problème"
                        graph="Graph"
                        graphLeft={this.state.raisonsArretReasons}
                        graphRight=""/>
                </div>
            </div>
        );
    }
}