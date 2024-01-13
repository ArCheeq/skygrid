import { Icon } from '@iconify/react/dist/iconify.js';
import { Group, Stack, Text, TextInput, UnstyledButton } from '@mantine/core';

import NavigationLink from './components/MenuNavigationLink';

import styles from './styles.module.css';

export default function Header() {
    return (
        <Stack gap={0} className={styles.header__wrapper}>
            <Stack gap={0} className={styles.header__content}>
                {/* Header */}
                <Group gap={24} px={32} py={18} wrap="nowrap">
                    {/* LEFT SIDE */}
                    <Group gap={0}>
                        <Text span size={'32px'} fw={700} variant="subtle" c={'white'}>
                            SkyGrid
                        </Text>

                        <Group gap={15} ml={100}>
                            <NavigationLink />
                            <UnstyledButton className={styles.target__button}>Ресурси</UnstyledButton>
                            <UnstyledButton className={styles.target__button}>Кліматична історія регіону</UnstyledButton>
                        </Group>
                    </Group>

                    {/* RIGHT SIDE */}
                    <Group gap={0} ml={'auto'}>
                        <TextInput w={300} placeholder="Пошук теми, діаграми чи статті" rightSection={<Icon width={20} height={20} icon={'tabler:search'} />} />
                    </Group>
                </Group>

                {/* Context Navigation */}
            </Stack>
        </Stack>
    );
}
