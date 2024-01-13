import { useState } from 'react';

import { Icon } from '@iconify/react';
import { Flex, Menu, Text, UnstyledButton } from '@mantine/core';

import styles from '../../styles.module.css';

export default function MenuNavigationLink() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} shadow="md" position="bottom-start" trigger="click" width={200}>
            <Menu.Target>
                <UnstyledButton c={isOpen ? '#bebedf' : undefined} className={styles.target__button}>
                    <Flex gap={5} align="center">
                        <Text>Теми</Text>
                        <Icon style={{ marginTop: '3px' }} icon="icon-park-solid:down-one" rotate={isOpen ? 2 : 0} />
                    </Flex>
                </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item leftSection={<Icon icon="mdi:temperature" width={20} height={20} />}>Температура</Menu.Item>
                <Menu.Item leftSection={<Icon icon="fluent-mdl2:precipitation" width={20} height={20} />}>Опади</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
