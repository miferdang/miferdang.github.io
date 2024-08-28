import { ImageLoaderProps } from "next/image";

// Utility - nextjs image loader in cms server
export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};
