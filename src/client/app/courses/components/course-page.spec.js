/*eslint-disable */
import {expect, renderComponent} from '../../test-helper';
import React, {PropTypes} from 'react';
import CoursePage from './course-page';

let component = null;
const state = {
  'authorReducer': [
    {
      id: 'cory-house',
      firstName: 'Cory',
      lastName: 'House'
    }
  ],
  'courseReducer': [
    {
      id: "react-flux-building-applications",
      title: "Building Applications in React and Flux",
      watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
      authorId: "cory-house",
      length: "5:08",
      category: "JavaScript"
    }
  ]
};
const context = {
  router: {
    push: function (path) {

    }
  }
};

const contextTypes = { router: PropTypes.object };

describe('CoursePage', function () {
  describe('with route parameter', function () {
    beforeEach(() => {
      const props = { params: { id: 'react-flux-building-applications' } };
      
      component = renderComponent(CoursePage, props, state, context, contextTypes);
    });
    
    it('contains component class', function () {
      expect(component).to.have.class('CoursePage');
    });
    
    it('has correct value for title', function () {
      expect(component.find('input[name="title"]').val()).to.equal('Building Applications in React and Flux');
    });
    
    it('has correct value for category', function () {
      expect(component.find('input[name="category"]').val()).to.equal('JavaScript');
    });
    
    it('has correct value for length', function () {
      expect(component.find('input[name="length"]').val()).to.equal('5:08');
    });
    
    it('has correct value for author', function () {
      expect(component.find('select[name="authorId"]').val()).to.equal('cory-house');
      expect(component.find('select[name="authorId"] option:selected').text()).to.equal('Cory House');
    });
  });
  
  describe('without route parameter', function () {
    beforeEach(() => {
      const props = { params: {  } };
      
      component = renderComponent(CoursePage, props, state, context, contextTypes);
    });
    
    it('contains component class', function () {
      expect(component).to.have.class('CoursePage');
    });
    
    it('has button for submit', function () {
      expect(component.find('input[type="submit"]').length).to.equal(1);
    });
    
    it('has textbox for title', function () {
      expect(component.find('input[type="text"][name="title"]').length).to.equal(1);
    });
    
    it('has textbox for category', function () {
      expect(component.find('input[type="text"][name="category"]').length).to.equal(1);
    });
    
    it('has textbox for length', function () {
      expect(component.find('input[type="text"][name="length"]').length).to.equal(1);
    });
    
    it('has dropdown for author', function () {
      expect(component.find('select[name="authorId"]').length).to.equal(1);
    });
    
    it('shows error when a blank title is saved', function () {
      expect(component.find('input[type="text"][name="title"]').siblings('div.alert-danger')).to.not.exist;
      component.find('input[type="submit"]').simulate('click');
      expect(component.find('input[type="text"][name="title"]').siblings('div.alert-danger')).to.exist;
    });
  });
});