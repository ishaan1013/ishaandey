export default function Blob() {
    return(
        <div className="blob">
            <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <g transform="translate(142.51429748535156, 0.7323570251464844)">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: "#c300ff"}}></stop>
                    <stop offset="100%" style={{stopColor: "#00d2ff"}}></stop>
                    </linearGradient>
                </defs>
                <path  fill="url(#gradient)">
                    <animate attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    
                    values="M439,278.5Q425,307,417.5,337Q410,367,370.5,364Q331,361,323,405.5Q315,450,282.5,403.5Q250,357,229.5,366.5Q209,376,181.5,379Q154,382,150.5,353.5Q147,325,101.5,319Q56,313,102.5,281.5Q149,250,159.5,237Q170,224,150,193.5Q130,163,155,158.5Q180,154,199.5,153.5Q219,153,234.5,107Q250,61,274.5,80Q299,99,332,95.5Q365,92,390,111Q415,130,379.5,174.5Q344,219,398.5,234.5Q453,250,439,278.5Z;
                    
                    M402.5,268Q361,286,355.5,304Q350,322,373.5,387Q397,452,335,387Q273,322,261.5,382Q250,442,226.5,418.5Q203,395,191,371.5Q179,348,114,372Q49,396,101.5,338.5Q154,281,107,265.5Q60,250,69,222Q78,194,105,179Q132,164,168,175Q204,186,206,152.5Q208,119,229,102Q250,85,267.5,114Q285,143,307,142.5Q329,142,371.5,136.5Q414,131,418,162.5Q422,194,433,222Q444,250,402.5,268Z;
                    
                    M439.5,274Q399,298,400.5,329Q402,360,352.5,342Q303,324,305.5,376Q308,428,279,431Q250,434,232.5,396Q215,358,170,390Q125,422,117,387Q109,352,91,329.5Q73,307,57,278.5Q41,250,28.5,212Q16,174,45,148Q74,122,122,131Q170,140,189,130.5Q208,121,229,93.5Q250,66,286,47.5Q322,29,331.5,77Q341,125,375.5,129.5Q410,134,426,160.5Q442,187,461,218.5Q480,250,439.5,274Z;
                    
                    M352.5,267Q355,284,347,299.5Q339,315,367,382Q395,449,345.5,420.5Q296,392,273,361Q250,330,237.5,328.5Q225,327,185.5,360Q146,393,167.5,343.5Q189,294,146,296Q103,298,70.5,274Q38,250,65,224.5Q92,199,130,195Q168,191,143,130Q118,69,172,123Q226,177,238,96Q250,15,268.5,75Q287,135,294.5,157Q302,179,375,142.5Q448,106,443.5,147Q439,188,394.5,219Q350,250,352.5,267Z;
                    
                    M439,278.5Q425,307,417.5,337Q410,367,370.5,364Q331,361,323,405.5Q315,450,282.5,403.5Q250,357,229.5,366.5Q209,376,181.5,379Q154,382,150.5,353.5Q147,325,101.5,319Q56,313,102.5,281.5Q149,250,159.5,237Q170,224,150,193.5Q130,163,155,158.5Q180,154,199.5,153.5Q219,153,234.5,107Q250,61,274.5,80Q299,99,332,95.5Q365,92,390,111Q415,130,379.5,174.5Q344,219,398.5,234.5Q453,250,439,278.5Z"
                    ></animate>
                </path>
                </g>
            </svg>
        </div>
    )
}