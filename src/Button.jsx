import React from "react";
import { cva } from "class-variance-authority";
import css from './style.module.css';
const button = cva(css.base, {
    variants: {
        variant: {
            primary: css.primary,
            secondary: css.secondary,
            success: css.success,
            danger: css.danger
        }, //intent->default classes primary,secondary
        size: {
            small: css.small,
            medium: css.medium,
            large: css.large
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "medium"
    }
})
// eslint-disable-next-line react/prop-types
const Button = ({ value, variant, className, as, href, size, ...props }) => {
    if (size) {
        if (size === "sm") {
            size = "small";
        }
        if (size === "lg") {
            size = "large"
        }
        if (size === "medium") {
            size = "medium"
        }
    }
    if (as === "input") {
        return <input className={button({ variant, size, className })} value={value} {...props} />
    }
    if (href) {
        return <a href={href} role="button" className={button({ variant, size, className })} {...props}>{value}</a>
    }
    return (
        <>
            <button className={button({ variant, size, className })}  {...props}>{value}</button>
        </>
    )
};

export default Button;
