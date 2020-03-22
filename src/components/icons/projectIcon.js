import React from 'react';
import PropTypes from 'prop-types';
import {
    GitHubIcon,
    ExternalIcon,
} from '../icons';

const ProjectIcon = ({ name }) => {
    switch (name) {
        case 'GitHub':
            return <GitHubIcon />;
        case 'External':
            return <ExternalIcon />;
        default:
            return <GitHubIcon />;
    }
};

ProjectIcon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ProjectIcon;