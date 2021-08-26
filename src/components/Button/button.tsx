/**
 * 
 * Button组件需求：
 * 1.不同的按钮类型;
 * 2.不同的按钮大小;
 * 3.不可用状态;
 * 
 * furthermore:
 * loading状态
 * 
 */
import React, { FC } from 'react';
import classNames from 'classnames';
import { LIB_NAME } from '../../common/constants';

// enum ButtonType {
//     default = 'default',
//     primary = 'primary',
//     danger = 'danger',
//     link = 'link'
// }

// enum ButtonSize {
//     large = 'large',
//     small = 'small',
// }

interface ButtonBaseProps {
    className?: string,
    btnType?: 'default' | 'primary' | 'danger' | 'link',
    size?: 'large' | 'small',
    disabled?: boolean,
    href?: string
}

const classPrefix = `${LIB_NAME}-button`;

const Button: FC<ButtonBaseProps> = ({
    className,
    href,
    btnType,
    children
}) => {
    const classname = classNames(classPrefix, className);
    return btnType === 'link' ? <a className={classname} href={href}>{children}</a> : <button className={classname}>{children}</button>
}

export default Button;