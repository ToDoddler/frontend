// @flow
import Layout, {Content} from "antd/es/layout/layout";

interface Props {
    header: React.ReactNode;
    children?: React.ReactNode;
}

export const TasksLayout = (
    {header, children}: Props
) => {
    return (
        <Layout>
            {header}
            <Content>{children}</Content>
        </Layout>
    );
};