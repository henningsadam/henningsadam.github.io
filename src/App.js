import './App.css';
import expenseTrackerImg from './img/screenshots/udemy-expense-tracker.png';
import foodOrderImg from './img/screenshots/udemy-food-order.png';
import blogPostImg from './img/screenshots/udemy-blog-post.png';
import chairRetailerImg from './img/screenshots/udemy-chair-retailer-site.png';
import omnifoodImg from './img/screenshots/udemy-omnifood.png';
import investmentCalcImg from './img/screenshots/udemy-investment-calc.png';
import ticTacToeImg from './img/screenshots/udemy-tic-tac-toe-app.png';
import webComponentsImg from './img/screenshots/udemy-web-components.png';
import profileAvatar from './img/profile/profile-cartoon.png';

function App() {
  return (
    <body>
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
      <main class='main'>
        <section class='section section-hero'>
          <div class='container'>
            <div class='hero'>
              <div class='hero-text-container'>
                <h1>
                  Hi, I'm <span class='hero-name'>Adam Hennings.</span>
                </h1>
              </div>
              <div class='hero-img-container'>
                {/* <img class="hero-img" src="" alt=""> */}
              </div>
            </div>
          </div>
        </section>
        <section class='section section-projects'>
          <div class='container'>
            <h2 class='primary-heading'>Projects</h2>
            <h3 class='subheading'>See below for examples of my work</h3>
            <ul class='projects'>
              <li class='project card'>
                <div class='card-img'>
                  <img src={foodOrderImg} alt='' />
                </div>
                <div class='card-content'>
                  <div class='card-body'>
                    <p class='card-title'>
                      Meal Delivery<span class='tag tag-type'>App</span>
                    </p>
                    <p class='card-description'>
                      This app allows users to browse a resturant's menu,
                      add/edit/remove items from the menu to their cart, and
                      view their cart's subtotal.
                    </p>
                  </div>
                  <div class='tags'>
                    <span class='tag tag-language'>HTML</span>
                    <span class='tag tag-language'>CSS</span>
                    <span class='tag tag-language'>React.js</span>
                  </div>
                  <div class='card-actions'>
                    <a
                      href='https://henningsadam.github.io/udemy-foor-order/'
                      target='_blank'
                      rel='noreferrer'
                      class='btn btn-primary'
                    >
                      Open
                      <ion-icon class='btn-icon' name='open-outline'></ion-icon>
                    </a>
                    <a
                      href='https://github.com/henningsadam/udemy-foor-order'
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

              <li class='project card'>
                <div class='card-img'>
                  <img src={expenseTrackerImg} alt='' />
                </div>
                <div class='card-content'>
                  <div class='card-body'>
                    <p class='card-title'>
                      Expense Tracking<span class='tag tag-type'>App</span>
                    </p>
                    <p class='card-description'>
                      This app allows users manage and report on their expenses.
                    </p>
                  </div>
                  <div class='tags'>
                    <span class='tag tag-language'>HTML</span>
                    <span class='tag tag-language'>CSS</span>
                    <span class='tag tag-language'>React.js</span>
                  </div>
                  <div class='card-actions'>
                    <a
                      href='https://henningsadam.github.io/udemy-expense-tracker/'
                      target='_blank'
                      rel='noreferrer'
                      class='btn btn-primary'
                    >
                      Open
                      <ion-icon class='btn-icon' name='open-outline'></ion-icon>
                    </a>
                    <a
                      href='https://github.com/henningsadam/udemy-expense-tracker'
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

              <li class='project card'>
                <div class='card-img'>
                  <img src={investmentCalcImg} alt='' />
                </div>
                <div class='card-content'>
                  <div class='card-body'>
                    <p class='card-title'>
                      Investment Calculator<span class='tag tag-type'>App</span>
                    </p>
                    <p class='card-description'>
                      Use this app to determine your investment return for a
                      given starting amount, yearly contribution, interest rate
                      and amount of time.
                    </p>
                  </div>
                  <div class='tags'>
                    <span class='tag tag-language'>HTML</span>
                    <span class='tag tag-language'>CSS</span>
                    <span class='tag tag-language'>React.js</span>
                  </div>
                  <div class='card-actions'>
                    <a
                      href='https://henningsadam.github.io/udemy-investment-calc/'
                      target='_blank'
                      rel='noreferrer'
                      class='btn btn-primary'
                    >
                      Open
                      <ion-icon class='btn-icon' name='open-outline'></ion-icon>
                    </a>
                    <a
                      href='https://github.com/henningsadam/udemy-investment-calc'
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

              <li class='project card'>
                <div class='card-img'>
                  <img src={ticTacToeImg} alt='' />
                </div>
                <div class='card-content'>
                  <div class='card-body'>
                    <p class='card-title'>
                      Tic Tac Toe<span class='tag tag-type'>App</span>
                    </p>
                    <p class='card-description'>
                      Two-player game of tic-tac-toe that keeps track each
                      players moves, announces a winner and allows the game to
                      be reset.
                    </p>
                  </div>
                  <div class='tags'>
                    <span class='tag tag-language'>HTML</span>
                    <span class='tag tag-language'>CSS</span>
                    <span class='tag tag-language'>React.js</span>
                  </div>
                  <div class='card-actions'>
                    <a
                      href='https://henningsadam.github.io/udemy-tic-tac-toe/'
                      target='_blank'
                      rel='noreferrer'
                      class='btn btn-primary'
                    >
                      Open
                      <ion-icon class='btn-icon' name='open-outline'></ion-icon>
                    </a>
                    <a
                      href='https://github.com/henningsadam/udemy-tic-tac-toe'
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

              <li class='project card'>
                <div class='card-img'>
                  <img src={blogPostImg} alt='' />
                </div>
                <div class='card-content'>
                  <div class='card-body'>
                    <p class='card-title'>
                      Blog<span class='tag tag-type'>Website</span>
                    </p>
                    <p class='card-description'>
                      Simple blog post page with an area for the article content
                      as well as a sidebar to view related articles.
                    </p>
                  </div>
                  <div class='tags'>
                    <span class='tag tag-language'>HTML</span>
                    <span class='tag tag-language'>CSS</span>
                    <span class='tag tag-language'>React.js</span>
                  </div>
                  <div class='card-actions'>
                    <a
                      href='https://henningsadam.github.io/udemy-styling-practice-blog-post/'
                      target='_blank'
                      rel='noreferrer'
                      class='btn btn-primary'
                    >
                      Open
                      <ion-icon class='btn-icon' name='open-outline'></ion-icon>
                    </a>
                    <a
                      href='https://github.com/henningsadam/udemy-styling-practice-blog-post'
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
              <li class='project card'>
                <div class='card-img'>
                  <img src={chairRetailerImg} alt='' />
                </div>
                <div class='card-content'>
                  <div class='card-body'>
                    <p class='card-title'>
                      Chair Retailer<span class='tag tag-type'>Website</span>
                    </p>
                    <p class='card-description'>
                      Marketing website for a furniture retailer that highlights
                      the brand's values, customer quotes, and catalog of
                      products.
                    </p>
                  </div>
                  <div class='tags'>
                    <span class='tag tag-language'>HTML</span>
                    <span class='tag tag-language'>CSS</span>
                    <span class='tag tag-language'>React.js</span>
                  </div>
                  <div class='card-actions'>
                    <a
                      href='https://henningsadam.github.io/udemy-chair-retailer-website/'
                      target='_blank'
                      rel='noreferrer'
                      class='btn btn-primary'
                    >
                      Open
                      <ion-icon class='btn-icon' name='open-outline'></ion-icon>
                    </a>
                    <a
                      href='https://github.com/henningsadam/udemy-chair-retailer-website'
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

              <li class='project card'>
                <div class='card-img'>
                  <img src={webComponentsImg} alt='' />
                </div>
                <div class='card-content'>
                  <div class='card-body'>
                    <p class='card-title'>
                      Web UI Components<span class='tag tag-type'>Website</span>
                    </p>
                    <p class='card-description'>
                      Sampling of a group of themed web UI components that can
                      be used in a variety of projects.
                    </p>
                  </div>
                  <div class='tags'>
                    <span class='tag tag-language'>HTML</span>
                    <span class='tag tag-language'>CSS</span>
                    <span class='tag tag-language'>React.js</span>
                  </div>
                  <div class='card-actions'>
                    <a
                      href='https://henningsadam.github.io/udemy-component-practice/'
                      target='_blank'
                      rel='noreferrer'
                      class='btn btn-primary'
                    >
                      Open
                      <ion-icon class='btn-icon' name='open-outline'></ion-icon>
                    </a>
                    <a
                      href='https://github.com/henningsadam/udemy-component-practice'
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

              <li class='project card'>
                <div class='card-img'>
                  <img src={omnifoodImg} alt='' />
                </div>
                <div class='card-content'>
                  <div class='card-body'>
                    <p class='card-title'>
                      Omnifood Website<span class='tag tag-type'>Website</span>
                    </p>
                    <p class='card-description'>
                      Website for a fictional AI-powered food delivery and
                      nutrition full with mutiple sections: hero, testimonials,
                      meals, pricing and form to get started.
                    </p>
                  </div>
                  <div class='tags'>
                    <span class='tag tag-language'>HTML</span>
                    <span class='tag tag-language'>CSS</span>
                    <span class='tag tag-language'>React.js</span>
                  </div>
                  <div class='card-actions'>
                    <a
                      href='https://henningsadam.github.io/udemy-omnifood-site/'
                      target='_blank'
                      rel='noreferrer'
                      class='btn btn-primary'
                    >
                      Open
                      <ion-icon class='btn-icon' name='open-outline'></ion-icon>
                    </a>
                    <a
                      href='https://github.com/henningsadam/udemy-omnifood-site'
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
            </ul>
          </div>
        </section>
      </main>
      <footer class='footer'>
        <div class='container'>I'm a footer.</div>
      </footer>
    </body>
  );
}

export default App;