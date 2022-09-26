import React from 'react'
import Button from 'react-bootstrap/Button';
import "./styles.css"

function TypesExample({children}) {
  return (
    <>
      <Button variant="primary">
        {children}
      </Button>{' '}
    </>
  );
}

export default TypesExample;