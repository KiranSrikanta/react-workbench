import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import chaiJQuery from 'chai-jquery';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../app/reducers';

function renderComponent(Component, props={}, state={}) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <Component {...props} />
        </Provider>
    );
    return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function (eventName, value) {
    if(value){
        this.val(value);
    }
    TestUtils.simulate[eventName](this[0]);
}

chaiJQuery(chai, chai.util, $);

export { renderComponent, expect }