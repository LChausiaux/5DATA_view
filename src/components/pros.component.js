import React, {Component} from "react";
import Graph from "./graph.component";
import {Bar, Pie} from 'react-chartjs-2';
import axios from "axios";

export default class Pros extends Component {

    constructor() {
        super();
        this.state = {
            internshipByCampus: '<img src="../img/logo.png" />',
            contratProByCampus: '<img src="../img/logo.png" />',
            internshipByPromo: '<img src="../img/logo.png" />',
            contratProByPromo: '<img src="../img/logo.png" />',
            contratsByStage: '<img src="../img/logo.png" />',
            contratsByContratPro: '<img src="../img/logo.png" />',
        }
    }

    componentWillMount() {
        //ajax requests
        /*
           Stage / campus
           Stage/promo
           Contrat pro / campus
           Contrat pro/promo
         */
        axios.get('http://localhost:4000/stage/campus')
            .then(res => {
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

                res.data.forEach(item => {
                    switch (item.campus) {
                        case 'Paris' :
                            means.paris.count += item.stage ? 1 : 0;
                            means.paris.total++;
                            break;
                        case 'Troyes' :
                            means.troyes.count += item.stage ? 1 : 0;
                            means.troyes.total++;
                            break;
                        case 'Lyon' :
                            means.lyon.count += item.stage ? 1 : 0;
                            means.lyon.total++;
                            break;
                        case 'Marseille' :
                            means.marseille.count += item.stage ? 1 : 0;
                            means.marseille.total++;
                            break;
                        case 'Tours' :
                            means.tours.count += item.stage ? 1 : 0;
                            means.tours.total++;
                            break;
                        default :
                            means.rennes.count += item.stage ? 1 : 0;
                            means.rennes.total++;
                            break;
                    }
                });

                this.setState({
                    internshipByCampus: <Bar
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
                        redraw
                    />
                })
            });

        axios.get('http://localhost:4000/stage/promo')
            .then(res => {
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
                    }
                };

                res.data.forEach(item => {
                    switch (item.promo) {
                        case 'ASC.1' :
                            means.asc1.count += item.stage ? 1 : 0;
                            means.asc1.total++;
                            break;
                        case 'ASC.2' :
                            means.asc2.count += item.stage ? 1 : 0;
                            means.asc2.total++;
                            break;
                        case 'BSC.c' :
                            means.bsc.count += item.stage ? 1 : 0;
                            means.bsc.total++;
                            break;
                        case 'MSC.1' :
                            means.msc1.count += item.stage ? 1 : 0;
                            means.msc1.total++;
                            break;
                        default :
                            means.msc2.count += item.stage ? 1 : 0;
                            means.msc2.total++;
                            break;
                    }
                });

                this.setState({
                    internshipByPromo: <Bar
                        data={{
                            labels: ['ASC.1', 'ASC.2', 'BSC', 'MSC.1', 'MSC.2'],
                            datasets: [
                                {
                                    data: [
                                        means.asc1.count * 100 / means.asc1.total,
                                        means.asc2.count * 100 / means.asc2.total,
                                        means.bsc.count * 100 / means.bsc.total,
                                        means.msc1.count * 100 / means.msc1.total,
                                        means.msc2.count * 100 / means.msc2.total,
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
                        redraw
                    />
                })
            });

        axios.get('http://localhost:4000/contratPro/campus')
            .then(res => {
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

                res.data.forEach(item => {
                    switch (item.campus) {
                        case 'Paris' :
                            means.paris.count += item.contratPro ? 1 : 0;
                            means.paris.total++;
                            break;
                        case 'Troyes' :
                            means.troyes.count += item.contratPro ? 1 : 0;
                            means.troyes.total++;
                            break;
                        case 'Lyon' :
                            means.lyon.count += item.contratPro ? 1 : 0;
                            means.lyon.total++;
                            break;
                        case 'Marseille' :
                            means.marseille.count += item.contratPro ? 1 : 0;
                            means.marseille.total++;
                            break;
                        case 'Tours' :
                            means.tours.count += item.contratPro ? 1 : 0;
                            means.tours.total++;
                            break;
                        default :
                            means.rennes.count += item.contratPro ? 1 : 0;
                            means.rennes.total++;
                            break;
                    }
                });

                this.setState({
                    contratProByCampus: <Bar
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
                        redraw
                    />
                })
            });

        axios.get('http://localhost:4000/contratPro/promo')
            .then(res => {
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
                    }
                };

                res.data.forEach(item => {
                    switch (item.promo) {
                        case 'ASC.1' :
                            means.asc1.count += item.contratPro ? 1 : 0;
                            means.asc1.total++;
                            break;
                        case 'ASC.2' :
                            means.asc2.count += item.contratPro ? 1 : 0;
                            means.asc2.total++;
                            break;
                        case 'BSC.c' :
                            means.bsc.count += item.contratPro ? 1 : 0;
                            means.bsc.total++;
                            break;
                        case 'MSC.1' :
                            means.msc1.count += item.contratPro ? 1 : 0;
                            means.msc1.total++;
                            break;
                        default :
                            means.msc2.count += item.contratPro ? 1 : 0;
                            means.msc2.total++;
                            break;
                    }
                });

                this.setState({
                    contratProByPromo: <Bar
                        data={{
                            labels: ['ASC.1', 'ASC.2', 'BSC.c', 'MSC.1', 'MSC.2'],
                            datasets: [
                                {
                                    data: [
                                        means.asc1.count * 100 / means.asc1.total,
                                        means.asc2.count * 100 / means.asc2.total,
                                        means.bsc.count * 100 / means.bsc.total,
                                        means.msc1.count * 100 / means.msc1.total,
                                        means.msc2.count * 100 / means.msc2.total,
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
                        redraw
                    />
                })
            });

        axios.get('http://localhost:4000/stage')
            .then(res => {
                let companies = {};
                res.data.forEach(item => {
                    let company = item.stage.split(',');

                    company.forEach(element => {
                        element = element.replace("/[\"]/", "").replace("Groupe", "").trim();

                        if (element in companies)
                            companies[element]++;
                        else
                            companies[element] = 1;
                    });
                });

                console.log(companies);

                this.setState({
                    contratsByStage: <Pie
                        data={{
                            labels: Object.keys(companies),
                            datasets: [
                                {
                                    data: Object.values(companies),
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(153, 102, 255, 0.6)',
                                        'rgba(255, 159, 64, 0.6)',
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
                        redraw
                    />
                })
            });

        axios.get('http://localhost:4000/contratPro')
            .then(res => {
                let companies = {};
                res.data.forEach(item => {
                    let company = item.contratPro.split(',');

                    company.forEach(element => {
                        element = element.replace("/[\"]/", "").replace("Groupe", "").trim();

                        if (element in companies)
                            companies[element]++;
                        else
                            companies[element] = 1;
                    });
                });

                console.log(companies);

                this.setState({
                    contratsByContratPro: <Pie
                        data={{
                            labels: Object.keys(companies),
                            datasets: [
                                {
                                    data: Object.values(companies),
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
                        redraw
                    />
                })
            });
    }

    render() {
        return (
            <div className='container'>
                <div className="row justify-content-center">
                    <Graph
                        title="Pourcentage de stagiaires"
                        graph="Graph"
                        tabLeft="Campus"
                        tabRight="Promo "
                        graphLeft={this.state.internshipByCampus}
                        graphRight={this.state.internshipByPromo} />

                    <Graph
                        title="Pourcentage de contrat pro "
                        graph="Graph"
                        tabLeft="Campus"
                        tabRight="Promo"
                        graphLeft={this.state.contratProByCampus}
                        graphRight={this.state.contratProByPromo} />
                </div>
                <div className="row justify-content-center">
                    <Graph
                        title="Recrutement"
                        graph="Graph"
                        tabLeft="Stages"
                        tabRight="Contrats pro"
                        graphLeft={this.state.contratsByStage}
                        graphRight={this.state.contratsByContratPro} />
                </div>
            </div>
        );
    }
}