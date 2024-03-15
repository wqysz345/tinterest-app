import cn from 'clsx';
import React from 'react';

import styles from './Typography.module.scss';

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
    className?: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'lead' | 'paragraph' | 'small';
    children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ className, variant = 'paragraph', children }, ...props) => {
    const classes = cn(
        className,
        variant === 'h1' && styles.heading,
        variant === 'h2' && styles.heading2,
        variant === 'h3' && styles.heading3,
        variant === 'h4' && styles.heading4,
        variant === 'h5' && styles.heading5,
        variant === 'h6' && styles.heading6,
        variant === 'lead' && styles.lead,
        variant === 'paragraph' && styles.paragraph,
        variant === 'small' && styles.small
    );

    let template;

    switch (variant) {
        case "h1":
            template = React.createElement(
                'h1',
                {
                    ...props,
                    className: classes
                },
                children
            );
            break;
        case "h2":
            template = React.createElement(
                'h2',
                {
                    ...props,
                    className: classes
                },
                children
            );
            break;
        case "h3":
            template = React.createElement(
                'h3',
                {
                    ...props,
                    className: classes
                },
                children
            );
            break;
        case "h4":
            template = React.createElement(
                'h4',
                {
                    ...props,
                    className: classes
                },
                children
            );
            break;
        case "h5":
            template = React.createElement(
                'h5',
                {
                    ...props,
                    className: classes
                },
                children
            );
            break;
        case "h6":
            template = React.createElement(
                'h6',
                {
                    ...props,
                    className: classes
                },
                children
            );
            break;
        case "lead":
            template = React.createElement(
                'p',
                {
                    ...props,
                    className: classes
                },
                children
            );
            break;
        case "paragraph":
            template = React.createElement(
                'p',
                {
                    ...props,
                    className: classes
                },
                children
            );
            break;
        case "small":
            template = React.createElement(
                'small',
                {
                    ...props,
                    className: classes
                },
                children
            );
            break;
        default:
            template = React.createElement(
                'p',
                {
                    ...props,
                    className: classes
                },
                children
            );
            break;
    }

    return template;
};