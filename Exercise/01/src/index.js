import { getDb } from './database';

/* Q1 (*)
  Return the number of movies in the "movies" collection without using array.length
*/
export const getMoviesCount = async () => {
  const db = await getDb();
  return await db.collection('movies').count({});
};

/* Q2 (*)
  Return the first movie with imdb rating = 9.2 and year = 1974.
  Also, use mongodb projections to only get title from mongodb as opposed
  to accessing title property from the object
*/
export const movieRating = async () => { };

/* Q3 (*)
  Return the number of movies written by all these people (exactly these people in this order):
  Roberto Orci
  Alex Kurtzman
  Damon Lindelof
  Gene Roddenberry
*/
export const writersIntersection = async () => { };

/* Q4 (*)
  Return the number of movies written by any of the writers in Q3
*/
export const writersUnion = async () => { };

/* Q5 (*)
  Return the number of movies in which actor is "Jackie Chan"
*/
export const actor = async () => { };

/* Q6 (*)
  Return the number of movies in which actor "Jackie Chan" is second
  in the array "actors"
*/
export const positionalActor = async () => { };

/* Q7 (*)
  Return the first movie with imdb rating greater than or equal to 9.0
  and less than or equal to 9.2
*/
export const comparisonOperator = async () => { };

/* Q8 (*)
  Return the number of movies which have an actual rating opposed to
  being "UNRATED" or having no "rated" field at all
*/
export const trimUnrated = async () => { };

/* Q9 (*)
  Return number of movies in which "tomato" field exists but "tomato.rating" does not
*/
export const unratedByTomato = async () => { };

/* Q10 (*)
  Return number of movies with higher imdb rating >= 9.0 OR
  metacritic >= 90
*/
export const goodMovies = async () => { };

/* Q11 (*)
  Return number of movies where tomato field exists AND
  is equal to null
*/
export const regexSearch = async () => { };

/* Q12 (*)
  Return number of movies where 'Adventure' and 'Action'
  as genres in any order
*/
export const arrayAll = async () => { };

/* Q13 (*)
  Return number of movies that were filmed in exactly 4 countries
*/
export const fieldArraySize = async () => { };

/* Q14 (*)
  Add a field called "myRating" = 90 to the movie "Iron Man 3" in movieDetails collection
*/
export const addField = async () => { };

/* Q15 (*)
  Increment the metacritic rating by 5 for the movie "Gone Girl" with a single query.
  Note: Do not use find() or findOne() to look for the current metacritic rating for "Gone Girl"
*/
export const incrementalUpdate = async () => { };
