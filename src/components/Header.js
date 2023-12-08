import React from 'react'
import profileAvatar from '../img/profile/profile-cartoon.png'

const Header = () => {
  return (
    <header class='header'>
        <div class='container'>
          <div class='header-container'>
            <img
              src={profileAvatar}
              class='profile-img'
              alt='Cartoon avatar of Adam Hennings'
            />
            <div class='social-profiles'>
              <a
                href='https://www.linkedin.com/in/henningsadam/'
                class='social-icon-link'
                target='_blank'
                rel='noreferrer'
              >
                <ion-icon
                  name='briefcase-outline'
                  class='social-icon'
                ></ion-icon>
              </a>
              <a
                href='https://github.com/henningsadam'
                class='social-icon-link'
                target='_blank'
                rel='noreferrer'
              >
                <ion-icon
                  name='code-working-outline'
                  class='social-icon'
                ></ion-icon>
              </a>
              <a
                href='https://connect.garmin.com/modern/profile/41524223-1576-4e81-b67b-0748a75aa1ea'
                class='social-icon-link'
                target='_blank'
                rel='noreferrer'
              >
                <ion-icon name='fitness-outline' class='social-icon'></ion-icon>
              </a>
              <a
                href='https://open.spotify.com/user/hennings.adam'
                class='social-icon-link'
                target='_blank'
                rel='noreferrer'
              >
                <ion-icon name='headset-outline' class='social-icon'></ion-icon>
              </a>
              <a
                href='https://www.goodreads.com/user/show/4769977-adam'
                class='social-icon-link'
                target='_blank'
                rel='noreferrer'
              >
                <ion-icon name='book-outline' class='social-icon'></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header