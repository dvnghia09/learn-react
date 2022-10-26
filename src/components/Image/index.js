import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import image from '~/assets/image';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallack, setFallack] = useState('');

    const handleError = () => {
        setFallack(image.noImage);
    };

    return <img ref={ref} src={fallack || src} alt={alt} {...props} onError={handleError} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
