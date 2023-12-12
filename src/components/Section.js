import React from 'react';

const Section = (props) => {
  const classes = `section section-${props.name}`;
  return (
    <section className={classes}>
      <div className='container'>{props.children}</div>
    </section>
  );
};

export default Section;
