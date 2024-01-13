import { PropsWithChildren } from 'react';

import { ScrollArea, Stack } from '@mantine/core';

import styles from './styles.module.css';

export default function Page({ children }: PropsWithChildren) {
    return (
        <Stack gap={0} className={styles.page__wrapper}>
            <ScrollArea.Autosize>{children}</ScrollArea.Autosize>
        </Stack>
    );
}
