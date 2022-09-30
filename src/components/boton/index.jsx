import React from 'react'
import Button from 'react-bootstrap/Button';
import "./styles.css"

function TypesExample({children, url}) {
  return (
    <>
      <Button href={url} variant="primary" target="_blank" rel="noreferrer">
        {children}
      </Button>{' '}
    </>
  );
}

export default TypesExample;