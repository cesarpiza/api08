import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../apiInfo";

export function useGetTopRated() {

    const [movieTop, setMovieTop] = useState([]);
    const [progress, setProgress] = useState(false);

    async function fetchApi(url) {
        setProgress(true);
        const response = await fetch(url);
        const data = await response.json();
        setMovieTop(data.results);
        setProgress(false);
    }

    useEffect(() => {
        const url = `${API_URL}top_rated?${API_KEY}`;
        fetchApi(url);
    }, []);

    return [movieTop, progress]
}