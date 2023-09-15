import APITest from "./components/APITest/APITest";
import MyProgram from "./components/MyProgram/MyProgram";
import SpeechTest from "./components/SpeechTest/SpeechTest";

const testRoutes = [
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