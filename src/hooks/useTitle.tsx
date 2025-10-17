import { useEffect } from "react";

export const useTitle = (title: string) => {

    useEffect(() => {
        document.title = title ? `${title} - Codebooks` : 'Codebooks - Online Coders Bookstore';
    }, [title]);

  return null;
}