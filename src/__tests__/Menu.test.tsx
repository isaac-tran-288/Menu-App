import Menu from "../Menu";
import { shallow } from 'enzyme';

describe('Test Menu', () => {
    const handleOpenFormMock = jest.fn();
    const wrapper = shallow(<Menu container={undefined} open={false}
        onClose={() => { }} openFormFunction={handleOpenFormMock} />);

    test('clicking on Login button should call OpenForm function', () => {
        wrapper.find("#login").at(0).simulate("click");
        expect(handleOpenFormMock).toBeCalled();
    });

});