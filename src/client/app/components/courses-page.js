import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import courseActions from '../actions/course-actions';

class CoursesPage extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            'course': {'title': ''}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onTitleChange (event) {
        const course = this.state.course;

        course.title = event.target.value;
        this.setState({course});
    }

    onSaveClick () {
        this.props.createCourse(this.state.course);
    }

    courseRow (course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render () {
        return (
            <div className={'CoursesPage'}>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.onSaveClick} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    'courses': PropTypes.array.isRequired,
    'createCourse': PropTypes.func.isRequired
};

const mapDispatchToProps = function mapDispatchToProps (dispatch) {
    return {
        'createCourse': (course) => dispatch(courseActions.createCourse(course))
    };
},
mapStateToProps = function mapStateToProps (state) {
    return {
        'courses': state.courseReducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);