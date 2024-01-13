import { Outlet } from 'react-router-dom';

import { Stack } from '@mantine/core';

export default function AuthLayout() {
    return (
        <Stack gap={0} bg={'gray.2'}>
            <Stack p={24} mih={'100vh'} align="center" justify="center">
                <Outlet />
            </Stack>
        </Stack>
    );
}
