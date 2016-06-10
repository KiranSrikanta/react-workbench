import React, {PropTypes} from 'react';
import CoursesList from './courses-list';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import courseActions from '../actions/course-actions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      'course': { 'title': '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;

    course.title = event.target.value;
    this.setState({ course });
  }

  onSaveClick(event) {
    const course = this.state.course;

    event.preventDefault();
    this.props.actions.createCourse(course);
    course.title = '';
    this.setState({ course });
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const courses = this.props.courses;

    return (
      <div className={'CoursesPage'}>
        <CoursesList courses={courses} />
        <input type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
          />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  'courses': PropTypes.array.isRequired,
  'actions': PropTypes.object.isRequired
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    'actions': bindActionCreators(courseActions, dispatch)
  };
},
  mapStateToProps = function mapStateToProps(state) {
    return {
      'courses': state.courseReducer
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);