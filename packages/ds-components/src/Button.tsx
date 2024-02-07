

import { primaryColor } from '@design-system/ds-tokens';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children}) => {
    return <button style={{backgroundColor: primaryColor}}>{children}</button>

}

export default Button;