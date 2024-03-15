import React, { ElementType } from 'react';
import cn from 'clsx';

import styles from './IconButton.module.scss';

export interface IconButtonProps {
    Icon: ElementType;
    iconSize?: number;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    active?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({ Icon, iconSize, active, onClick, className, children }) => {
    const classes = cn(className, styles.button, {
        [styles.active]: active
    });

    return (
        <button
            onClick={onClick}
            className={classes}
        >
            {<Icon size={iconSize ?? 18} />}
            {children && children}
        </button>
    );
};