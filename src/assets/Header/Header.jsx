import React from 'react';

const Header = () => {
    return (
        <div>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5">
        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn border-t-green-600">Explore Auctions</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;