import React from 'react';
import BookCard from './BookCard.jsx';
import GVDCover from "../../assets/BookCovers/GVDCoverResized.jpg";
import BlinkingCover from "../../assets/BookCovers/CuentoCover.jpg";
import BobbyCover from "../../assets/BookCovers/BobbyCoverResized.jpg";


const BookList = () => {
  var gvdSumm = "You've heard of a winemaker, but have you heard of a grapemaker? This story is the untold story of wine -- the story of the immigrant field laborers that work the vineyards and grow the grapes. Told from the perspective of an American woman who spent her mid-twenties working in vineyards alongside Mexican coworkers, The Grapevine Diaries is a series of anecdotes, journal entries, poems and mini-essays that provide a unique and candid insight into agriculture, immigration, and a job that goes beneath the skin and into the sticky juice within";
  var blinkingSumm = "A memory-inspired short story written in English and Spanish. Explores themes of religion, childhood and the transformation of a story through the filters of time and language."
  var bobbySum = "A short short story inspired by real life, a love for bikes and the streets of San Francisco."

  const books = [
  [GVDCover, gvdSumm, 'grapevinediaries', 'The Grapevine Diaries'],
  [BlinkingCover, blinkingSumm, 'cuento', 'Story Twice Told // Cuento Dos Veces Contado'],
  [BobbyCover, bobbySum, 'bobbyandshiloh', 'Bobby & Shiloh Save The Night']
]

  return books.map((book) => <BookCard
  cover={book[0]}
  summary={book[1]}
  path={book[2]}
  title={book[3]}
  />)

}
export default BookList;