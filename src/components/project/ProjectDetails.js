import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className= "card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>inquiry: re #7 React-redux-Firebase App  U have as a directory projects (w/ a 's')  
            & yet in the App.js U have the Route path='/project/:id'  w/o 's'  & when console.log 
            is displayed it also shows path='project'  w/o  the 's' & the DOM displays the info with 
            no errors.  I tried this same syntax & I do not get an error but, I also do not display the 
            data.  I am on Ubuntu 16.04.  Is this a quirk of Windows OS or what?  I got it to work by 
            adding the 's' in the Route path=' '  just curious 
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Britannia DEV </div>
          <div>2nd January, 3am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;