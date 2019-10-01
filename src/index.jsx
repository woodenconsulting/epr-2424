import React from 'react';

import testShape from './testShape';

export default function myStatelessComponent(props) {
  const { test: { foo, bar } } = props;
  return (
    <div>
      {foo} {bar}
    </div>
  );
}

myStatelessComponent.propTypes = {
  test: testShape.isRequired,
};
