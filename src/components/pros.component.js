import React, {Component} from "react";
import Graph from "./graph.component";
import {Bar, Line, Pie} from 'react-chartjs-2';

export default class Pros extends Component
{

    constructor() {
        super();
        this.state = {
            testGraph: ''
        }
    }

    componentWillMount() {
        //ajax requests
        this.setState({
            testGraph: <Bar data={
                {
                    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                    datasets: [
                        {
                            label: 'Population',
                            data: [
                                617594,
                                181045,
                                153060,
                                106519,
                                105162,
                                95072
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                                'rgba(255, 99, 132, 0.6)'
                            ]
                        }
                    ]
                }
            } />
        })
    }

    render()
    {
        return(
            <div className='container'>
                <div className="row justify-content-center">
                    <Graph
                        title="Population"
                        tabLeft="Campus"
                        tabRight="School"
                        graph="Graph"
                        graphLeft={this.state.testGraph}
                        graphRight="Right" />

                    <Graph
                        title="Population"
                        tabLeft="Campus"
                        tabRight="School"
                        graph="Graph"
                        graphLeft={this.state.testGraph}
                        graphRight="Right" />
                </div>
                <div className="row justify-content-center">
                    <Graph
                        title="Population"
                        tabLeft="Campus"
                        tabRight="School"
                        graph="Graph"
                        graphLeft={this.state.testGraph}
                        graphRight="Right" />
                    <Graph
                        title="Population"
                        tabLeft="Campus"
                        tabRight="School"
                        graph="Graph"
                        graphLeft={this.state.testGraph}
                        graphRight="Right" />
                </div>
                <div className="row justify-content-center">
                    <Graph
                        title="Population"
                        tabLeft="Campus"
                        tabRight="School"
                        graph="Graph"
                        graphLeft={this.state.testGraph}
                        graphRight="Right" />
                    <Graph
                        title="Population"
                        tabLeft="Campus"
                        tabRight="School"
                        graph="Graph"
                        graphLeft={this.state.testGraph}
                        graphRight="Right" />
                </div>
            </div>
        );
    }
}