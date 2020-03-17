import React from 'react';
import PropTypes from 'prop-types';
import {
    GitHubIcon,
    LinkedinIcon,
    TwitterIcon,
} from '../icons';

const FormattedIcon = ({ name }) => {
    switch (name) {
        case 'GitHub':
            return <GitHubIcon />;
        case 'Twitter':
            return <TwitterIcon />;
        case 'Linkedin':
            return <LinkedinIcon />;
        default:
            return <GitHubIcon />;
    }
};

FormattedIcon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default FormattedIcon;