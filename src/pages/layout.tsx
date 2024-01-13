import { Outlet } from 'react-router-dom';

import Header from '@/ui/Header';
import Page from '@/ui/Page';
import { Group, Stack } from '@mantine/core';

export default function AppLayout({ children }: { children?: React.ReactNode }) {
    return (
        <Group align="flex-start" justify="flex-start" mih={'100vh'}>
            <Stack gap={0} h={'100vh'} w={'100%'} pos={'relative'}>
                <Header />
                <Page>{children || <Outlet />}</Page>
            </Stack>
        </Group>
    );
}
