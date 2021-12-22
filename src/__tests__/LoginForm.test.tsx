import { shallow, mount } from 'enzyme';
import LoginForm from '../LoginForm';
import TextField from '@mui/material/TextField';
import login from '../login';

beforeAll(() => {
    require("whatwg-fetch");
});

describe('Test Login Form', () => {
    const handleCloseMock = jest.fn();
    const loginMock = jest.fn();

    jest.doMock("../login", () => ({
        __esModule: true,
        default: loginMock
    }));

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

    test('should call handle close function when clicking submit', () => {
        // wrapper.find("#submit").simulate('click');
        // expect(loginMock).toHaveBeenCalledWith("", "");
        // expect(handleCloseMock).toHaveBeenCalled();

    });

});