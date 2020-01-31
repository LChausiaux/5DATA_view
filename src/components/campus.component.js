import React, {Component} from "react";
import Graph from "./graph.component";
import {Bar, Pie} from 'react-chartjs-2';
import axios from "axios";

export default class Campus extends Component
{
    constructor()
    {
        super();
        this.state = {
            discovery: '<img src="../img/logo.png" />',
            firstChoice: '<img src="../img/logo.png" />',
            labByCampus: '<img src="../img/logo.png" />',
            eatByCampus: '<img src="../img/logo.png" />',
        }
    }

    componentWillMount()
    {
        //ajax requests
        /*
           Découverte de l'école / campus -> un pie par campus
           1er choix / campus -> bar
           Nb personnes participant à un labo/campus -> bar
           Nb personnes qui mangent sur le campus / campus -> bar
         */
        axios.get('http://localhost:4000/decouverte/campus')
            .then(res =>
            {
                let means = {
                    internet: 0,
                    fair: 0,
                    boucheAOreilles: 0,
                    other: 0,
                };

                res.data.forEach(item =>
                {
                    switch (item.decouverte) {
                        case 'Internet' :
                            means.internet++;
                            break;
                        case 'Bouche a oreille' :
                            means.boucheAOreilles++;
                            break;
                        case 'Portes ouverte' :
                            means.fair++;
                            break;
                        default :
                            means.other++;
                            break;

                    }
                });

                let total = (means.internet + means.boucheAOreilles + means.fair + means.other) / 100;

                this.setState({
                    discovery: <Pie
                        data={{
                            labels: ['Internet', 'Bouche à oreilles', 'Portes ouverte', 'Autre'],
                            datasets: [
                                {
                                    data: [
                                        means.internet / total,
                                        means.boucheAOreilles / total,
                                        means.fair / total,
                                        means.other / total
                                    ],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                    ]
                                }
                            ]
                        }}
                    />
                });
            });

        axios.get('http://localhost:4000/premierChoix/campus')
            .then(res =>
            {
                let means = {
                    true: 0,
                    false: 0,
                };

                res.data.forEach(item =>
                {
                    if (item.premierChoix)
                        means.true++;
                    else
                        means.false++;
                });

                let total = (means.true + means.false) / 100;

                this.setState({
                    firstChoice: <Pie
                        data={{
                            labels: ['OUI', 'NON'],
                            datasets: [
                                {
                                    data: [
                                        means.true / total,
                                        means.false / total,
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

        axios.get('http://localhost:4000/labo/campus')
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
                            means.paris.count += item.labo ? 1 : 0;
                            means.paris.total++;
                            break;
                        case 'Troyes' :
                            means.troyes.count += item.labo ? 1 : 0;
                            means.troyes.total++;
                            break;
                        case 'Lyon' :
                            means.lyon.count += item.labo ? 1 : 0;
                            means.lyon.total++;
                            break;
                        case 'Marseille' :
                            means.marseille.count += item.labo ? 1 : 0;
                            means.marseille.total++;
                            break;
                        case 'Tours' :
                            means.tours.count += item.labo ? 1 : 0;
                            means.tours.total++;
                            break;
                        default :
                            means.rennes.count += item.labo ? 1 : 0;
                            means.rennes.total++;
                            break;
                    }
                });

                this.setState({
                    labByCampus: <Bar
                        data={{
                            labels: ['Troyes', 'Paris', 'Lyon', 'Marseille', 'Tours', 'Rennes'],
                            datasets: [
                                {
                                    data: [
                                        means.troyes.count * 100 / means.troyes.total,
                                        means.paris.count * 100 / means.paris.total,
                                        means.lyon.count * 100 / means.lyon.total,
                                        means.marseille.count * 100 / means.marseille.total,
                                        means.tours.count * 100 / means.tours.total,
                                        means.rennes.count * 100 / means.rennes.total
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

        axios.get('http://localhost:4000/mangerSurPlace/campus')
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
                            means.paris.count += item.mangerSurPlace ? 1 : 0;
                            means.paris.total++;
                            break;
                        case 'Troyes' :
                            means.troyes.count += item.mangerSurPlace ? 1 : 0;
                            means.troyes.total++;
                            break;
                        case 'Lyon' :
                            means.lyon.count += item.mangerSurPlace ? 1 : 0;
                            means.lyon.total++;
                            break;
                        case 'Marseille' :
                            means.marseille.count += item.mangerSurPlace ? 1 : 0;
                            means.marseille.total++;
                            break;
                        case 'Tours' :
                            means.tours.count += item.mangerSurPlace ? 1 : 0;
                            means.tours.total++;
                            break;
                        default :
                            means.rennes.count += item.mangerSurPlace ? 1 : 0;
                            means.rennes.total++;
                            break;
                    }
                });

                this.setState({
                    eatByCampus: <Bar
                        data={{
                            labels: ['Troyes', 'Paris', 'Lyon', 'Marseille', 'Tours', 'Rennes'],
                            datasets: [
                                {
                                    data: [
                                        means.troyes.count * 100 / means.troyes.total,
                                        means.paris.count * 100 / means.paris.total,
                                        means.lyon.count * 100 / means.lyon.total,
                                        means.marseille.count * 100 / means.marseille.total,
                                        means.tours.count * 100 / means.tours.total,
                                        means.rennes.count * 100 / means.rennes.total
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
    }

    render()
    {
        return (
            <div className='container'>
                <div className="row justify-content-center">
                    <Graph
                        title="Découverte de l'école"
                        graph="Graph"
                        graphLeft={this.state.discovery}
                        graphRight="Right"/>

                    <Graph
                        title="Premier choix"
                        graph="Graph"
                        graphLeft={this.state.firstChoice}
                        graphRight="Right"/>
                </div>
                <div className="row justify-content-center">
                    <Graph
                        title="Nombre d'étudiants participant à un labo"
                        graph="Graph"
                        graphLeft={this.state.labByCampus}
                        graphRight="Right"/>
                    <Graph
                        title="Nombre d'étudiants mangeant sur le campus"
                        graph="Graph"
                        graphLeft={this.state.eatByCampus}
                        graphRight="Right"/>
                </div>
            </div>
        );
    }
}