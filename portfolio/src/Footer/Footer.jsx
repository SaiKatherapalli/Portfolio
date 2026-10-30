import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-slate-500 md:flex-row">
                <p>© {new Date().getFullYear()} Sai Deepak Kumar Reddy Katherapalli</p>
                <p>Seattle, WA · United States</p>
            </div>
        </footer>
    );
};

export default Footer;
