import mealOrderImg from '../img/screenshots/udemy-food-order.jpg';
import expenseTrackingImg from '../img/screenshots/udemy-expense-tracker.jpg';
import investmentCalculatorImg from '../img/screenshots/udemy-investment-calc.jpg';
import ticTacToeImg from '../img/screenshots/udemy-tic-tac-toe-app.jpg';
import blogImg from '../img/screenshots/udemy-blog-post.jpg';
import chairRetailerImg from '../img/screenshots/udemy-chair-retailer-site.jpg'
import webComponentsImg from '../img/screenshots/udemy-web-components.jpg'
import omnifoodImg from '../img/screenshots/udemy-omnifood.jpg'

const projects = [
  {
    name: 'Meal Delivery',
    description:
      'This app allows users to browse a resturant\'s menu, add/edit/remove items from the menu to their cart, and view their cart\'s subtotal.',
    type: 'App',
    tags: ['HTML', 'CSS', 'React'],
    urls: {
      screenshot: mealOrderImg,
      source: 'https://github.com/henningsadam/udemy-foor-order',
      demo: 'https://henningsadam.github.io/udemy-foor-order/',
    },
  },
  {
    name: 'Expense Tracking',
    description: 'This app allows users manage and report on their expenses.',
    type: 'App',
    tags: ['HTML', 'CSS', 'React'],
    urls: {
      screenshot: expenseTrackingImg,
      source: 'https://github.com/henningsadam/udemy-expense-tracker',
      demo: 'https://henningsadam.github.io/udemy-expense-tracker/',
    },
  },
  {
    name: 'Investment Calculator',
    description: 'Use this app to determine your investment return for a given starting amount, yearly contribution, interest rate and amount of time.',
    type: 'App',
    tags: ['HTML', 'CSS', 'React'],
    urls: {
      screenshot: investmentCalculatorImg,
      source: 'https://github.com/henningsadam/udemy-investment-calc',
      demo: 'https://henningsadam.github.io/udemy-investment-calc/',
    },
  },
  {
    name: 'Tic Tac Toe',
    description: 'Two-player game of tic-tac-toe that keeps track each players moves, announces a winner and allows the game to be reset.',
    type: 'App',
    tags: ['HTML', 'CSS', 'React'],
    urls: {
      screenshot: ticTacToeImg,
      source: 'https://github.com/henningsadam/udemy-tic-tac-toe',
      demo: 'https://henningsadam.github.io/udemy-tic-tac-toe/',
    },
  },
  {
    name: 'Blog',
    description: 'Simple blog post page with an area for the article content as well as a sidebar to view related articles.',
    type: 'Website',
    tags: ['HTML', 'CSS'],
    urls: {
      screenshot: blogImg,
      source:
        'https://github.com/henningsadam/udemy-styling-practice-blog-post',
      demo: 'https://henningsadam.github.io/udemy-styling-practice-blog-post/',
    },
  },
  {
    name: 'Chair Retailer',
    description: 'Marketing website for a furniture retailer that highlights the brand\'s values, customer quotes, and catalog of products.',
    type: 'Website',
    tags: ['HTML', 'CSS'],
    urls: {
      screenshot: chairRetailerImg,
      source: 'https://github.com/henningsadam/udemy-chair-retailer-website',
      demo: 'https://henningsadam.github.io/udemy-chair-retailer-website/',
    },
  },
  {
    name: 'Web UI Components',
    description: 'Sampling of a group of themed web UI components that can be used in a variety of projects.',
    type: 'Website',
    tags: ['HTML', 'CSS'],
    urls: {
      screenshot: webComponentsImg,
      source: 'https://github.com/henningsadam/udemy-component-practice',
      demo: 'https://henningsadam.github.io/udemy-component-practice/',
    },
  },
  {
    name: 'Omnifood',
    description: 'Website for a fictional AI-powered food delivery and nutrition full with mutiple sections: hero, testimonials, meals, pricing and form to get started.',
    type: 'Website',
    tags: ['HTML', 'CSS'],
    urls: {
      screenshot: omnifoodImg,
      source: 'https://github.com/henningsadam/udemy-omnifood-site',
      demo: 'https://henningsadam.github.io/udemy-omnifood-site/',
    },
  },
];

export default projects;