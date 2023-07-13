## Real States 

The data is currently being sourced from a JSON file, serving as a 'fake database.' The main entry point is the `index.jsx` file, responsible for rendering a series of preview cards (using the 'Card Preview' component).

The `Card Preview` component serves as a child component, responsible for rendering each property's data, including its images.

## Real States Detail

The `Real States Detail` module is designed with modularity in mind to ensure code clarity. It consists of the following files and components:

- `index.jsx`: This component acts as the parent component and receives properties from the aforementioned JSON file. It displays the data in two distinct components, namely `AboutProperty` and `Buy`.

- `Buy.jsx`: This component is responsible for displaying the information in a floating window that remains constantly visible. It also includes a button to facilitate property purchase.

- `AboutProperty.jsx`: This component displays detailed information about the property. It further renders the following components:
  - `Detail.jsx`
  - `Financials.jsx` --> This component includes both charts and tables related to property financials. 
  The charts are implemented using Chart.js (in GraphicIncome.jsx), a popular JavaScript library for creating interactive charts and graphs. The tables are implemented using DataTable (in Tableincome.jsx), a library for displaying and managing tabular data in a React application.
  - `Documents.jsx`


