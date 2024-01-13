import { Divider, DividerProps } from '@mantine/core';

import styles from './styles.module.css';

export default function AsideDivider(props: DividerProps) {
    return <Divider {...props} className={styles['aside-link__divider']} />;
}
