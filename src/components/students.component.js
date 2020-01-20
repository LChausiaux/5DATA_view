import React, {Component} from "react";

export default class Students extends Component
{
    render()
    {
        return(
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-4 card">
                        <div className="title">
                            Average age by class
                        </div>
                        <div className="graph">
                            GRAPH
                        </div>
                    </div>
                    <div className="col-6 card">
                        <div className="title">
                            Average sucess point earned by year
                        </div>
                        <div className="graph">
                            GRAPH
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 card">
                        <div className="title">
                            Recruitement origin
                        </div>
                        <div className="graph">
                            GRAPH
                        </div>
                    </div>
                    <div className="col-5 card">
                        <div className="title">
                            Voucher passed per year
                        </div>
                        <div className="graph">
                            GRAPH
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 card">
                        <div className="title">
                            Reasons of dropping school
                        </div>
                        <div className="graph">
                            GRAPH
                        </div>
                    </div>
                    <div className="col-5 card">
                        <div className="title">
                            Degree of origin
                        </div>
                        <div className="graph">
                            GRAPH
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}