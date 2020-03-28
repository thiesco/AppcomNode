import React from 'react';

export default function Header({children}){// exporta o header
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

// export default Header; //Para exporta o Header