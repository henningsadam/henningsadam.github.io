import React from 'react';

const ProjectCard = ({
  name,
  type,
  description,
  appUrl,
  githubUrl,
  screenshotImageUrl,
  tags,
}) => {
  return (
    <li className='project card'>
      <div className='card-img'>
        <img src={screenshotImageUrl} alt='' />
      </div>
      <div className='card-content'>
        <div className='card-body'>
          <p className='card-title'>
            {name}
            <span className='tag tag-type'>{type}</span>
          </p>
          <p className='card-description'>{description}</p>
        </div>
        <div className='tags'>
          {tags.map((tag) => (
            <span className='tag tag-language' key={tag}>{tag}</span>
          ))}
        </div>
        <div className='card-actions'>
          <a
            href={appUrl}
            target='_blank'
            rel='noreferrer'
            className='btn btn-primary'
          >
            Open
            <ion-icon className='btn-icon' name='open-outline'></ion-icon>
          </a>
          <a
            href={githubUrl}
            target='_blank'
            rel='noreferrer'
            className='btn btn-secondary'
          >
            View Source
            <ion-icon className='btn-icon' name='logo-github'></ion-icon>
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
