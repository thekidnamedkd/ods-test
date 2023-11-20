import classNames from 'classnames';
import type React from 'react';

import { type HTMLAttributes } from 'react';
import { type ResponsiveAttribute, type ResponsiveAttributeClassMap } from '../../../types';
import { responsiveUtils } from '../../../utils';
import { Icon, type IconType } from '../../icon';

type AvatarIconSize = 'sm' | 'md' | 'lg';
type AvatarIconVariant = 'neutral' | 'primary' | 'info' | 'success' | 'warning' | 'critical';

export interface IAvatarIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: AvatarIconSize;
    variant?: AvatarIconVariant;
    responsiveSize?: ResponsiveAttribute<AvatarIconSize>;
    icon: IconType;
}

const avatarVariantToIconClassNames: Record<AvatarIconVariant, string> = {
    neutral: 'text-neutral-400',
    primary: 'text-primary-400',
    critical: 'text-critical-600',
    info: 'text-info-600',
    success: 'text-success-600',
    warning: 'text-warning-600',
};

const avatarVariantToContainerClassNames: Record<AvatarIconVariant, string> = {
    neutral: 'bg-neutral-50',
    primary: 'bg-primary-50',
    critical: 'bg-critical-100',
    info: 'bg-info-100',
    success: 'bg-success-100',
    warning: 'bg-warning-100',
};

const responsiveSizeClasses: ResponsiveAttributeClassMap<AvatarIconSize> = {
    sm: {
        sm: 'w-6 h-6',
        md: 'md:w-6 md:h-6',
        lg: 'lg:w-6 lg:h-6',
    },
    md: {
        sm: 'w-8 h-8',
        md: 'md:w-8 md:h-8',
        lg: 'lg:w-8 lg:h-8',
    },
    lg: {
        sm: 'w-10 h-10',
        md: 'md:w-10 md:h-10',
        lg: 'lg:w-10 lg:h-10',
    },
};

export const AvatarIcon: React.FC<IAvatarIconProps> = (props) => {
    const { className, icon, variant = 'neutral', size = 'sm', responsiveSize = {}, ...rest } = props;

    const containerClasses = classNames(
        'flex items-center justify-center rounded-full',
        avatarVariantToContainerClassNames[variant],
        responsiveUtils.generateClassNames(size, responsiveSize, responsiveSizeClasses),
        className,
    );

    const iconClasses = classNames(avatarVariantToIconClassNames[variant]);

    return (
        <div className={containerClasses} {...rest}>
            <Icon className={iconClasses} size={size} icon={icon} responsiveSize={responsiveSize} />
        </div>
    );
};