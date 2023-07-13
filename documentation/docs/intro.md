---
sidebar_label: 'Technologies'
sidebar_position: 1
---

# Envwise MVP Technologies
  
  
## Front End  

### The Front-end technologies used in the project 


- **Vite**: Vite is a build tool that serves the React project. It provides fast and efficient development server and build setup.
    
- **React**: React is a popular JavaScript library for building user interfaces. It allows you to create reusable components and efficiently manage the application's state.
    
- **Auth0**: Auth0 is an authentication and authorization platform that provides secure user access and authentication for the application.
    
- **Redux Toolkit**: Redux Toolkit is a library that simplifies the management of state in a React application. It provides a set of utilities to handle common Redux tasks.
    
- **CSS and Sass**: CSS (Cascading Style Sheets) is a styling language used to define the visual appearance of web pages. Sass is a CSS preprocessor that extends CSS with additional features.
    
- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework that provides pre-built CSS classes for rapidly styling your application.
    
- **Axios**: Axios is a popular JavaScript library used for making HTTP requests from the browser. It provides an easy-to-use API for handling AJAX requests.
    
- **Ethers.js**: ethers.js is a JavaScript library for interacting with Ethereum and Ethereum-like blockchains. It allows you to interact with smart contracts and perform blockchain transactions.
    
- **Framer Motion**: Framer Motion is a library that provides a simple and powerful animation API for React applications. It allows you to add motion and animation effects to your user interface.
    
- **React Router DOM**: React Router DOM is a library that provides routing capabilities to your React application. It allows you to define different routes and navigate between them.

- **React Icons**: React Icons is a library that provides a set of popular icon packs as React components. It allows you to easily add icons to your React application.

- **React Data Table**: React Data Table is a library that provides a set of components for displaying and managing tabular data in a React application. It offers features like sorting, filtering, and pagination to enhance data presentation

- **React Chart JS**: React ChartJs is a wrapper library for Chart.js, which is a popular JavaScript library for creating interactive charts and graphs. React ChartJs allows you to use Chart.js functionalities as React components, making it easier to integrate charts into your React application.

  

### Deployment and repository

- **Vercel**: Vercel is a cloud platform for deploying static websites and serverless functions. It provides an easy and seamless deployment process for the project.

- **GitHub**: GitHub is a web-based hosting service that provides version control using Git. It allows you to host your project's source code and collaborate with other developers.

  

#### Here you can find the website's repository and deployment:

  
[Libertum Github](https://github.com/Libertum-Project/Website)

[Envwise Github](https://github.com/Envwise-Project/Website)

  
  
## Carbon Calculator    

The calculator has four sets of questions on consumption: 'Food' (diet, food waste, buying habits), 'Home' (energy type, usage, energy-saving measures), 'Travel' (personal and public transport, flights), and 'Stuff' (consumable purchases). The questions cover various consumption behaviors and offer opportunities for users to explore carbon footprint reduction options. Multiple-choice options are typically provided, with responses adjusting the footprint from average levels. 

  

You can find a more detailed explanation of the document at the following link:

-[https://github.com/Envwise-Project/CarbonCalculator/tree/main/Methology](https://github.com/Envwise-Project/CarbonCalculator/tree/main/Methology)

  

From Python, pandas library is used to make the functions.

  
## CHATGPT (CarbonAI) 

Describe the technology, libraries, API connections/interactions, code structure

  

The code structure is described in the following link:

[https://github.com/Envwise-Project/Website/tree/main/client/src/components/ChatBot](https://github.com/Envwise-Project/Website/tree/main/client/src/components/ChatBot)

  

Libraries: React, Axios

  

In [ChatBot.jsx](https://github.com/Envwise-Project/Website/blob/main/client/src/components/ChatBot/ChatBot.jsx):

We use React and Axios to create the connection with ChatGPT. Within it, we have the option to add previous information to the chat, and we also limit the number of tokens to avoid long responses.

## MARKETPLACE 

### **Real States** 

The data is currently being sourced from a JSON file, serving as a 'fake database.' The main entry point is the `index.jsx` file, responsible for rendering a series of preview cards (using the 'Card Preview' component).

The `Card Preview` component serves as a child component, responsible for rendering each property's data, including its images.

 ### **Real States Detail**

The `Real States Detail` module is designed with modularity in mind to ensure code clarity. It consists of the following files and components:

- `index.jsx`: This component acts as the parent component and receives properties from the aforementioned JSON file. It displays the data in two distinct components, namely `AboutProperty` and `Buy`.

- `Buy.jsx`: This component is responsible for displaying the information in a floating window that remains constantly visible. It also includes a button to facilitate property purchase.

- `AboutProperty.jsx`: This component displays detailed information about the property. It further renders the following components:
  - `Detail.jsx`
  - `Financials.jsx` --> This component includes both charts and tables related to property financials. 
  The charts are implemented using Chart.js (in GraphicIncome.jsx), a popular JavaScript library for creating interactive charts and graphs. The tables are implemented using DataTable (in Tableincome.jsx), a library for displaying and managing tabular data in a React application.
  - `Documents.jsx`


