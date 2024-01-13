import { Link } from 'react-router-dom';

import logoSrc from '@/assets/images/logo.svg';
import { Group, Image } from '@mantine/core';

export default function Header() {
    return (
        <Group px={32}>
            <Link to={'/'}>
                <Image radius="md" src={logoSrc} />
            </Link>
        </Group>
    );
}
