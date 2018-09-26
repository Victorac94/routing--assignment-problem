import React, { Component } from 'react';

class Course extends Component {

  render () {
    const queryParams = {title: null, id: null};
    const query = new URLSearchParams(this.props.location.search);

    for (let param of query.entries()) {
      queryParams[param[0]] = param[1];
    }

    let course = null;
    if (queryParams.title || queryParams.id) {
      course = (
        <div>
          <h1>{queryParams.title}</h1>
          <p>You selected the Course with ID: {queryParams.id}</p>
        </div>

      )
    }

    return (
      <div>
        {course}
      </div>
    );
  }
}

export default Course;
