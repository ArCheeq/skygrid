import Header from '@/ui/Navbar/components/Header';
import { Stack } from '@mantine/core';

import styles from '@/ui/Navbar/styles.module.css';

export default function Sidebar() {
    return (
        <Stack className={styles.sidebar__wrapper}>
            <Stack py={24} gap={24}>
                <Header />
                {/*<Navigation />*/}
            </Stack>
        </Stack>
    );
}
