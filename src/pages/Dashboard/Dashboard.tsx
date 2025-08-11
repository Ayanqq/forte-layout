import {Layout} from "../../components/Layout.tsx";
import {DashboardHead} from "./DashboardHead.tsx";
import {DashboardMain} from "./DashboardMain.tsx";

export const Dashboard = () => {
    return (
        <Layout>
            <DashboardHead/>
            <DashboardMain/>
        </Layout>
    );
};
