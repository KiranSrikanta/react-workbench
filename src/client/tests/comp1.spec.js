import { renderComponent, expect } from './test-helper';
import Comp1 from '../app/comp1';

describe('Comp1', function () {
    let component;
    beforeEach(() => {
        component = renderComponent(Comp1);
    });
    
    it('contains text "Hello From Comp1!"', function () {
        expect(component).to.contain("Hello From Comp1!");
    });
});