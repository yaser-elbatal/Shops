import PropTypes from "prop-types";

const nodeType = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.object,
  PropTypes.bool,
  PropTypes.func,
]);

export { nodeType };
