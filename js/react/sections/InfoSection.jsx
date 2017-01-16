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

                    <div className="col-xs-10 col-xs-offset-1 appear animation-element">
                        <table className="info-table" >
                            <tr>
                                <td className="hidden-xs">
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
                                    LinkedIn: <a href="https://do.linkedin.com/in/ariel-alvarez-86b11a88">https://do.linkedin.com/in/ariel-alvarez-86b11a88</a>
                                    <br/>
                                    <br/>
                                    GitHub: <a href="https://github.com/arielalvarez88">https://github.com/arielalvarez88</a>
                                    <br/>
                                    <br/>
                                    Portfolio: You are seeing it.

                                </td>
                            </tr>
                        </table>

                        {/*<table className="info-table visible-xs">
                            <tr>
                                <td>Full Name: Ariel Alvarez
                                    <br/>
                                    <br/>
                                    Email: arielalvarez88@gmail.com
                                    <br/>
                                    <br/>
                                    Phone: 1-829-383-4141
                                    <br/>
                                    <br/>
                                    LinkedIn: <a href="https://do.linkedin.com/in/ariel-alvarez-86b11a88">https://do.linkedin.com/in/ariel-alvarez-86b11a88</a>
                                    <br/>
                                    <br/>
                                    GitHub: <a href="https://github.com/arielalvarez88">https://github.com/arielalvarez88</a>
                                    <br/>
                                    <br/>
                                    Portfolio: You are seeing it.

                                </td>
                            </tr>
                        </table> */}


                    </div>
                </div>

            </section>
        );

    }

}
