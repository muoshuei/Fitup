
import Feature from "./components/Feature/Feature";
import HomePage from "./components/HomePage/HomePage";
import HomeFitup from "./components/HomeFitup/HomeFitup"
import ChangeInfo from "./components/Info/ChangeInfo";
import MyProgram from "./components/MyProgram/MyProgram";
import ProgramNavPage from "./components/Programs/ProgramNavPage/ProgramNavPage";
import ProgramsPage from "./components/Programs/ProgramsPage/ProgramsPage";
import MyInfo from "./components/Info/MyInfo";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import AbsMainPage from "./components/StaticPages/Abs/AbsMainPage";
import ArmMainPage from "./components/StaticPages/Arm/ArmMainPage";
import ChestMainPage from "./components/StaticPages/Chest/ChestMainPage";
import LegMainPage from "./components/StaticPages/Leg/LegMainPage";
import ShoulderMainPage from "./components/StaticPages/Shoulder/ShoulderMainPage";
import TrainWrapper from "./components/Train/TrainWrapper";
import P1ExerciseDetails from './components/DetailPages/Shoulder/P1ExerciseDetails';
import S1ExerciseDetails from './components/DetailPages/Shoulder/S1ExerciseDetails';
import S2ExerciseDetails from './components/DetailPages/Shoulder/S2ExerciseDetails';
import S3ExerciseDetails from './components/DetailPages/Shoulder/S3ExerciseDetails';
import S4ExerciseDetails from './components/DetailPages/Shoulder/S4ExerciseDetails';
import S5ExerciseDetails from './components/DetailPages/Shoulder/S5ExerciseDetails';
import S6ExerciseDetails from './components/DetailPages/Shoulder/S6ExerciseDetails';
import S7ExerciseDetails from './components/DetailPages/Shoulder/S7ExerciseDetails';

import C1ExerciseDetails from './components/DetailPages/Chest/C1ExerciseDetails';
import C2ExerciseDetails from './components/DetailPages/Chest/C2ExerciseDetails';
import C3ExerciseDetails from './components/DetailPages/Chest/C3ExerciseDetails';
import C4ExerciseDetails from './components/DetailPages/Chest/C4ExerciseDetails';
import C5ExerciseDetails from './components/DetailPages/Chest/C5ExerciseDetails';


import H1ExerciseDetails from './components/DetailPages/Arm/Arm1ExerciseDetails';
import H2ExerciseDetails from './components/DetailPages/Arm/Arm2ExerciseDetails';
import H3ExerciseDetails from './components/DetailPages/Arm/Arm3ExerciseDetails';
import H4ExerciseDetails from './components/DetailPages/Arm/Arm4ExerciseDetails';

import B1ExerciseDetails from './components/DetailPages/Abs/Abs1ExerciseDetails';
import B2ExerciseDetails from './components/DetailPages/Abs/Abs2ExerciseDetails';
import B3ExerciseDetails from './components/DetailPages/Abs/Abs3ExerciseDetails';
import B4ExerciseDetails from './components/DetailPages/Abs/Abs4ExerciseDetails';
import B5ExerciseDetails from './components/DetailPages/Abs/Abs5ExerciseDetails';

import L1ExerciseDetails from './components/DetailPages/Leg/L1ExerciseDetails';
import L2ExerciseDetails from './components/DetailPages/Leg/L2ExerciseDetails';
import L3ExerciseDetails from './components/DetailPages/Leg/L3ExerciseDetails';
import L4ExerciseDetails from './components/DetailPages/Leg/L4ExerciseDetails';
import L5ExerciseDetails from './components/DetailPages/Leg/L5ExerciseDetails';
import NotFound from "./pages/NotFound";
import NewChart from "./components/Chart/NewChart";


const routes = [
    {
        path: "/",
        element: <HomeFitup/>
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/train",
        element: <TrainWrapper />
    },
    {
        path: "/action/shoulder",
        element: <ShoulderMainPage />
    },
    {
        path: "/action/chest",
        element: <ChestMainPage />
    },
    {
        path: "/action/arm",
        element: <ArmMainPage />
    },
    {
        path: "/action/abs",
        element: <AbsMainPage />
    },
    {
        path: "/action/leg",
        element: <LegMainPage />
    },
    {
        path: "/program/new",
        element: <ProgramNavPage />
    },
    {
        path: "/program/mine",
        element: <MyProgram />
    },
    {
        path: "/program/:entry",
        element: <ProgramsPage />
    },
    {
        path: "/chart",
        element: <NewChart/>
    },
    {
        path: "/info",
        element: <MyInfo />
    },
    {
        path: "/changeinfo",
        element: <ChangeInfo />
    },
    {
        path: "/action/arm/1",
        element: <H1ExerciseDetails />
    },
    {
        path: "/action/arm/2",
        element: <H2ExerciseDetails/>
    },
    {
        path: "/action/arm/3",
        element: <H3ExerciseDetails />
    },
    {
        path: "/action/arm/4",
        element: <H4ExerciseDetails />
    },
    {
        path: "/action/abs/1",
        element: <B1ExerciseDetails/>
    },
    {
        path: "/action/abs/2",
        element: <B2ExerciseDetails/>
    },
    {
        path: "/action/abs/3",
        element: <B3ExerciseDetails/>
    },
    {
        path: "/action/abs/4",
        element: <B4ExerciseDetails/>
    },
    {
        path: "/action/abs/5",
        element: <B5ExerciseDetails/>
    },
    {
        path: "/action/leg/1",
        element: <L1ExerciseDetails/>
    },
    {
        path: "/action/leg/2",
        element: <L2ExerciseDetails/>
    },
    {
        path: "/action/leg/3",
        element: <L3ExerciseDetails/>
    },
    {
        path: "/action/leg/4",
        element: <L4ExerciseDetails/>
    },
    {
        path: "/action/leg/5",
        element: <L5ExerciseDetails/>
    },
    {
        path: "/action/chest/1",
        element: <C1ExerciseDetails/>
    },
    {
        path: "/action/chest/2",
        element: <C2ExerciseDetails/>
    },
    {
        path: "/action/chest/3",
        element: <C3ExerciseDetails/>
    },
    {
        path: "/action/chest/4",
        element: <C4ExerciseDetails/>
    },
    {
        path: "/action/chest/5",
        element: <C5ExerciseDetails/>
    },
    {
        path: "/action/shoulder/1",
        element: <S1ExerciseDetails/>
    },
    {
        path: "/action/shoulder/2",
        element: <S2ExerciseDetails/>
    },
    {
        path: "/action/shoulder/3",
        element: <S3ExerciseDetails/>
    },
    {
        path: "/action/shoulder/4",
        element: <S4ExerciseDetails/>
    },
    {
        path: "/action/shoulder/5",
        element: <S5ExerciseDetails/>
    },
    {
        path: "/action/shoulder/6",
        element: <S6ExerciseDetails/>
    },
    {
        path: "/action/shoulder/7",
        element: <S7ExerciseDetails/>
    },
    {
        path: "/action/p/1",
        element: <P1ExerciseDetails/>
    },
    {
        path: "/feature",
        element: <Feature/>
    },
    {
        path: "*",
        element: <NotFound />
    }
]

export default routes;