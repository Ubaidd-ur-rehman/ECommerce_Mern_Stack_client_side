import { useEffect, useState } from "react";
import { fetchDataFromApi } from '../../utils/api';

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        const makeApiCall = async () => {
            try {
                const res = await fetchDataFromApi(endpoint);
                setData(res);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error as needed, e.g., set an error state
            }
        };

        makeApiCall();
    }, [endpoint]);

    return { data };
};

export default useFetch;
