import React, { Component } from 'react';
import ProjectList from '../project/ProjectList';


class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList />
          </div>
          <div className="col s12 m5 offset-1">
            <p>Notifications</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;