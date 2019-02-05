// Code ControlledInput Component Here
import React,{Component} from 'react'

export default class ControlledInput extends Component {
  state = {
    firstName: "Gavin",
    lastName: "Moore"
  }

  handleFirstNameChange = event => {
  this.setState({
    firstName: event.target.value
  })
}

handleLastNameChange = event => {
  this.setState({
    lastName: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  this.sendFormDataSomewhere(this.state)
}

// sendFormDataSomewhere = (this.state) => {
//   return (
//     <div>
//       <h1>{this.state.firstName}</h1>
//       <h2>{this.state.lastName}</h2>
//     </div>
//   )
// }

  render() {
    return (
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        </form>
      </div>
    )
  }
}
