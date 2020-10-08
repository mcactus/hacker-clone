import React from 'react';

const SourceLink = props => {
  const { url } = props;

  return !!url ? (<a
    href={url}
    target='_blank'
    rel="noopener noreferrer"
    className='d-inline mr-2 link-light text-uppercase'
    title='Read on source'>
    Read on source
  </a>) : '';
}

export default SourceLink;