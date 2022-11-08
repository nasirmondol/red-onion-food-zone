import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default Loading;