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

The exact measurements of some margins, padding, spacing, etc. may not be exact because Figma would not allow me to access Dev Mode without being a member of the team.

With more time I would likely go back and refactor the CSS more, mostly to clean it up.

### Movie Search Results

Currently, an API call is performed every time a search is made and a new page of results is navigated to. With more time, a potential optimization is to cache paged results for a particular search so that as a user goes back and forth between pages we do not need to make duplicate API calls. I would clear this cache between search queries to not bog down browser memory.

### Other areas of improvement

A few other things I would improve with more time:

#### Move Info Modal Background

The OMDb API does not return an image such as the one in the mock to use as a background for the modal, so I have just used a solid color. I considered using a high-quality poster image but it seems those are limited to people who contribute monetarily to the API.

#### Movie Plot "Read More" Link

The mocks show the movie plot ending with a "Read More" link. With more time I would implement this to show the "long" version of the plot summary that can be toggled within the OMDb API.

#### Movie Rating

The movie rating on the movie info modal is not implemented. The API does not return a 5-star system rating, so one of the ones it does return (or multiple, to create an aggregate) would need to be translated to the 5-star system. With more time I would implement this, or perhaps let the user set their own rating here that is stored alongside their favorite films.
