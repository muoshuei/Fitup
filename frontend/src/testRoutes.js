import APITest from "./components/APITest/APITest";
import NewChart from "./components/Chart/NewChart";
import SpeechTest from "./components/SpeechTest/SpeechTest";

const testRoutes = [
    {
        path: "/apitest",
        element: <APITest/>
    },
    {
        path: "/speechtest",
        element: <SpeechTest/>
    },
    {
        path: "/newchart",
        element: <NewChart/>
    }
];
export default testRoutes;