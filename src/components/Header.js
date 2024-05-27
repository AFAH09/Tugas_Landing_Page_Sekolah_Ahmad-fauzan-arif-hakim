import React from 'react';

function Header() {
    return (
        <header className='bg-dark text-white py-3'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>My Landing Page</h1> {/* Ubah judul sesuai keinginan */}
                    <nav>
                        {/* Contoh tautan */}
                        <a href='#hom' className='nav-link'>Home</a>
                        <a href='#about' className='nav-link'>About</a>
                        <a href='#contact' className='nav-link'>Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
