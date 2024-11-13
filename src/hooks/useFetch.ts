import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>;
  isLoading: boolean;
  error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, controller);

        if (!response.ok) {
          throw new Error("Error al obtener la información");
        }

        const jsonData: T = await response.json();
        setData(jsonData);
        setError(null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};
