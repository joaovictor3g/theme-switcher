import React, { useState, useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { shade } from 'polished';

import { ThemeContext } from 'styled-components';
 
interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    
    return(
        <Container>
            Hello
            <Switch 
                checked={title === 'dark'} 
                onChange={toggleTheme} 
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.3, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
    );
}

export default Header;