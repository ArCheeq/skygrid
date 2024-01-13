import clsx from 'clsx';

import styles from './styles.module.css';

type ITableRowProps = React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;

export default function TableRow({ className, onClick, ...props }: ITableRowProps) {
    return <tr className={clsx(className, styles.table__row)} style={{ cursor: onClick && 'pointer' }} {...props} />;
}
