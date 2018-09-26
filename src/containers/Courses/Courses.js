import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
      console.log(this.props);
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                      this.state.courses.map( course => {
                          return (
                            <Link key={course.id} to={{
                              pathname: this.props.match.url + "/" + course.id,
                              search: `?title=${course.title}&id=${course.id}`
                              }}>
                              <article className="Course">{course.title}</article>
                            </Link>
                          )
                      } )
                    }
                </section>
                {/* Podemos ponerlo como aquí abajo para pasar nuestras propias props al componente Course.
                    Con {...props} estamos pasando las props de <Route /> (history, match, location) */}
                {/* <Route path="/:id" render={props => <Course clicked="Hello there" {...props}/>} /> */}

                {/* Tambien podemos pasar la 'id' y el 'titulo' mediante el 'path' de la siguiente forma */}
                {/* <Route path="/:id/:titulo" component={Course} */}
                {/* Y despues en Course.js sacar los valores así: this.props.match.params.id o titulo */}

                {/* O ponerlo como aqui y nuestras propias props las pasariamos mediante query params 'search:' */}
                <Route path="/:id" component={Course} />
            </div>
        );
    }
}

export default Courses;
