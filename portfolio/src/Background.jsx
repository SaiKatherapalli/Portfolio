import React from 'react';

// Fixed flat blue shapes behind the page. The glass panels slide over them,
// so the blur, tint and edges of the glass are visible as you scroll.
const Background = () => (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-blue-600/45 animate-float1" />
        <div className="absolute -right-24 top-[18%] h-[480px] w-[480px] rounded-full bg-blue-400/40 animate-float2" />
        <div className="absolute -bottom-48 left-[8%] h-[620px] w-[620px] rounded-full bg-blue-500/35 animate-float2" />
        <div className="absolute -bottom-24 right-[4%] h-[360px] w-[360px] rounded-full bg-sky-300/50 animate-float1" />
    </div>
);

export default Background;
