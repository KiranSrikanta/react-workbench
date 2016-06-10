import './assets/css/course-page.css';
import React, {PropTypes} from 'react';
import CourseForm from './course-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import courseActions from '../actions/course-actions';
import toastr from 'toastr';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      'course': Object.assign({}, props.course),
      'errors': {},
      'saving': false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({'course': Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    const course = this.state.course,
      field = event.target.name;

    course[field] = event.target.value;

    return this.setState({ course });
  }

  courseFormValid() {
    let formIsValid = true;
    const errors = {},
        minTitleLength = 5;

    if (this.state.course.title.length < minTitleLength) {
      errors.title = 'Title must be at least 5 charecters.';
      formIsValid = false;
    }

    this.setState({errors});

    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if (!this.courseFormValid()) {
      return;
    }

    this.setState({'saving': true});
    this.props.actions.
    saveCourse(this.state.course).
    then(() => {
      this.setState({'saving': true});
      toastr.success('Course Saved.');
      this.context.router.push('/courses');
    }).
    catch((error) => {
      toastr.error(error);
      this.setState({'saving': false});
    });
  }

  render() {
    return (
      <div className={'CoursePage'}>
        <h1>Manage Course</h1>
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          allAuthors={this.props.allAuthors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          loading={this.state.saving}
          />
      </div>
    );
  }
}

CoursePage.propTypes = {
  'course': PropTypes.object.isRequired,
  'allAuthors': PropTypes.array.isRequired,
  'actions': PropTypes.object.isRequired
};

CoursePage.contextTypes = {
  'router': PropTypes.object.isRequired
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    'actions': bindActionCreators(courseActions, dispatch)
  };
},
  mapStateToProps = function mapStateToProps(state, ownProps) {
    const authorsFormattedForDDL = state.authorReducer.map((author) => ({
      'value': author.id,
      'text': `${author.firstName} ${author.lastName}`
    })),
      courseId = ownProps.params.id;

    let course = null;

    if (courseId) {
      const firstCourseFromFiltered = 0;

      course = state.courseReducer.
        filter((courseInStore) =>
          courseInStore.id === courseId)[firstCourseFromFiltered];
    } else {
      course = {
        'id': '',
        'title': '',
        'watchHref': '',
        'authorId': '',
        'length': '',
        'category': ''
      };
    }

    return {
      course,
      'allAuthors': authorsFormattedForDDL
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);