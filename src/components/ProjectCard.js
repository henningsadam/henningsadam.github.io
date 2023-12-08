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
    <li class='project card'>
      <div class='card-img'>
        <img src={screenshotImageUrl} alt='' />
      </div>
      <div class='card-content'>
        <div class='card-body'>
          <p class='card-title'>
            {name}
            <span class='tag tag-type'>{type}</span>
          </p>
          <p class='card-description'>{description}</p>
        </div>
        <div class='tags'>
          {tags.map((tag) => (
            <span class='tag tag-language'>{tag}</span>
          ))}
        </div>
        <div class='card-actions'>
          <a
            href={appUrl}
            target='_blank'
            rel='noreferrer'
            class='btn btn-primary'
          >
            Open
            <ion-icon class='btn-icon' name='open-outline'></ion-icon>
          </a>
          <a
            href={githubUrl}
            target='_blank'
            rel='noreferrer'
            class='btn btn-secondary'
          >
            View Source
            <ion-icon class='btn-icon' name='logo-github'></ion-icon>
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
