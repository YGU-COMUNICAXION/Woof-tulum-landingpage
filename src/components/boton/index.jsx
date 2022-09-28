import React from 'react'
import Button from 'react-bootstrap/Button';
import "./styles.css"

function TypesExample({children, url}) {
  return (
    <>
      <Button href={url} variant="primary">
        {children}
      </Button>{' '}
    </>
  );
}

export default TypesExample;