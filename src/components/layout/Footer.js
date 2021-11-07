import React from 'react';
import PropTypes from 'prop-types';

import { Container, } from '@material-ui/core';

export default function Footer(props) {
    return (
        <footer className="footer py-8 py-md-11 border-multicolor" style={{ backgroundColor: '#094876', paddingTop: 50, paddingBottom: 50, marginTop: 100 }}>

        </footer>
    );
}

Footer.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};