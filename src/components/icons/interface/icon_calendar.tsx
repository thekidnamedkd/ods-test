import React from 'react';
import { type IconType } from '..';

export const IconCalendar: IconType = ({ height = 16, width = 16, ...props }) => {
    return (
        <svg width={width} height={height} fill="none" viewBox="0 0 16 16" {...props}>
            <g clipPath="url(#clip0_164_8)">
                <path
                    d="M14.3332 1.99999H12.4999C12.4066 1.99999 12.3333 1.91999 12.3333 1.83333V0.666674C12.3333 0.293344 12.0333 1.37679e-05 11.6666 1.37679e-05C11.2933 1.37679e-05 10.9999 0.293344 10.9999 0.666674V3.83331C10.9999 4.10664 10.7733 4.3333 10.4999 4.3333C10.2199 4.3333 9.99994 4.10664 9.99994 3.83331V2.33332C9.99994 2.14666 9.84661 1.99999 9.66661 1.99999H5.49999V1.99933C5.40666 1.99933 5.33332 1.91933 5.33332 1.83266V0.660007C5.33332 0.286678 5.03333 -0.00665283 4.66666 -0.00665283C4.29333 -0.00665283 4 0.286678 4 0.660007V3.82664C4 4.09997 3.77334 4.32664 3.50001 4.32664C3.22001 4.32664 3.00001 4.09997 3.00001 3.82664V2.32666C3.00001 2.13999 2.84668 1.99333 2.66668 1.99333H1.66669C0.926701 1.99333 0.333374 2.58665 0.333374 3.32665V14.6599C0.333374 15.3932 0.926701 15.9932 1.66669 15.9932H14.3332C15.0666 15.9932 15.6666 15.3932 15.6666 14.6599V3.32665C15.6666 2.58665 15.0666 1.99333 14.3332 1.99333V1.99999ZM13.9999 14.6665H2.00002C1.81336 14.6665 1.66669 14.5132 1.66669 14.3332V6.33328C1.66669 6.14662 1.81336 5.99995 2.00002 5.99995H13.9999C14.1799 5.99995 14.3332 6.14662 14.3332 6.33328V14.3332C14.3332 14.5132 14.1799 14.6665 13.9999 14.6665Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_164_8">
                    <rect width="16" height="16" fill="white" fillOpacity={0} />
                </clipPath>
            </defs>
        </svg>
    );
};