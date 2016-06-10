import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class CoursesList extends React.Component {
    courseRow (course) {
        return (
            <tr key={course.id}>
                <td><a href={course.watchHref} target="_blank">
                    Watch
                </a></td>
                <td><Link to={`/course/${course.id}`}>
                    {course.title}
                </Link></td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
                <td>{course.length}</td>
            </tr>
        );
    }

    render () {
        return (
            <div className={'CoursesList'}>
                <h1>Courses</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courses.map(this.courseRow)}
                    </tbody>
                </table>
            </div>
        );
    }
}

CoursesList.propTypes = {
    'courses': PropTypes.array.isRequired
};

export default CoursesList;