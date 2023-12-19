import { useEffect, useState } from "react";
import { API_KEY, API_SEARCH } from "../apiInfo";

export function useSearch(inputValue) {

    const [data, setData] = useState([]);
    const [progress, setProgress] = useState(false);

    async function fetchApi(url) {
        setProgress(true);
        const response = await fetch(url);
        const data = await response.json();
        if (data.total_results === 0) {
            alert(`No result for ${inputValue}!`);
        } else {
            setData(data.results);
        }
        setProgress(false);
    }

    useEffect(() => {
        const url = `${API_SEARCH}?${API_KEY}&query=${inputValue}`
        fetchApi(url);
    }, [inputValue]);

    return [data, progress];
}