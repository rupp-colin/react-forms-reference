import React, {Component} from 'react';
import TextInput from './TextInput.jsx';

class FormContainer extends Component {

  state = {
    formController: {

      email: {
        value: '',
        placeholder: 'Email',
        valid: true,
        touched: false,
        validationRules: {
          minLength: 3
        }
      },
      name: {
        value: '',
        placeholder: 'Name',
        valid: true,
        touched: false,
        validationRules: {
          minLength: 3
        }
      },
      password: {
        value: '',
        placeholder: 'Password',
        valid: true,
        touched: false,
        validationRules: {
          minLength: 3
        }
      }

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.dir(this.state);
  }

  handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      formController: {
        ...this.state.formController,
        [name]: {
          ...this.state.formController[name],
          value
        }
      }
    })
  }

  render() {

    const {formController} = this.state;
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formController.email.value}
              onChange={this.handleChange}
            />
            <TextInput
              name="name"
              placeholder="name"
              value={formController.name.value}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formController.password.value}
              onChange={this.handleChange}
            />
          <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default FormContainer;
