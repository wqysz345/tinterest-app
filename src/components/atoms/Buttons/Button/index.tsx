import cn from 'clsx';

import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children , ...props}) => {
    return (
        <button {...props} className={cn(className, styles.button)}>
            {children}
        </button>
    );
};