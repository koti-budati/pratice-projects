SELECT DISTINCT COUNT(name) FROM people
  INNER JOIN stars ON stars.person_id = people.id
  INNER JOIN movies ON movies.id = stars.movie_id
  WHERE stars.movie_id IN (
    SELECT DISTINCT stars.movie_id FROM stars
    INNER JOIN movies ON movies.id = stars.movie_id
    INNER JOIN people ON people.id = stars.person_id
    WHERE people.name = "Kevin Bacon" AND people.birth=1958) AND people.name <> "Kevin Bacon";
