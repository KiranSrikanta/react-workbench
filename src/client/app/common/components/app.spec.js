/*eslint-disable */
import { renderComponent, expect } from '../../test-helper';
import App from './app';
import React from 'react';

describe('App', function () {
    let component;
    beforeEach(() => {
        component = renderComponent(App, {children : <div />});
    });
    
    it('contains component class', function () {
        expect(component).to.have.class("AppMain");
    });
});