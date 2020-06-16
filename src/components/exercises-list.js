import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// functional React component (lack of state and life cycle method)
// only use this when you only have JSX and props
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> |
      <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

// class component
export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {exercises: []}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        this.setState({ exercises: res.data })
      })
      .catch((error => {
        console.log(error);
      }))
  }

  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data))

    // update table with current exercises after deleting an exercise
    // the "_id" is the id in the MongoDB Database for each exercise
    this.setState({
      exercises: this.state.exercises.filter(el => el._id != id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currExercise => {
      return <Exercise 
                exercise={currExercise}  
                deleteExercise={this.deleteExercise} 
                key={currExercise._id} 
              />
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}