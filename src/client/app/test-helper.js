/*eslint-disable */
import chai, {expect} from 'chai';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chaiJQuery from 'chai-jquery';
import configureMockStore from 'redux-mock-store';
import {createStore} from 'redux';
import jQuery from 'jquery';
import reducers from '../app/reducers';
import thunk from 'redux-thunk';

const renderComponent = function renderComponent (Component,
  props = {},
  state = {},
  context = {},
  contextTypes = {}) {
    const ComponentWithContext = wrapWithContext(Component, props, context, contextTypes);
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentWithContext />
        </Provider>
    );

    return jQuery(ReactDOM.findDOMNode(componentInstance));
};

/**
* Helper function to wrap component with a component that has context 
*/
function wrapWithContext(Component, props, context, contextTypes){
  class ContextWrapper extends React.Component {
    getChildContext(){
      return context;
    }
    
    render() {
      return <Component {...props} />;
    }
  }
  
  ContextWrapper.childContextTypes = contextTypes;

  return ContextWrapper;
}

const mockStoreCreator = configureMockStore([thunk]);

jQuery.fn.simulate = function simulate (eventName, value) {
    if (value) {
        this.val(value);
    }

    const firstElementIndex = 0;

    TestUtils.Simulate[eventName](this[firstElementIndex]);
};

chaiJQuery(chai, chai.util, jQuery);

export {renderComponent, expect, mockStoreCreator};