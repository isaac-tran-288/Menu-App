import { shallow } from 'enzyme';
import LoginForm from '../LoginForm';
import TextField from '@mui/material/TextField';
import toJSON from 'enzyme-to-json';

beforeAll(() => {
    require("whatwg-fetch");
});

describe('Test Login Form', () => {
    const handleCloseMock = jest.fn();


    const wrapper = shallow(<LoginForm open={true} handleClose={handleCloseMock} />);


    test('should render 2 <TextField /> elements', () => {
        expect(wrapper.find(TextField)).toHaveLength(2);
        expect(wrapper.find(TextField).at(0).props().label).toEqual("Username");
        expect(wrapper.find(TextField).at(1).props().label).toEqual("Password");
    });


    test('should call handle close function when clicking cancel', () => {
        wrapper.find("#cancel").simulate('click');
        expect(handleCloseMock).toHaveBeenCalled();
    });

    test('should render 1 submit button', () => {
        expect(wrapper.find("#submit")).toHaveLength(1);
    });
    test("matches snapshot", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
      });

});