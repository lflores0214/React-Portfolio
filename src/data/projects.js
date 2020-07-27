export const projects = {
  commerce: {
    imgSrc: "../assets/ECSS.png",
    title: "E-Commerce",
    stack:
      "React.js, Redux, Redux-Saga, React-Router, Firebase, Stripe, Reselect",
    description:
      "A clothing e-commerce site where users can register, sign in, add items to their cart and checkout using Stripe's checkout component",
    bullets: [],
    links: {
      app: "https://lf-commerce.herokuapp.com/",
      code: "https://github.com/lflores0214/e-commerce",
    },
  },
  wlj: {
    imgSrc: "../assets/WLJSS.png",
    title: "Weight Lifting Journal",
    stack:
      "Node.js, Express.js,Knex.js, SQLite3, JSON WebToken, Jest, Supertest ",
    description:
      "Weight Lifting Journal is a web-based application that allows users to keep track of their weight lifting journey.",
    bullets: [
      "Delivered a RESTful Web-based API using Node.js, Express, and SQLite3, that allows users to register, login and perform CRUD operations",
      "Used JSON WebToken for authentication and security. Added restricted middleware to routes, to prevent unauthorized access to endpoints",
      "Built unit tests using Jest and Supertest",
    ],
    links: {
      app: "https://weight-journal.now.sh/",
      code: "https://github.com/Weight-Lifting-Journal-bw-7/back-end",
    },
  },
  plantParenthood: {
    imgSrc: "../assets/PPSS.png",
    title: "Plant Parenthood",
    stack: "React.js, Redux, Redux-Thunk, Styled-Components, React-Router-Dom ",
    description:
      "Plant Parenthood is a front-end React application to help users keep track of when to water their plants.",
    bullets: [
      "Built out routes and private routes using react-router-dom",
      "Implemented Redux for state management",
      "Used AXIOS to allow user to perform full CRUD operations, utilizing a 3rd party API",
    ],
    links: {
      app: "https://front-end-two-hazel.now.sh/",
      code: "https://github.com/lflores0214/Front-end-1",
    },
  },
  veganMeets: {
    imgSrc: "../assets/VMSS.png",
    title: "VeganMeets",
    stack: "React.js, Redux, Redux-Thunk, Styled-Components, React-Router-Dom",
    description:
      "Vegan Meets is a front-end React application to help users find vegetarian and vegan friendly restaurants ",
    bullets: [
      "Built login and register components using Formik and yup for form validation",
      "Used AXIOS to allow user to perform full CRUD operations, utilizing a 3rd party API",
      "Implemented search functionality",
    ],
    links: {
      app: "https://sharp-babbage-30c7ac.netlify.app/",
      code: "https://github.com/lflores0214/FE",
    },
  },
};
