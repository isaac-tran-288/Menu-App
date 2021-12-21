import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginForm from '../LoginForm';
import TextField from '@mui/material/TextField';


describe('Test Login Form', () => {
    const handleCloseMock = jest.fn();
    const wrapper = shallow(<LoginForm open={true} handleClose={handleCloseMock} />);


    test('should render 2 <TextField /> element.', () => {
        expect(wrapper.find(TextField)).toHaveLength(2);
    });


    // it('should show error when entered', () => {
    //     wrapper.find('#name').simulate('change', { target: { value: '123' } });
    //     expect(wrapper.find("#name").props().error).toBe(
    //         true);
    //     expect(wrapper.find("#name").props().helperText).toBe(
    //         'Wrong Name format.');
    // });


});