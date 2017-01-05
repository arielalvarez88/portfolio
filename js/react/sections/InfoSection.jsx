/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

export class InfoSection extends React.Component {

    render() {

        return (
            <div className="category sections-infosection row" id={this.props.id}>

                <div className="section-header">
                    <h2 className="" id="section-infosection-header">Info</h2>
                </div>

                <div className="col-xs-8 col-sm-offset-2">
                    <table className="info-table">
                        <tr>
                            <td className="vertical-text">Passion for software.</td>

                            <td>Full Name: Ariel Alvarez
                                <br/>
                                <br/>
                                Email: arielalvarez88@gmail.com
                                <br/>
                                <br/>
                                Phone: 1-829-383-4141
                                <br/>
                                <br/>
                                LinkedIn: https://do.linkedin.com/in/ariel-alvarez-86b11a88
                                <br/>
                                <br/>
                                GitHub: https://github.com/arielalvarez88
                                <br/>
                                <br/>
                                Portfolio: You are seeing it.

                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        );

    }

}
