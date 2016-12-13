/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

export class InfoSection extends React.Component {

    render() {

        return (
            <div className="category sections-infosection row" id={this.props.id}>
              <div className="section-header">
                  <h2 className="">Info</h2>
              </div>

                <table className="info-table col-md-12 col-md-6 col-sm-offset-3">
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
        );

    }

}
