/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

export class InfoSection extends React.Component {

    render() {

        return (
            <section className={"category sections-infosection " + this.props.className} id={this.props.id}>

                <div className="container">

                    <div className="section-header">
                        <h2 className="" id="section-infosection-header">Info</h2>
                    </div>

                    <div className="col-xs-8 col-sm-offset-2 appear animation-element">
                        <table className="info-table">
                            <tr>
                                <td >
                                  <div id="vertical-text" className="vertical-text">
                                    Passion for software.
                                  </div>

                                </td>

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
                        {/*<div className="vertical-text col-xs-1" style={{height:550}}>Passion for software</div>
                        <div className="col-xs-11" style={{height:550}}>
                            Full Name: Ariel Alvarez
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
                        </div>*/}

                    </div>
                </div>

            </section>
        );

    }

}
