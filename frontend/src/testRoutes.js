import APITest from "./components/APITest/APITest";
import SpeechTest from "./components/SpeechTest/SpeechTest";
import Chart from "./components/Chart/Chart";
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
        path: "/oldchart",
        element: <Chart/>
    }
];
export default testRoutes;