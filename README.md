# Roei-movie-app

# Roei Katabi

# Basic Info -
The app main libraries:
`react-infinite-scroll-component` - manage the infinite scroll.
`fontawesome` - applications icons.

# Components - 

## MovieCard -
Displays the poster for the movie.
When hovered on it makes a cool looking effect,
and show's that it's clickable.
When clicked, opens up the Modal component.

### Movies Container -
Using the Infinity scroll component to fetch data for the next page
as the user scrolls down,
passes down the movie data and renders a MovieCard component for it.

#### Navbar - 
A simple navbar with no functionality, only to show the name of the app creator.

##### Modal - 
When a MovieCard component is clicked, a Modal component pops up so you can see:
1) The Movie title.
2) The Movie Poster.
3) The Movie Overview.
4) A link for a Youtube trailer.
5) A link for the IMDB website with additional info about the movie.

# Future Improvement - 
Investing some time in testing, I'm kinda new to all this world so I need some time to learn how to make tests in React and how it works.
Adding additional features to the app like:
1) Search option.
2) Adding to favorites.
3) Favorites section.
4) Categories.

# Known Bugs - 
Sometimes the styling can go a little bit crazy on smaller screens.
plus the rendering on the 'react-infinite-scroll-component' might have some issues since its a third party library.

# Most Difficult - 
1) Styling - 
The styling of the app was the most difficult part for me.
It took me quite a while to figure things out and had to learn to use CSS grid and Media querys to make the app accessible on all screen sizes.
