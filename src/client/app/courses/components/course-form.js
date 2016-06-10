import React, {PropTypes} from 'react';
import SelectInput from '../../common/components/select-input';
import TextInput from '../../common/components/text-input';

const CourseForm =
    ({course, allAuthors, onSave, onChange, loading, errors}) => {
        let saveBtnValue = 'Save';

        if (loading) {
            saveBtnValue = 'Saving...';
        }

        return (
            <form>
                <TextInput
                    name="title"
                    label="Title"
                    value={course.title}
                    onChange={onChange}
                    error={errors.title}>
                </TextInput>
                <SelectInput
                    name="authorId"
                    label="Author"
                    onChange={onChange}
                    defaultOption="Select Author"
                    value={course.authorId}
                    error={errors.authorId}
                    options={allAuthors}>
                </SelectInput>
                <TextInput
                    name="category"
                    label="Category"
                    value={course.category}
                    onChange={onChange}
                    error={errors.category}>
                </TextInput>
                <TextInput
                    name="length"
                    label="Length"
                    value={course.length}
                    onChange={onChange}
                    error={errors.length}>
                </TextInput>
                <input
                    type="submit"
                    disabled={loading}
                    value={saveBtnValue}
                    className="btn btn-primary"
                    onClick={onSave} />
            </form>
        );
};

CourseForm.propTypes = {
    'course': PropTypes.object.isRequired,
    'allAuthors': PropTypes.arrayOf(PropTypes.object).isRequired,
    'onSave': PropTypes.func.isRequired,
    'onChange': PropTypes.func.isRequired,
    'loading': PropTypes.bool,
    'errors': PropTypes.object
};

export default CourseForm;