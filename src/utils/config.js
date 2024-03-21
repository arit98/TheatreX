const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRkZmExZDUzOTI2YzhhNjU4YTViMzc1MGI2ZDFlMyIsInN1YiI6IjY1ZmJjMjJkMDQ3MzNmMDE3ZGU3YjE1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7y_-DuO5Aq7UzBoAufFFhtx-isNoo1FLzuBs4MOtF7E"

export const BASE_URL = "https://api.themoviedb.org/3";

export const headers = {
    Authorization: "bearer " + token,
}