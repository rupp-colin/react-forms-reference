import React, {Component} from 'react';
import TextInput from './TextInput.jsx';
import SelectInput from './SelectInput.jsx';
import {validate} from '../utils/validate.js';

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
      firstname: {
        value: '',
        placeholder: 'Last Name',
        valid: false,
        touched: false,
        validationRules: {
          minLength: 3,
          maxLength: 10,
          isRequired: true,
        }
      },
      lastname: {
        value: '',
        placeholder: 'First Name',
        valid: false,
        touched: false,
        validationRules: {
          minLength: 3,
          maxLength: 10,
          isRequired: true,
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
      },
      color: {
        value: '',
        valid: false,
        touched: false,
        validationRules: {
          isRequired: true,
        },
        options: [
          { value: 'blue', displayValue: 'Blue' },
          { value: 'yellow', displayValue: 'Yellow' },
          { value: 'Purple', displayValue: 'Purple' },
          { value: 'Green', displayValue: 'Green' },
          { value: 'Pink', displayValue: 'Pink' }
        ]
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

    const updatedControls = {
      ...this.state.formController
    };

    const updatedFormElement = {
      ...updatedControls[name]
    };

    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    this.setState({
      formController: updatedControls
    })
  }

  render() {

    const { formController } = this.state;

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
              name="firstname"
              placeholder={formController.firstname.placeholder}
              value={formController.firstname.value}
              onChange={this.handleChange}
              touched={formController.firstname.touched}
              valid={formController.firstname.valid}
            />
            <TextInput
              name="lastname"
              placeholder={formController.lastname.placeholder}
              value={formController.lastname.value}
              onChange={this.handleChange}
              touched={formController.lastname.touched}
              valid={formController.lastname.valid}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formController.password.value}
              onChange={this.handleChange}
            />
            <SelectInput
              name="color"
              value={formController.color.value}
              onChange={this.handleChange}
              touched={formController.color.touched}
              valid={formController.color.valid}
              options={formController.color.options}
            />

          <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default FormContainer;
