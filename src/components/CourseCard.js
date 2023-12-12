import React from 'react';

const CourseCard = ({
  name,
  type,
  description,
  certificateUrl,
  courseUrl,
  imageUrl,
  tags,
}) => {
  return (
    <li className='project card'>
      <div className='card-img'>
        <img src={imageUrl} alt='' />
      </div>
      <div className='card-content'>
        <div className='card-body'>
          <p className='card-title'>
            {name}
            <span className='tag tag-type'>{type}</span>
          </p>
          {/* <p className='card-description'>{description}</p> */}
        </div>
        {/* <div className='tags'>
          {tags.map((tag) => (
            <span className='tag tag-language' key={tag}>{tag}</span>
          ))}
        </div> */}
        <div className='card-actions'>
          <a
            href={certificateUrl}
            target='_blank'
            rel='noreferrer'
            className='btn btn-primary'
          >
            View
            <ion-icon className='btn-icon' name='open-outline'></ion-icon>
          </a>
          <a
            href={courseUrl}
            target='_blank'
            rel='noreferrer'
            className='btn btn-secondary'
          >
            Course Details
            {/* <ion-icon className='btn-icon' name='logo-github'></ion-icon> */}
          </a>
        </div>
      </div>
    </li>
  );
};

export default CourseCard;
