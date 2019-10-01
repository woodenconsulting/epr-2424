import PropTypes from 'prop-types';

const testShape = PropTypes.shape({
  foo: PropTypes.string.isRequired,
  bar: PropTypes.string.isRequired,
});

export default testShape;
