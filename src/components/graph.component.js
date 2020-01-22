import React, {Component} from "react";

export default class Graph extends Component {

    constructor(props) {
        super(props);

        this.activateLeft = this.activateLeft.bind(this);
        this.activateRight = this.activateRight.bind(this);

        this.state = {
            isRightActive: false,
            isLeftActive: true,
            activeGraph: this.props.graphLeft
        };
    }

    activateLeft()
    {
        this.setState({
            isRightActive: false,
            isLeftActive: true,
            activeGraph: this.props.graphLeft
        });
    }

    activateRight()
    {
        this.setState({
            isRightActive: true,
            isLeftActive: false,
            activeGraph: this.props.graphRight
        });
    }

    render() {

        return (
            <div className="col-5 card">
                <div className="header">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="tabs">
                        <div className={`tab ${this.state.isLeftActive ? 'active' : ''}`}
                            onClick={this.activateLeft}>
                            <a href="#">{this.props.tabLeft}</a>
                        </div>
                        <div className={`tab ${this.state.isRightActive ? 'active' : ''}`}
                             onClick={this.activateRight}>
                        <a href="#">{this.props.tabRight}</a>
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
