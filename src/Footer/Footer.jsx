import React from 'react';
import { RxDividerVertical } from 'react-icons/rx';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
               <div className='flex gap-0'>
                <div className='text-2xl font-semibold text-blue-600'>Action</div><div className='text-2xl font-bold text-yellow-300'>Gallery</div>
               </div>
                <div className='mt-[-25px]'>
                    <ul className='flex gap-2 font-semibold'>
                        <li>Bid.</li>
                        <li>Win.</li>
                        <li>Own.</li>
                    </ul>
                </div>
  <nav className="grid grid-flow-col gap-4 ">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Auctions</a>
    <a className="link link-hover">Categories</a>
    <a className="link link-hover">How to works</a>
  </nav>
  
  <aside>
    <p>Copyright © {new Date().getFullYear()} - AuctionHub. All rights reserved.</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;