import APITest from "./components/APITest/APITest";
import SpeechTest from "./components/SpeechTest/SpeechTest";
import Chart from "./components/Chart/Chart";
import DetailPage from "./components/DetailPages/DetailPage";
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
    },  
    {
        path: "/testdetail",
        element: <DetailPage/>
    }
];
export default testRoutes;