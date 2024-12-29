import {withErrorBoundary} from "react-error-boundary";
import {TasksLayout} from "./components/Layout.tsx";
import { Header } from "./components/Header.tsx";
import {ErrorFallback} from "./components/ErrorFallback.tsx";

export const App = withErrorBoundary(() => {
    return <TasksLayout
        header={<Header/>}
    ></TasksLayout>;
}, {
    fallback: <ErrorFallback/>
});

