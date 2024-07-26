# Peachflix

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run the app, you will first need to create an `.env.local` file in the root directory. In there, create the variable `REACT_APP_API_KEY` and set it to your OMDb API key.

Then, run `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tests

tba

## Technical Choices

### Routing

For the simple routing required of this app I chose to use React Router's browser router. With more time I would likely explore other options, both within React Router and other routing libraries, since this is an area I haven't dove into in a while.

### Styling

For simple apps such as this I like to stick with vanilla CSS, in this case a combination of inline style objects and sidecar `.css` files. For something more complex I would likely persue a CSS-in-JS option, such as Emotion or styled-components.
