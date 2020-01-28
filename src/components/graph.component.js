import React, {Component} from "react";

export default class Graph extends Component
{

    constructor(props)
    {
        super(props);

        this.activateLeft = this.activateLeft.bind(this);
        this.activateRight = this.activateRight.bind(this);

        this.state = {
            isRightActive: false,
            isLeftActive: true,
            graphLeft: '',
            graphRight: '',
            activeGraph: ''
        };
    }

    activateLeft()
    {
        this.setState({
            isRightActive: false,
            isLeftActive: true,
            activeGraph: this.state.graphLeft
        });
    }

    activateRight()
    {
        this.setState({
            isRightActive: true,
            isLeftActive: false,
            activeGraph: this.state.graphRight
        });
    }

    componentWillReceiveProps(nextProps, nextContent)
    {
        if (this.props !== nextProps) {
            this.setState({
                graphLeft: nextProps.graphLeft,
                graphRight: nextProps.graphRight,
                activeGraph: this.state.isRightActive ? nextProps.graphRight : nextProps.graphLeft
            });
        }
    }

    render()
    {

        return (
            <div className="col-5 card">
                <div className="header">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="tabs">
                        <div className={`tab ${this.state.isLeftActive ? 'active' : ''}`}
                             onClick={this.activateLeft}>
                            <p>{this.props.tabLeft}</p>
                        </div>
                        <div className={`tab ${this.state.isRightActive ? 'active' : ''}`}
                             onClick={this.activateRight}>
                            <p>{this.props.tabRight}</p>
                        </div>
                    </div>
                </div>
                <div className="graph">
                    {this.state.activeGraph}
                </div>
            </div>
        );
    }
}
