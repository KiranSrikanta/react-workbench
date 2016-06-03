/*eslint-disable */
import chai, {expect} from 'chai';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chaiJQuery from 'chai-jquery';
import {createStore} from 'redux';
import jQuery from 'jquery';
import reducers from '../app/reducers';

const renderComponent = function renderComponent (Component,props = { },state = { }) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <Component {...props} />
        </Provider>
    );

    return jQuery(ReactDOM.findDOMNode(componentInstance));
};

jQuery.fn.simulate = function simulate (eventName, value) {
    if (value) {
        this.val(value);
    }

    const firstElementIndex = 0;

    TestUtils.Simulate[eventName](this[firstElementIndex]);
};

chaiJQuery(chai, chai.util, jQuery);

export {renderComponent, expect};