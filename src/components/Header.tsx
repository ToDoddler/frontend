import {withErrorBoundary} from "react-error-boundary";
import {ErrorFallback} from "./ErrorFallback.tsx";

export const Header = withErrorBoundary(() => {
    return (
        <>
            <h1>Задачки Kaiten</h1>2
        </>
    );
}, {
    fallback:
        <ErrorFallback/>
});