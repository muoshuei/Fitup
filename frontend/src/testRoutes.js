import APITest from "./components/APITest/APITest";
import NewProgramsPage from "./components/Programs/ProgramsPage/NewProgramsPage";
import SpeechTest from "./components/SpeechTest/SpeechTest";

const testRoutes = [
    {
        path: "/newprogram/:entry",
        element: <NewProgramsPage/>
    },
    {
        path: "/apitest",
        element: <APITest/>
    },
    {
        path: "/speechtest",
        element: <SpeechTest/>
    }
];
export default testRoutes;