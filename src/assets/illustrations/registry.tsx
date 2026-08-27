import type { JSX } from 'react';

interface IllustrationProps {
  className?: string;
}

function BrushingTeethIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="115" r="27" fill="#F4C9A0" />
      <path d="M125 104 Q150 78 175 104 Q167 88 150 88 Q133 88 125 104Z" fill="#5B4636" />
      <ellipse cx="140" cy="116" rx="3.5" ry="6" fill="#7A5A3E" />
      <ellipse cx="160" cy="116" rx="3.5" ry="6" fill="#7A5A3E" />
      <ellipse cx="150" cy="135" rx="10" ry="7" fill="#fff" stroke="#D6A97B" strokeWidth="1.5" />
      <path d="M125 141 Q150 131 175 141 L180 200 L120 200 Z" fill="#2FA483" />
      <rect
        x="178"
        y="120"
        width="55"
        height="12"
        rx="5"
        fill="#3E7FC1"
        transform="rotate(-18 178 120)"
      />
      <rect
        x="222"
        y="90"
        width="16"
        height="22"
        rx="4"
        fill="#E8A93A"
        transform="rotate(-18 222 90)"
      />
      <circle
        cx="270"
        cy="80"
        r="18"
        fill="#EAF3FC"
        stroke="#3E7FC1"
        strokeWidth="2"
        opacity=".6"
      />
      <path
        d="M262 80 l6 6 l12 -13"
        stroke="#2FA483"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".7"
      />
    </svg>
  );
}

function WakeUpIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="sun-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD873" />
          <stop offset="100%" stopColor="#F08A3C" />
        </linearGradient>
        <linearGradient id="blanket-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7FB1E8" />
          <stop offset="100%" stopColor="#3E7FC1" />
        </linearGradient>
      </defs>
      <g opacity=".95">
        <line
          x1="330"
          y1="6"
          x2="330"
          y2="20"
          stroke="#F5C89A"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="302"
          y1="16"
          x2="311"
          y2="29"
          stroke="#F5C89A"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="358"
          y1="16"
          x2="349"
          y2="29"
          stroke="#F5C89A"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="330" cy="55" r="30" fill="url(#sun-grad)" />
      </g>
      <text
        x="150"
        y="48"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="24"
        fill="#8266C9"
      >
        z
      </text>
      <text
        x="167"
        y="34"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill="#9B7FD4"
      >
        z
      </text>
      <text
        x="180"
        y="23"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#B7A4E6"
      >
        z
      </text>
      <rect x="28" y="165" width="42" height="50" rx="7" fill="#E9C9A0" />
      <circle cx="49" cy="158" r="15" fill="#fff" stroke="#E1615A" strokeWidth="4" />
      <circle cx="38" cy="146" r="4.5" fill="#E1615A" />
      <circle cx="60" cy="146" r="4.5" fill="#E1615A" />
      <line
        x1="49"
        y1="158"
        x2="49"
        y2="149"
        stroke="#E1615A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="49"
        y1="158"
        x2="55"
        y2="161"
        stroke="#E1615A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="90" y="182" width="230" height="16" rx="8" fill="#D6A97B" />
      <rect x="90" y="108" width="16" height="90" rx="7" fill="#C9986B" />
      <ellipse cx="145" cy="150" rx="38" ry="23" fill="#FFF8EC" />
      <circle cx="145" cy="136" r="27" fill="#F4C9A0" />
      <path d="M121 125 Q145 98 169 125 Q162 109 145 109 Q128 109 121 125Z" fill="#5B4636" />
      <path
        d="M133 138 q5.5 4.5 11 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M156 138 q5.5 4.5 11 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M136 153 q7 5 14 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M100 158 Q210 135 315 160 L315 202 Q210 220 100 202 Z" fill="url(#blanket-grad)" />
      <path
        d="M100 158 Q210 135 315 160"
        stroke="#2E6BAA"
        strokeWidth="3"
        fill="none"
        opacity=".4"
      />
    </svg>
  );
}

function FiveMoreMinutesIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="clock-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD873" />
          <stop offset="100%" stopColor="#F08A3C" />
        </linearGradient>
        <linearGradient id="shirt-grad-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7FB1E8" />
          <stop offset="100%" stopColor="#3E7FC1" />
        </linearGradient>
      </defs>
      <path
        d="M290 40 L350 40 L350 50 L325 75 L350 100 L350 110 L290 110 L290 100 L315 75 L290 50 Z"
        fill="url(#clock-grad)"
        opacity=".9"
      />
      <rect x="285" y="35" width="70" height="8" rx="4" fill="#E1615A" />
      <rect x="285" y="107" width="70" height="8" rx="4" fill="#E1615A" />
      <path d="M300 92 L340 92 L320 108 Z" fill="#FFF3D6" opacity=".85" />
      <circle cx="140" cy="95" r="30" fill="#F4C9A0" />
      <path d="M113 85 Q140 55 167 85 Q158 68 140 68 Q122 68 113 85Z" fill="#5B4636" />
      <path
        d="M127 98 q6 5 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M152 98 q6 5 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M132 113 q8 8 16 0"
        stroke="#B4794F"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M95 130 Q140 110 185 130 L195 200 L165 200 L155 155 L140 200 L110 200 L95 165 Z"
        fill="url(#shirt-grad-a)"
      />
      <rect x="90" y="190" width="30" height="14" rx="6" fill="#E9C9A0" />
      <rect x="160" y="190" width="30" height="14" rx="6" fill="#E9C9A0" />
      <rect x="205" y="185" width="22" height="22" rx="4" fill="#F08A3C" opacity=".85" />
      <rect x="230" y="170" width="22" height="22" rx="4" fill="#2FA483" opacity=".85" />
      <rect x="215" y="150" width="22" height="22" rx="4" fill="#E1615A" opacity=".85" />
    </svg>
  );
}

function BathIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="water-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9CC3EA" />
          <stop offset="100%" stopColor="#3E7FC1" />
        </linearGradient>
        <linearGradient id="tub-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF3FC" />
        </linearGradient>
      </defs>
      <path
        d="M60 150 Q60 200 100 200 L300 200 Q340 200 340 150 Z"
        fill="url(#tub-grad)"
        stroke="#D9E6F5"
        strokeWidth="4"
      />
      <path d="M70 150 Q200 130 330 150 L330 168 Q200 148 70 168 Z" fill="url(#water-grad)" />
      <circle cx="90" cy="145" r="5" fill="#fff" opacity=".8" />
      <circle cx="105" cy="140" r="3.5" fill="#fff" opacity=".7" />
      <circle cx="250" cy="143" r="6" fill="#fff" opacity=".8" />
      <circle cx="270" cy="138" r="4" fill="#fff" opacity=".7" />
      <ellipse cx="290" cy="158" rx="16" ry="12" fill="#E8A93A" />
      <circle cx="298" cy="152" r="3" fill="#5B3A00" />
      <circle cx="180" cy="118" r="27" fill="#F4C9A0" />
      <path d="M156 108 Q180 82 204 108 Q196 92 180 92 Q164 92 156 108Z" fill="#5B4636" />
      <path
        d="M167 122 q6 -6 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M191 122 q6 -6 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M172 135 q8 -4 16 0"
        stroke="#B4794F"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M155 138 Q180 128 205 138 L200 165 L160 165 Z"
        fill="url(#water-grad)"
        opacity=".6"
      />
    </svg>
  );
}

function GettingDressedIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="shirt-grad-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7FB1E8" />
          <stop offset="100%" stopColor="#3E7FC1" />
        </linearGradient>
      </defs>
      <rect
        x="70"
        y="175"
        width="55"
        height="35"
        rx="6"
        fill="#F08A3C"
        opacity=".85"
        transform="rotate(-8 97 192)"
      />
      <rect
        x="270"
        y="180"
        width="50"
        height="30"
        rx="6"
        fill="#2FA483"
        opacity=".85"
        transform="rotate(10 295 195)"
      />
      <circle cx="200" cy="95" r="28" fill="#F4C9A0" />
      <path d="M175 84 Q200 58 225 84 Q217 68 200 68 Q183 68 175 84Z" fill="#5B4636" />
      <path
        d="M187 98 q6 5 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M211 98 q6 5 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M188 114 q10 4 20 -2"
        stroke="#B4794F"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M170 128 Q200 112 230 128 L235 195 L205 195 L200 150 L195 195 L165 195 Z"
        fill="url(#shirt-grad-b)"
      />
      <path d="M230 128 L255 145 L245 160 L225 148 Z" fill="url(#shirt-grad-b)" />
      <circle cx="150" cy="130" r="14" fill="#F4C9A0" />
    </svg>
  );
}

function CombingHairIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="180" cy="120" r="32" fill="#F4C9A0" />
      <path
        d="M148 106 Q155 60 180 55 Q210 50 218 90 Q222 105 212 118 Q220 95 200 80 Q185 68 170 82 Q155 95 158 112 Z"
        fill="#5B4636"
      />
      <path
        d="M167 128 q6 5 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M191 128 q6 5 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M172 145 q8 -4 16 0"
        stroke="#B4794F"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M225 70 L250 45" stroke="#8B6B4F" strokeWidth="6" strokeLinecap="round" />
      <rect x="245" y="35" width="34" height="16" rx="4" fill="#E1615A" />
      <line
        x1="250"
        y1="51"
        x2="250"
        y2="60"
        stroke="#E1615A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="257"
        y1="51"
        x2="257"
        y2="62"
        stroke="#E1615A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="264"
        y1="51"
        x2="264"
        y2="60"
        stroke="#E1615A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="271"
        y1="51"
        x2="271"
        y2="62"
        stroke="#E1615A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BreakfastIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="70" y="150" width="260" height="14" rx="7" fill="#D6A97B" />
      <ellipse cx="150" cy="140" rx="34" ry="22" fill="#fff" stroke="#EAF3FC" strokeWidth="3" />
      <ellipse cx="150" cy="136" rx="26" ry="15" fill="#F08A3C" opacity=".55" />
      <rect
        x="140"
        y="118"
        width="6"
        height="26"
        rx="3"
        fill="#B7A4E6"
        transform="rotate(20 143 131)"
      />
      <circle cx="230" cy="98" r="30" fill="#F4C9A0" />
      <path d="M204 88 Q230 62 256 88 Q248 72 230 72 Q212 72 204 88Z" fill="#5B4636" />
      <path
        d="M217 100 q6 -5 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M241 100 q6 -5 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M216 116 q14 -2 28 0"
        stroke="#B4794F"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M205 128 Q230 118 255 128 L258 165 L202 165 Z" fill="#7FB1E8" />
      <line
        x1="308"
        y1="60"
        x2="308"
        y2="80"
        stroke="#F5C89A"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="308" cy="105" r="26" fill="#FFD873" />
    </svg>
  );
}

function SlowMorningsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="330" cy="55" r="26" fill="none" stroke="#3E7FC1" strokeWidth="5" />
      <line
        x1="330"
        y1="55"
        x2="330"
        y2="38"
        stroke="#3E7FC1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="330"
        y1="55"
        x2="343"
        y2="58"
        stroke="#3E7FC1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse cx="150" cy="185" rx="60" ry="18" fill="#B7A4E6" opacity=".5" />
      <path
        d="M100 185 Q90 150 130 145 Q170 140 190 165 Q200 178 190 188 Q160 200 120 195 Q100 192 100 185Z"
        fill="#2FA483"
      />
      <circle cx="185" cy="160" r="14" fill="#2FA483" />
      <circle cx="181" cy="156" r="2" fill="#1B4B3B" />
      <path
        d="M55 158 Q65 150 75 158"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="260" cy="150" r="24" fill="#F4C9A0" />
      <path d="M240 140 Q260 118 280 140 Q272 126 260 126 Q248 126 240 140Z" fill="#5B4636" />
      <path
        d="M251 152 q4 3 8 0"
        stroke="#7A5A3E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M267 152 q4 3 8 0"
        stroke="#7A5A3E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M253 164 q7 3 14 -1"
        stroke="#B4794F"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SchoolIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="270" y="60" width="90" height="90" fill="#EAF3FC" />
      <path d="M260 60 L315 25 L370 60Z" fill="#3E7FC1" />
      <rect x="298" y="105" width="24" height="45" fill="#fff" />
      <rect x="280" y="80" width="16" height="16" fill="#fff" />
      <rect x="334" y="80" width="16" height="16" fill="#fff" />
      <circle cx="140" cy="120" r="28" fill="#F4C9A0" />
      <path d="M114 108 Q140 82 166 108 Q158 92 140 92 Q122 92 114 108Z" fill="#5B4636" />
      <path
        d="M127 122 q6 5 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M151 122 q6 5 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M130 137 q10 -2 20 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M110 148 Q140 135 170 148 L175 200 L105 200 Z" fill="#F08A3C" />
      <rect x="90" y="150" width="30" height="38" rx="8" fill="#2FA483" />
      <rect x="97" y="155" width="16" height="10" rx="2" fill="#1B4B3B" />
      <path
        d="M170 148 Q230 100 260 100"
        stroke="#B7A4E6"
        strokeWidth="3"
        strokeDasharray="5,6"
        fill="none"
      />
    </svg>
  );
}

function CryingLeavingIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="255" y="40" width="90" height="150" rx="4" fill="#D6A97B" />
      <rect x="265" y="50" width="70" height="130" rx="3" fill="#EAF3FC" />
      <circle cx="325" cy="115" r="4" fill="#D6A97B" />
      <circle cx="130" cy="105" r="27" fill="#F4C9A0" />
      <path d="M105 94 Q130 68 155 94 Q147 78 130 78 Q113 78 105 94Z" fill="#5B4636" />
      <path
        d="M116 110 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M140 110 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M120 124 q10 6 20 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="118" cy="115" rx="3.5" ry="6" fill="#7FB1E8" opacity=".85" />
      <ellipse cx="145" cy="117" rx="3" ry="5" fill="#7FB1E8" opacity=".85" />
      <path d="M100 132 Q130 118 160 132 L165 195 L95 195 Z" fill="#E1615A" />
      <path
        d="M190 150 Q210 145 225 150"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="235" cy="148" r="16" fill="#F4C9A0" opacity=".9" />
    </svg>
  );
}

function PostponeHomeworkIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="60" y="150" width="180" height="14" rx="7" fill="#D6A97B" />
      <rect
        x="90"
        y="120"
        width="70"
        height="35"
        rx="4"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
        transform="rotate(-6 125 137)"
      />
      <line
        x1="100"
        y1="130"
        x2="145"
        y2="126"
        stroke="#B7A4E6"
        strokeWidth="2"
        transform="rotate(-6 125 137)"
      />
      <line
        x1="100"
        y1="138"
        x2="140"
        y2="134"
        stroke="#B7A4E6"
        strokeWidth="2"
        transform="rotate(-6 125 137)"
      />
      <circle cx="200" cy="110" r="28" fill="#F4C9A0" />
      <path d="M174 100 Q200 74 226 100 Q218 84 200 84 Q182 84 174 100Z" fill="#5B4636" />
      <path
        d="M186 113 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M210 113 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M188 127 q12 3 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M175 138 Q200 128 225 138 L230 200 L170 200 Z" fill="#7FB1E8" />
      <circle cx="320" cy="70" r="26" fill="none" stroke="#3E7FC1" strokeWidth="5" />
      <line
        x1="320"
        y1="70"
        x2="320"
        y2="53"
        stroke="#3E7FC1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="320"
        y1="70"
        x2="333"
        y2="73"
        stroke="#3E7FC1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="280" cy="150" r="18" fill="#F08A3C" opacity=".85" />
    </svg>
  );
}

function SitStillIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="130" y="150" width="70" height="55" rx="6" fill="#C9986B" />
      <rect x="140" y="80" width="10" height="75" rx="4" fill="#D6A97B" />
      <rect x="180" y="80" width="10" height="75" rx="4" fill="#D6A97B" />
      <circle cx="165" cy="95" r="27" fill="#F4C9A0" />
      <path d="M140 84 Q165 58 190 84 Q182 68 165 68 Q148 68 140 84Z" fill="#5B4636" />
      <path
        d="M152 98 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M176 98 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M154 112 q11 5 22 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M143 120 Q165 108 187 120 L192 165 L138 165 Z"
        fill="#2FA483"
        transform="rotate(-8 165 140)"
      />
      <path
        d="M100 130 q10 -20 25 -10"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".6"
      />
      <path
        d="M245 110 q-10 -20 -25 -10"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".6"
      />
      <path
        d="M110 190 q15 -15 30 -3"
        stroke="#F08A3C"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".6"
      />
    </svg>
  );
}

function DistractedIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="60" y="160" width="200" height="14" rx="7" fill="#D6A97B" />
      <rect
        x="90"
        y="130"
        width="60"
        height="30"
        rx="4"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
      />
      <circle cx="180" cy="115" r="27" fill="#F4C9A0" />
      <path d="M154 104 Q180 78 206 104 Q198 88 180 88 Q162 88 154 104Z" fill="#5B4636" />
      <circle cx="192" cy="118" r="3" fill="#7A5A3E" />
      <circle cx="170" cy="118" r="3" fill="#7A5A3E" />
      <path
        d="M170 133 q10 2 20 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M155 143 Q180 133 205 143 L210 200 L150 200 Z" fill="#F08A3C" />
      <ellipse cx="300" cy="60" rx="34" ry="24" fill="#fff" stroke="#F2ECFB" strokeWidth="2" />
      <text
        x="285"
        y="68"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill="#8266C9"
      >
        ?
      </text>
      <circle cx="330" cy="110" r="10" fill="#B7A4E6" opacity=".7" />
      <circle cx="345" cy="90" r="6" fill="#B7A4E6" opacity=".5" />
    </svg>
  );
}

function TakesHoursIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="320" cy="60" r="30" fill="none" stroke="#3E7FC1" strokeWidth="5" />
      <line
        x1="320"
        y1="60"
        x2="320"
        y2="40"
        stroke="#3E7FC1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="320"
        y1="60"
        x2="336"
        y2="66"
        stroke="#3E7FC1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="70" y="160" width="180" height="14" rx="7" fill="#D6A97B" />
      <rect
        x="100"
        y="132"
        width="65"
        height="30"
        rx="4"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
      />
      <circle cx="190" cy="112" r="27" fill="#F4C9A0" />
      <path d="M164 101 Q190 75 216 101 Q208 85 190 85 Q172 85 164 101Z" fill="#5B4636" />
      <path
        d="M177 118 q6 4 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M200 118 q6 4 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M180 132 q10 -2 20 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M165 140 Q190 130 215 140 L220 200 L160 200 Z" fill="#8266C9" />
      <text
        x="240"
        y="105"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#B7A4E6"
      >
        z
      </text>
    </svg>
  );
}

function DifficultSubjectsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="70"
        y="150"
        width="60"
        height="45"
        rx="4"
        fill="#fff"
        stroke="#FDECEB"
        strokeWidth="3"
        transform="rotate(8 100 172)"
      />
      <text
        x="82"
        y="178"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill="#E1615A"
        transform="rotate(8 100 172)"
      >
        7÷2
      </text>
      <circle cx="200" cy="110" r="28" fill="#F4C9A0" />
      <path d="M174 100 Q200 74 226 100 Q218 84 200 84 Q182 84 174 100Z" fill="#5B4636" />
      <path
        d="M186 113 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M210 113 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M188 128 q12 -4 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M175 138 Q200 128 225 138 L230 200 L170 200 Z" fill="#2FA483" />
      <text
        x="270"
        y="80"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="24"
        fill="#F08A3C"
        opacity=".7"
      >
        %
      </text>
      <text
        x="300"
        y="130"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#8266C9"
        opacity=".6"
      >
        x²
      </text>
    </svg>
  );
}

function ReadingIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="90"
        y="140"
        width="70"
        height="50"
        rx="4"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
        transform="rotate(-10 125 165)"
      />
      <path
        d="M100 150 h50 M100 158 h45 M100 166 h50"
        stroke="#B7A4E6"
        strokeWidth="2"
        transform="rotate(-10 125 165)"
      />
      <circle cx="220" cy="115" r="28" fill="#F4C9A0" />
      <path d="M194 104 Q220 78 246 104 Q238 88 220 88 Q202 88 194 104Z" fill="#5B4636" />
      <path
        d="M206 118 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M230 118 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M208 133 q12 3 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M195 143 Q220 133 245 143 L250 200 L190 200 Z" fill="#E1615A" />
      <text
        x="290"
        y="90"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#B7A4E6"
      >
        z
      </text>
      <text
        x="305"
        y="75"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#D8CBF0"
      >
        z
      </text>
    </svg>
  );
}

function CarelessMistakesIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="90"
        y="150"
        width="70"
        height="50"
        rx="4"
        fill="#fff"
        stroke="#FDECEB"
        strokeWidth="3"
      />
      <path
        d="M100 165 L120 180 M120 165 L100 180"
        stroke="#E1615A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="220" cy="110" r="28" fill="#F4C9A0" />
      <path d="M194 100 Q220 74 246 100 Q238 84 220 84 Q202 84 194 100Z" fill="#5B4636" />
      <circle cx="232" cy="113" r="3" fill="#7A5A3E" />
      <circle cx="210" cy="113" r="3" fill="#7A5A3E" />
      <path
        d="M210 128 q10 -3 20 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M195 138 Q220 128 245 138 L250 200 L190 200 Z" fill="#F08A3C" />
      <rect x="265" y="150" width="26" height="14" rx="4" fill="#FFB6A8" />
      <text
        x="90"
        y="70"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill="#E1615A"
      >
        oops!
      </text>
    </svg>
  );
}

function ForgettingIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="200" cy="115" r="28" fill="#F4C9A0" />
      <path d="M174 104 Q200 78 226 104 Q218 88 200 88 Q182 88 174 104Z" fill="#5B4636" />
      <path
        d="M186 118 q6 3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M210 118 q6 3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M188 133 q12 2 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M175 143 Q200 133 225 143 L230 200 L170 200 Z" fill="#3E7FC1" />
      <path
        d="M240 100 Q255 85 245 75"
        stroke="#8B6B4F"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse
        cx="290"
        cy="70"
        rx="30"
        ry="22"
        fill="#fff"
        stroke="#F2ECFB"
        strokeWidth="2"
        opacity=".6"
      />
      <text
        x="278"
        y="78"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#B7A4E6"
        opacity=".6"
      >
        ?
      </text>
      <ellipse
        cx="330"
        cy="115"
        rx="18"
        ry="14"
        fill="#fff"
        stroke="#F2ECFB"
        strokeWidth="2"
        opacity=".3"
      />
    </svg>
  );
}

function GiveUpIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="90" y="160" width="65" height="16" rx="4" fill="#D6A97B" />
      <line
        x1="130"
        y1="140"
        x2="145"
        y2="160"
        stroke="#E1615A"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="215" cy="112" r="28" fill="#F4C9A0" />
      <path d="M189 101 Q215 75 241 101 Q233 85 215 85 Q197 85 189 101Z" fill="#5B4636" />
      <path
        d="M201 115 q6 4 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M225 115 q6 4 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M203 132 q12 -4 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M190 140 Q215 130 240 140 L255 175 L235 190 L215 165 L195 190 L175 175 Z"
        fill="#E1615A"
      />
    </svg>
  );
}

function DoItLaterIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="330" cy="60" r="28" fill="none" stroke="#3E7FC1" strokeWidth="5" />
      <line
        x1="330"
        y1="60"
        x2="330"
        y2="42"
        stroke="#3E7FC1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="330"
        y1="60"
        x2="344"
        y2="66"
        stroke="#3E7FC1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="190" cy="115" r="28" fill="#F4C9A0" />
      <path d="M164 104 Q190 78 216 104 Q208 88 190 88 Q172 88 164 104Z" fill="#5B4636" />
      <path
        d="M176 118 q6 3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M200 118 q6 3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M178 133 q12 2 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M165 143 Q190 133 215 143 L220 200 L160 200 Z" fill="#2FA483" />
      <path d="M225 150 L260 150" stroke="#8266C9" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M252 143 L262 150 L252 157"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PickyEaterIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="90" y="160" width="90" height="12" rx="6" fill="#D6A97B" />
      <ellipse cx="135" cy="152" rx="40" ry="16" fill="#fff" stroke="#EAF3FC" strokeWidth="3" />
      <circle cx="118" cy="150" r="7" fill="#2FA483" opacity=".7" />
      <circle cx="140" cy="146" r="6" fill="#F08A3C" opacity=".7" />
      <circle cx="155" cy="152" r="6" fill="#E1615A" opacity=".7" />
      <circle cx="240" cy="112" r="28" fill="#F4C9A0" />
      <path d="M214 101 Q240 75 266 101 Q258 85 240 85 Q222 85 214 101Z" fill="#5B4636" />
      <path
        d="M226 116 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M250 116 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M228 131 q12 -3 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M215 140 Q240 130 265 140 L270 200 L210 200 Z" fill="#8266C9" />
      <path
        d="M180 100 q10 15 0 25"
        stroke="#B4794F"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VegetablesIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="200" cy="115" r="28" fill="#F4C9A0" />
      <path d="M174 104 Q200 78 226 104 Q218 88 200 88 Q182 88 174 104Z" fill="#5B4636" />
      <path
        d="M186 119 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M210 119 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M188 132 q12 -4 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M175 140 Q200 130 225 140 L230 200 L170 200 Z" fill="#F08A3C" />
      <g transform="translate(90,150) rotate(-15)">
        <ellipse cx="20" cy="20" rx="22" ry="18" fill="#2FA483" />
        <ellipse cx="8" cy="10" rx="10" ry="8" fill="#3AB593" />
        <ellipse cx="30" cy="8" rx="9" ry="7" fill="#3AB593" />
        <rect x="16" y="30" width="8" height="16" rx="3" fill="#8B6B4F" />
      </g>
      <path d="M140 95 L155 80" stroke="#B4794F" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function JunkFoodIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="200" cy="110" r="28" fill="#F4C9A0" />
      <path d="M174 99 Q200 73 226 99 Q218 83 200 83 Q182 83 174 99Z" fill="#5B4636" />
      <path
        d="M186 122 q6 4 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M210 122 q6 4 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M188 135 q12 3 24 -1"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M175 135 Q200 125 225 135 L230 200 L170 200 Z" fill="#E1615A" />
      <path d="M90 200 L110 130 L150 130 L140 200 Z" fill="#F08A3C" />
      <rect x="100" y="140" width="6" height="45" rx="3" fill="#FFD873" />
      <rect x="112" y="135" width="6" height="50" rx="3" fill="#FFD873" />
      <rect x="124" y="140" width="6" height="45" rx="3" fill="#FFD873" />
      <ellipse cx="270" cy="150" rx="30" ry="14" fill="#F7F9FE" stroke="#EAF3FC" strokeWidth="2" />
      <ellipse cx="255" cy="145" rx="6" ry="4" fill="#2FA483" opacity=".5" />
      <ellipse cx="280" cy="147" rx="5" ry="3" fill="#F08A3C" opacity=".5" />
    </svg>
  );
}

function MealsForeverIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="330" cy="55" r="26" fill="none" stroke="#3E7FC1" strokeWidth="5" />
      <line
        x1="330"
        y1="55"
        x2="330"
        y2="38"
        stroke="#3E7FC1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="330"
        y1="55"
        x2="344"
        y2="60"
        stroke="#3E7FC1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="70" y="165" width="90" height="10" rx="5" fill="#D6A97B" />
      <ellipse cx="115" cy="158" rx="38" ry="15" fill="#fff" stroke="#EAF3FC" strokeWidth="3" />
      <ellipse cx="115" cy="156" rx="20" ry="8" fill="#F08A3C" opacity=".5" />
      <line
        x1="150"
        y1="150"
        x2="165"
        y2="140"
        stroke="#8B6B4F"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="230" cy="112" r="27" fill="#F4C9A0" />
      <path d="M205 101 Q230 76 255 101 Q248 86 230 86 Q213 86 205 101Z" fill="#5B4636" />
      <path
        d="M216 128 q7 3 14 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="221" cy="115" r="2.5" fill="#7A5A3E" />
      <circle cx="242" cy="115" r="2.5" fill="#7A5A3E" />
      <path d="M210 137 Q230 127 250 137 L255 200 L205 200 Z" fill="#3E7FC1" />
    </svg>
  );
}

function SnacksIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="140" cy="185" rx="45" ry="12" fill="#D6A97B" opacity=".6" />
      <path
        d="M105 110 Q105 90 140 90 Q175 90 175 110 L170 180 Q170 195 140 195 Q110 195 110 180 Z"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
      />
      <circle cx="125" cy="130" r="6" fill="#B4794F" opacity=".6" />
      <circle cx="150" cy="145" r="7" fill="#B4794F" opacity=".6" />
      <circle cx="130" cy="160" r="5" fill="#B4794F" opacity=".6" />
      <ellipse cx="140" cy="88" rx="35" ry="8" fill="#D6A97B" />
      <circle cx="250" cy="115" r="28" fill="#F4C9A0" />
      <path d="M224 104 Q250 78 276 104 Q268 88 250 88 Q232 88 224 104Z" fill="#5B4636" />
      <path
        d="M236 128 q7 4 14 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="241" cy="118" r="2.5" fill="#7A5A3E" />
      <circle cx="262" cy="118" r="2.5" fill="#7A5A3E" />
      <path d="M230 140 Q250 130 270 140 L275 200 L225 200 Z" fill="#F08A3C" />
      <path d="M215 150 L195 165" stroke="#F4C9A0" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

function WaterIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="90"
        y="90"
        width="50"
        height="90"
        rx="6"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
      />
      <path
        d="M94 140 L136 140 L132 176 Q132 180 128 180 L102 180 Q98 180 98 176 Z"
        fill="#9CC3EA"
        opacity=".8"
      />
      <circle cx="240" cy="112" r="28" fill="#F4C9A0" />
      <path d="M214 101 Q240 75 266 101 Q258 85 240 85 Q222 85 214 101Z" fill="#5B4636" />
      <path
        d="M226 116 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M250 116 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M228 131 q12 3 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M215 140 Q240 130 265 140 L270 200 L210 200 Z" fill="#2FA483" />
      <circle cx="300" cy="140" r="14" fill="#3E7FC1" opacity=".7" />
      <circle cx="310" cy="120" r="8" fill="#3E7FC1" opacity=".5" />
    </svg>
  );
}

function StopsEatingIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="90" y="165" width="90" height="10" rx="5" fill="#D6A97B" />
      <ellipse cx="135" cy="158" rx="38" ry="15" fill="#fff" stroke="#EAF3FC" strokeWidth="3" />
      <ellipse cx="135" cy="156" rx="22" ry="8" fill="#E8A93A" opacity=".6" />
      <circle cx="240" cy="112" r="28" fill="#F4C9A0" />
      <path d="M214 101 Q240 75 266 101 Q258 85 240 85 Q222 85 214 101Z" fill="#5B4636" />
      <circle cx="228" cy="115" r="2.5" fill="#7A5A3E" />
      <circle cx="252" cy="115" r="2.5" fill="#7A5A3E" />
      <path
        d="M228 132 q12 -2 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M215 140 Q240 130 265 140 L270 200 L210 200 Z" fill="#8266C9" />
      <path
        d="M195 145 Q180 150 175 160"
        stroke="#B4794F"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="290"
        y="90"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#B7A4E6"
      >
        ?
      </text>
    </svg>
  );
}

function SweetsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M240 150 L260 105 Q265 95 275 105 L295 150 Z" fill="#FFD873" />
      <rect x="235" y="150" width="65" height="14" rx="4" fill="#F08A3C" />
      <circle cx="267" cy="98" r="7" fill="#E1615A" />
      <circle cx="150" cy="112" r="28" fill="#F4C9A0" />
      <path d="M124 101 Q150 75 176 101 Q168 85 150 85 Q132 85 124 101Z" fill="#5B4636" />
      <path
        d="M136 128 q7 5 14 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="141" cy="116" r="3" fill="#7A5A3E" />
      <circle cx="163" cy="116" r="3" fill="#7A5A3E" />
      <path d="M125 138 Q150 128 175 138 L180 200 L120 200 Z" fill="#2FA483" />
      <path d="M185 155 L215 140" stroke="#B4794F" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function SameFoodIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="70" y="165" width="95" height="10" rx="5" fill="#D6A97B" />
      <ellipse cx="117" cy="158" rx="40" ry="15" fill="#fff" stroke="#EAF3FC" strokeWidth="3" />
      <path
        d="M95 155 q22 -10 44 0"
        stroke="#F08A3C"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M95 161 q22 8 44 0"
        stroke="#E8A93A"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="235" cy="112" r="28" fill="#F4C9A0" />
      <path d="M209 101 Q235 75 261 101 Q253 85 235 85 Q217 85 209 101Z" fill="#5B4636" />
      <path
        d="M221 128 q7 3 14 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="226" cy="116" r="2.5" fill="#7A5A3E" />
      <circle cx="247" cy="116" r="2.5" fill="#7A5A3E" />
      <path d="M210 138 Q235 128 260 138 L265 200 L205 200 Z" fill="#E1615A" />
      <path
        d="M295 100 a18 18 0 1 1 -1 -1"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M292 88 L300 100 L286 100 Z" fill="#8266C9" />
    </svg>
  );
}

function PlayWithFoodIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="80" y="170" width="110" height="10" rx="5" fill="#D6A97B" />
      <ellipse cx="135" cy="163" rx="46" ry="16" fill="#fff" stroke="#EAF3FC" strokeWidth="3" />
      <path d="M110 160 Q135 130 160 160 Z" fill="#F5EAD3" />
      <circle cx="135" cy="132" r="4" fill="#2FA483" />
      <circle cx="255" cy="112" r="28" fill="#F4C9A0" />
      <path d="M229 101 Q255 75 281 101 Q273 85 255 85 Q237 85 229 101Z" fill="#5B4636" />
      <path
        d="M238 126 q9 6 18 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M240 116 q4 -3 8 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M262 116 q4 -3 8 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M230 138 Q255 128 280 138 L285 200 L225 200 Z" fill="#F08A3C" />
      <line
        x1="195"
        y1="150"
        x2="215"
        y2="135"
        stroke="#8B6B4F"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TalkingBackIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="108" r="28" fill="#F4C9A0" />
      <path d="M124 97 Q150 71 176 97 Q168 81 150 81 Q132 81 124 97Z" fill="#5B4636" />
      <path
        d="M133 124 q6 -4 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M156 124 q6 -4 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="150" cy="141" rx="10" ry="7" fill="#B4794F" />
      <path d="M125 152 Q150 140 175 152 L180 205 L120 205 Z" fill="#E1615A" />
      <path
        d="M195 90 Q225 78 250 92 L245 70 L268 88 Q245 100 220 100 Z"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
      />
      <text
        x="212"
        y="93"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="800"
        fontSize="16"
        fill="#E1615A"
      >
        !
      </text>
      <circle cx="290" cy="130" r="22" fill="#F4C9A0" opacity=".85" />
      <path
        d="M270 122 Q290 102 310 122"
        stroke="#5B4636"
        strokeWidth="8"
        fill="none"
        opacity=".85"
      />
    </svg>
  );
}

function NotListeningIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="140" cy="105" r="27" fill="#F4C9A0" />
      <path d="M115 94 Q140 68 165 94 Q157 78 140 78 Q123 78 115 94Z" fill="#5B4636" />
      <circle cx="128" cy="107" r="4" fill="#7A5A3E" />
      <circle cx="152" cy="107" r="4" fill="#7A5A3E" />
      <path
        d="M132 121 q8 3 16 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M115 132 Q140 122 165 132 L170 195 L110 195 Z" fill="#3E7FC1" />
      <rect x="180" y="150" width="55" height="40" rx="8" fill="#EAF3FC" />
      <rect x="192" y="160" width="30" height="20" rx="4" fill="#fff" />
      <path
        d="M270 90 Q290 90 290 105 Q290 118 275 120"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".5"
      />
      <path
        d="M280 75 Q305 75 305 95 Q305 112 285 115"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".3"
      />
    </svg>
  );
}

function PublicTantrumsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="80" y="185" width="220" height="10" rx="5" fill="#D6A97B" opacity=".6" />
      <rect
        x="250"
        y="130"
        width="70"
        height="50"
        rx="6"
        fill="none"
        stroke="#8B6B4F"
        strokeWidth="4"
      />
      <circle cx="258" cy="188" r="7" fill="#8B6B4F" />
      <circle cx="312" cy="188" r="7" fill="#8B6B4F" />
      <circle cx="150" cy="150" rx="26" r="26" fill="#F4C9A0" transform="rotate(20 150 150)" />
      <path d="M126 138 Q150 112 174 138 Q166 122 150 122 Q134 122 126 138Z" fill="#5B4636" />
      <ellipse cx="141" cy="150" rx="4" ry="6" fill="#7A5A3E" />
      <ellipse cx="160" cy="150" rx="4" ry="6" fill="#7A5A3E" />
      <ellipse cx="150" cy="166" rx="9" ry="8" fill="#E1615A" />
      <path d="M120 172 Q150 158 180 172 L190 205 L110 205 Z" fill="#F08A3C" />
      <ellipse cx="118" cy="158" rx="3.5" ry="6" fill="#7FB1E8" />
      <ellipse cx="182" cy="160" rx="3.5" ry="6" fill="#7FB1E8" />
      <path d="M95 190 L80 175" stroke="#F4C9A0" strokeWidth="6" strokeLinecap="round" />
      <path d="M205 190 L222 172" stroke="#F4C9A0" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function HittingSiblingsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="130" cy="115" r="26" fill="#F4C9A0" />
      <path d="M107 104 Q130 80 153 104 Q146 89 130 89 Q114 89 107 104Z" fill="#5B4636" />
      <path
        d="M118 128 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M140 128 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="130" cy="143" rx="8" ry="6" fill="#B4794F" />
      <path d="M107 140 Q130 130 153 140 L158 200 L102 200 Z" fill="#2FA483" />
      <path d="M158 150 L200 128" stroke="#F4C9A0" strokeWidth="9" strokeLinecap="round" />
      <circle cx="205" cy="122" r="9" fill="#F4C9A0" />
      <circle cx="270" cy="115" r="26" fill="#F4C9A0" />
      <path d="M247 104 Q270 80 293 104 Q286 89 270 89 Q254 89 247 104Z" fill="#5B4636" />
      <circle cx="260" cy="115" r="3.5" fill="#7A5A3E" />
      <circle cx="280" cy="115" r="3.5" fill="#7A5A3E" />
      <path
        d="M258 133 q12 8 24 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M247 140 Q270 130 293 140 L298 200 L242 200 Z" fill="#8266C9" />
      <text
        x="215"
        y="105"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="800"
        fontSize="26"
        fill="#E1615A"
      >
        ✳
      </text>
    </svg>
  );
}

function SharingIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="110" r="27" fill="#F4C9A0" />
      <path d="M125 99 Q150 73 175 99 Q167 83 150 83 Q133 83 125 99Z" fill="#5B4636" />
      <path
        d="M136 116 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 116 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="150" cy="132" rx="8" ry="6" fill="#B4794F" />
      <path d="M125 137 Q150 127 175 137 L180 200 L120 200 Z" fill="#E8A93A" />
      <rect x="150" y="150" width="46" height="34" rx="6" fill="#F08A3C" />
      <circle cx="173" cy="150" r="9" fill="#F08A3C" />
      <path d="M160 148 L180 148" stroke="#fff" strokeWidth="3" />
      <path d="M225 165 L200 158" stroke="#F4C9A0" strokeWidth="8" strokeLinecap="round" />
      <circle cx="255" cy="160" r="20" fill="#F4C9A0" opacity=".8" />
    </svg>
  );
}

function InterruptingIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="112" r="27" fill="#F4C9A0" />
      <path d="M125 101 Q150 75 175 101 Q167 85 150 85 Q133 85 125 101Z" fill="#5B4636" />
      <circle cx="139" cy="112" r="4" fill="#7A5A3E" />
      <circle cx="161" cy="112" r="4" fill="#7A5A3E" />
      <ellipse cx="150" cy="130" rx="11" ry="9" fill="#B4794F" />
      <path d="M125 139 Q150 129 175 139 L180 200 L120 200 Z" fill="#2C9EA6" />
      <path d="M178 130 L200 105" stroke="#F4C9A0" strokeWidth="9" strokeLinecap="round" />
      <circle cx="205" cy="98" r="9" fill="#F4C9A0" />
      <path
        d="M235 145 Q260 133 285 147 L280 125 L303 143 Q280 155 255 155 Z"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
        opacity=".55"
      />
      <path
        d="M255 165 L280 165 M255 172 L275 172"
        stroke="#8266C9"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".4"
      />
    </svg>
  );
}

function LyingIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="112" r="27" fill="#F4C9A0" />
      <path d="M125 101 Q150 75 175 101 Q167 85 150 85 Q133 85 125 101Z" fill="#5B4636" />
      <path
        d="M136 117 q6 3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M162 113 q5 -2 9 -4"
        stroke="#7A5A3E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="150" cy="132" rx="7" ry="5" fill="#B4794F" />
      <path d="M125 139 Q150 129 175 139 L180 200 L120 200 Z" fill="#8266C9" />
      <path
        d="M185 155 Q195 145 210 150"
        stroke="#F4C9A0"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M245 90 Q270 78 290 92 L285 70 L308 88 Q285 100 260 100 Z"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
      />
      <path d="M255 90 L280 90 L268 78 Z" fill="#E1615A" opacity=".85" />
    </svg>
  );
}

function TestingLimitsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <line
        x1="230"
        y1="60"
        x2="230"
        y2="205"
        stroke="#E1615A"
        strokeWidth="5"
        strokeDasharray="10 8"
      />
      <circle cx="150" cy="112" r="27" fill="#F4C9A0" />
      <path
        d="M125 101 Q150 75 175 101 Q167 85 150 85 Q133 85 150 85 Q133 85 125 101Z"
        fill="#5B4636"
      />
      <path
        d="M136 108 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 108 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M138 130 q12 8 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M125 139 Q150 129 175 139 L180 200 L120 200 Z" fill="#E1615A" />
      <path d="M180 165 L222 158" stroke="#F4C9A0" strokeWidth="9" strokeLinecap="round" />
      <circle cx="228" cy="155" r="9" fill="#F4C9A0" />
      <rect
        x="260"
        y="145"
        width="50"
        height="16"
        rx="4"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="2"
      />
    </svg>
  );
}

function MeltdownsChangeIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <line
        x1="270"
        y1="70"
        x2="270"
        y2="180"
        stroke="#D6A97B"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M270 90 L320 78 L320 102 Z" fill="#3E7FC1" />
      <path d="M270 115 L230 103 L230 127 Z" fill="#F08A3C" />
      <circle cx="150" cy="112" r="27" fill="#F4C9A0" />
      <path d="M125 101 Q150 75 175 101 Q167 85 150 85 Q133 85 125 101Z" fill="#5B4636" />
      <path
        d="M135 105 q7 5 13 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M157 105 q7 5 13 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="150" cy="130" rx="9" ry="10" fill="#E1615A" />
      <path d="M125 140 Q150 130 175 140 L180 200 L120 200 Z" fill="#3E7FC1" />
      <ellipse cx="123" cy="122" rx="3.5" ry="6" fill="#7FB1E8" opacity=".85" />
      <ellipse cx="178" cy="126" rx="3.5" ry="6" fill="#7FB1E8" opacity=".85" />
    </svg>
  );
}

function WhiningIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="120" r="27" fill="#F4C9A0" />
      <path d="M125 109 Q150 83 175 109 Q167 93 150 93 Q133 93 125 109Z" fill="#5B4636" />
      <path
        d="M136 128 q6 3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 128 q6 3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M138 143 q12 -6 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M128 150 Q150 143 172 150 L176 200 L124 200 Z" fill="#F08A3C" />
      <text
        x="200"
        y="90"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#8266C9"
        opacity=".7"
      >
        ~
      </text>
      <text
        x="220"
        y="80"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill="#9B7FD4"
        opacity=".55"
      >
        ~
      </text>
      <text
        x="238"
        y="72"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#B7A4E6"
        opacity=".4"
      >
        ~
      </text>
    </svg>
  );
}

function RefusingApologyIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="130" cy="112" r="26" fill="#F4C9A0" transform="rotate(-15 130 112)" />
      <path d="M108 101 Q130 78 152 101 Q145 86 130 86 Q115 86 108 101Z" fill="#5B4636" />
      <path
        d="M117 112 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M139 112 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M120 128 q10 -4 20 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M105 136 Q130 126 155 136 L160 200 L100 200 Z" fill="#2FA483" />
      <circle cx="270" cy="115" r="26" fill="#F4C9A0" />
      <path d="M248 104 Q270 81 292 104 Q285 89 270 89 Q255 89 248 104Z" fill="#5B4636" />
      <ellipse cx="260" cy="115" rx="3.5" ry="5" fill="#7A5A3E" />
      <ellipse cx="280" cy="115" rx="3.5" ry="5" fill="#7A5A3E" />
      <path
        d="M258 132 q12 6 24 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M245 140 Q270 130 295 140 L300 200 L240 200 Z" fill="#3E7FC1" />
      <ellipse cx="252" cy="122" rx="3" ry="5" fill="#7FB1E8" opacity=".85" />
    </svg>
  );
}

function ClinginessIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="255" y="60" width="26" height="140" rx="10" fill="#D6A97B" />
      <rect x="240" y="45" width="56" height="30" rx="12" fill="#E8A93A" />
      <circle cx="160" cy="120" r="26" fill="#F4C9A0" />
      <path d="M137 109 Q160 85 183 109 Q176 94 160 94 Q144 94 137 109Z" fill="#5B4636" />
      <path
        d="M147 122 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M169 122 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="160" cy="138" rx="7" ry="6" fill="#B4794F" />
      <path d="M140 145 Q170 132 220 150 Q235 160 232 185 L155 200 L135 195 Z" fill="#8266C9" />
      <path
        d="M225 150 Q245 145 250 165"
        stroke="#F4C9A0"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BossinessIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="100" r="27" fill="#F4C9A0" />
      <path d="M125 89 Q150 63 175 89 Q167 73 150 73 Q133 73 125 89Z" fill="#5B4636" />
      <path
        d="M136 96 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 96 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M138 114 q12 -3 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M125 127 Q150 117 175 127 L182 200 L118 200 Z" fill="#E8A93A" />
      <path d="M182 145 L235 130" stroke="#F4C9A0" strokeWidth="9" strokeLinecap="round" />
      <circle cx="242" cy="126" r="10" fill="#F4C9A0" />
      <circle cx="230" cy="185" r="16" fill="#2FA483" opacity=".8" />
      <circle cx="270" cy="190" r="14" fill="#E1615A" opacity=".8" />
      <circle cx="200" cy="192" r="12" fill="#3E7FC1" opacity=".8" />
    </svg>
  );
}

function FollowingInstructionsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="112" r="27" fill="#F4C9A0" />
      <path d="M125 101 Q150 75 175 101 Q167 85 150 85 Q133 85 125 101Z" fill="#5B4636" />
      <circle cx="139" cy="112" r="3.5" fill="#7A5A3E" />
      <circle cx="161" cy="112" r="3.5" fill="#7A5A3E" />
      <path
        d="M138 130 q12 0 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M125 139 Q150 129 175 139 L180 200 L120 200 Z" fill="#2C9EA6" />
      <path d="M185 105 L205 90" stroke="#F4C9A0" strokeWidth="9" strokeLinecap="round" />
      <circle cx="210" cy="85" r="9" fill="#F4C9A0" />
      <rect
        x="240"
        y="65"
        width="90"
        height="95"
        rx="8"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
      />
      <circle cx="255" cy="82" r="5" fill="#2FA483" />
      <rect x="266" y="78" width="50" height="8" rx="4" fill="#EAF3FC" />
      <circle cx="255" cy="102" r="5" fill="#F08A3C" />
      <rect x="266" y="98" width="50" height="8" rx="4" fill="#EAF3FC" />
      <circle cx="255" cy="122" r="5" fill="#EAF3FC" stroke="#D6A97B" strokeWidth="2" />
      <rect x="266" y="118" width="50" height="8" rx="4" fill="#EAF3FC" opacity=".5" />
    </svg>
  );
}

function SoreLoserIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="200" y="150" width="110" height="16" rx="4" fill="#D6A97B" />
      <rect
        x="215"
        y="130"
        width="24"
        height="20"
        rx="3"
        fill="#fff"
        stroke="#E1615A"
        strokeWidth="2"
      />
      <circle cx="227" cy="140" r="2.5" fill="#E1615A" />
      <rect
        x="250"
        y="130"
        width="24"
        height="20"
        rx="3"
        fill="#fff"
        stroke="#3E7FC1"
        strokeWidth="2"
      />
      <circle cx="257" cy="137" r="2.5" fill="#3E7FC1" />
      <circle cx="267" cy="143" r="2.5" fill="#3E7FC1" />
      <circle cx="150" cy="112" r="27" fill="#F4C9A0" />
      <path d="M125 101 Q150 75 175 101 Q167 85 150 85 Q133 85 125 101Z" fill="#5B4636" />
      <path
        d="M135 107 q7 5 13 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M157 107 q7 5 13 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M138 132 q12 -6 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M120 140 Q150 128 180 140 L185 200 L115 200 Z" fill="#E1615A" />
    </svg>
  );
}

function BigFeelingsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M150 60 L165 95 L200 100 L175 122 L182 158 L150 140 L118 158 L125 122 L100 100 L135 95 Z"
        fill="#E8A93A"
        opacity=".9"
      />
      <circle cx="150" cy="122" r="24" fill="#F4C9A0" />
      <path d="M128 112 Q150 90 172 112 Q165 98 150 98 Q135 98 128 112Z" fill="#5B4636" />
      <ellipse cx="140" cy="122" rx="4" ry="6" fill="#7A5A3E" />
      <ellipse cx="160" cy="122" rx="4" ry="6" fill="#7A5A3E" />
      <ellipse cx="150" cy="138" rx="9" ry="9" fill="#E1615A" />
      <path d="M128 145 Q150 136 172 145 L177 200 L123 200 Z" fill="#3E7FC1" />
    </svg>
  );
}

function CryingEasilyIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="118" r="27" fill="#F4C9A0" />
      <path d="M125 107 Q150 81 175 107 Q167 91 150 91 Q133 91 125 107Z" fill="#5B4636" />
      <path
        d="M136 118 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 118 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M138 138 q12 6 24 0"
        stroke="#B4794F"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M125 148 Q150 138 175 148 L180 200 L120 200 Z" fill="#8266C9" />
      <ellipse cx="128" cy="128" rx="4" ry="8" fill="#7FB1E8" opacity=".9" />
      <ellipse cx="172" cy="130" rx="4" ry="8" fill="#7FB1E8" opacity=".9" />
      <ellipse cx="133" cy="145" rx="3" ry="6" fill="#7FB1E8" opacity=".7" />
    </svg>
  );
}

function FearOfDarkIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="400" height="230" fill="#2E2A4A" opacity=".08" />
      <circle cx="330" cy="55" r="22" fill="#E8A93A" opacity=".85" />
      <circle cx="60" cy="45" r="3" fill="#fff" opacity=".6" />
      <circle cx="90" cy="70" r="2" fill="#fff" opacity=".5" />
      <circle cx="250" cy="35" r="2.5" fill="#fff" opacity=".6" />
      <rect x="100" y="130" width="90" height="70" rx="8" fill="#3E7FC1" />
      <circle cx="145" cy="150" r="22" fill="#F4C9A0" />
      <path d="M124 141 Q145 120 166 141 Q159 127 145 127 Q131 127 124 141Z" fill="#5B4636" />
      <circle cx="137" cy="150" r="4" fill="#fff" />
      <circle cx="153" cy="150" r="4" fill="#fff" />
      <circle cx="137" cy="150" r="2" fill="#2E2A4A" />
      <circle cx="153" cy="150" r="2" fill="#2E2A4A" />
      <ellipse cx="145" cy="163" rx="6" ry="5" fill="#8B6B4F" />
      <rect x="60" y="150" width="16" height="50" rx="3" fill="#D6A97B" />
      <circle cx="68" cy="145" r="10" fill="#F5C89A" opacity=".9" />
    </svg>
  );
}

function DropOffAnxietyIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="255" y="40" width="90" height="150" rx="4" fill="#D6A97B" />
      <rect x="265" y="50" width="70" height="130" rx="3" fill="#EAF3FC" />
      <circle cx="130" cy="115" r="26" fill="#F4C9A0" />
      <path d="M107 104 Q130 80 153 104 Q146 89 130 89 Q114 89 107 104Z" fill="#5B4636" />
      <ellipse cx="120" cy="118" rx="3.5" ry="5" fill="#7A5A3E" />
      <ellipse cx="140" cy="118" rx="3.5" ry="5" fill="#7A5A3E" />
      <path
        d="M118 132 q12 8 24 0"
        stroke="#E1615A"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M107 140 Q130 130 153 140 L158 200 L102 200 Z" fill="#E1615A" />
      <ellipse cx="112" cy="122" rx="3" ry="5" fill="#7FB1E8" opacity=".85" />
      <path
        d="M175 150 L215 150"
        stroke="#8266C9"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="1 14"
      />
      <circle cx="230" cy="150" r="16" fill="#F4C9A0" opacity=".85" />
    </svg>
  );
}

function SiblingJealousyIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="130" cy="112" r="25" fill="#F4C9A0" />
      <path d="M108 101 Q130 78 152 101 Q145 86 130 86 Q115 86 108 101Z" fill="#5B4636" />
      <path
        d="M117 116 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M139 116 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M119 130 q11 -4 22 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M105 137 Q130 127 155 137 L160 200 L100 200 Z" fill="#2C9EA6" />
      <circle cx="270" cy="105" r="22" fill="#F4C9A0" />
      <path d="M250 96 Q270 76 290 96 Q284 83 270 83 Q256 83 250 96Z" fill="#5B4636" />
      <path
        d="M260 108 q5 -2 10 0"
        stroke="#7A5A3E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M280 108 q5 -2 10 0"
        stroke="#7A5A3E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="270" cy="120" rx="6" ry="5" fill="#B4794F" />
      <path d="M252 127 Q270 118 288 127 L292 175 L248 175 Z" fill="#F08A3C" />
      <circle cx="290" cy="165" r="18" fill="#E8A93A" opacity=".85" />
    </svg>
  );
}

function AngerOutburstsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="115" r="28" fill="#F4C9A0" />
      <path d="M124 104 Q150 78 176 104 Q168 88 150 88 Q132 88 124 104Z" fill="#5B4636" />
      <path d="M132 110 L146 116" stroke="#7A5A3E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M168 110 L154 116" stroke="#7A5A3E" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="150" cy="134" rx="11" ry="10" fill="#E1615A" />
      <path d="M124 142 Q150 132 176 142 L182 200 L118 200 Z" fill="#E1615A" />
      <path
        d="M195 85 L215 70 M200 100 L225 92 M195 115 L218 118"
        stroke="#F08A3C"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PerfectionismIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="108" r="26" fill="#F4C9A0" />
      <path d="M126 97 Q150 73 174 97 Q167 82 150 82 Q133 82 126 97Z" fill="#5B4636" />
      <path
        d="M136 113 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 113 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M139 129 q11 -3 22 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M125 135 Q150 125 175 135 L180 200 L120 200 Z" fill="#8266C9" />
      <rect
        x="200"
        y="140"
        width="70"
        height="50"
        rx="4"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
      />
      <path
        d="M212 155 L228 168 M228 155 L212 168"
        stroke="#E1615A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M245 178 L260 178"
        stroke="#D6A97B"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".6"
      />
    </svg>
  );
}

function ShynessIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="115" r="26" fill="#F4C9A0" />
      <path d="M126 104 Q150 80 174 104 Q167 89 150 89 Q133 89 126 104Z" fill="#5B4636" />
      <path
        d="M136 120 q6 -1 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 120 q6 -1 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="133" cy="126" rx="6" ry="4" fill="#F5B8A8" opacity=".7" />
      <ellipse cx="167" cy="126" rx="6" ry="4" fill="#F5B8A8" opacity=".7" />
      <ellipse cx="150" cy="132" rx="5" ry="4" fill="#B4794F" />
      <path d="M126 142 Q150 132 174 142 L179 200 L121 200 Z" fill="#2FA483" />
      <rect x="255" y="70" width="40" height="120" rx="4" fill="#D6A97B" opacity=".4" />
    </svg>
  );
}

function SadnessIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="118" r="27" fill="#F4C9A0" />
      <path d="M125 107 Q150 81 175 107 Q167 91 150 91 Q133 91 125 107Z" fill="#5B4636" />
      <path
        d="M136 120 q6 2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 120 q6 2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M138 140 q12 -6 24 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M125 147 Q150 137 175 147 L180 200 L120 200 Z" fill="#6B6690" />
      <path
        d="M60 60 Q80 60 80 80 Q80 96 60 100"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".3"
      />
    </svg>
  );
}

function FearOfNewThingsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="140" cy="118" r="25" fill="#F4C9A0" />
      <path d="M118 108 Q140 86 162 108 Q155 94 140 94 Q125 94 118 108Z" fill="#5B4636" />
      <circle cx="132" cy="119" r="3.5" fill="#7A5A3E" />
      <circle cx="150" cy="119" r="3.5" fill="#7A5A3E" />
      <ellipse cx="141" cy="133" rx="6" ry="6" fill="#B4794F" />
      <path d="M118 141 Q140 132 162 141 L166 200 L114 200 Z" fill="#F08A3C" />
      <rect
        x="230"
        y="130"
        width="70"
        height="60"
        rx="8"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
      />
      <path
        d="M255 155 L265 165 L280 148"
        stroke="#2FA483"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity=".5"
      />
      <text
        x="192"
        y="145"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#8266C9"
      >
        ?
      </text>
    </svg>
  );
}

function EmbarrassmentIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="115" r="27" fill="#F4C9A0" />
      <path d="M125 104 Q150 78 175 104 Q167 88 150 88 Q133 88 125 104Z" fill="#5B4636" />
      <path
        d="M136 112 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 112 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="130" cy="122" r="7" fill="#E1615A" opacity=".55" />
      <circle cx="170" cy="122" r="7" fill="#E1615A" opacity=".55" />
      <ellipse cx="150" cy="132" rx="6" ry="5" fill="#B4794F" />
      <path d="M125 140 Q150 130 175 140 L180 200 L120 200 Z" fill="#E8A93A" />
    </svg>
  );
}

function WorryIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="118" r="27" fill="#F4C9A0" />
      <path d="M125 107 Q150 81 175 107 Q167 91 150 91 Q133 91 125 107Z" fill="#5B4636" />
      <path
        d="M135 108 q7 -5 13 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M157 108 q7 -5 13 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="150" cy="134" rx="7" ry="8" fill="#B4794F" />
      <path d="M125 141 Q150 131 175 141 L180 200 L120 200 Z" fill="#3E7FC1" />
      <path
        d="M215 75 Q235 65 245 82"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="205"
        y="70"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="#8266C9"
      >
        ?
      </text>
      <text
        x="235"
        y="55"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="800"
        fontSize="16"
        fill="#9B7FD4"
        opacity=".7"
      >
        ?
      </text>
    </svg>
  );
}

function DifficultyCalmingDownIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="140" cy="115" r="27" fill="#F4C9A0" />
      <path d="M115 104 Q140 78 165 104 Q157 88 140 88 Q123 88 115 104Z" fill="#5B4636" />
      <ellipse cx="130" cy="116" rx="3.5" ry="6" fill="#7A5A3E" />
      <ellipse cx="150" cy="116" rx="3.5" ry="6" fill="#7A5A3E" />
      <ellipse cx="140" cy="134" rx="9" ry="8" fill="#E1615A" />
      <path d="M115 141 Q140 131 165 141 L170 200 L110 200 Z" fill="#F08A3C" />
      <ellipse cx="118" cy="126" rx="3" ry="6" fill="#7FB1E8" opacity=".85" />
      <circle cx="260" cy="130" r="22" fill="#F4C9A0" opacity=".9" />
      <path
        d="M240 122 Q260 105 280 122"
        stroke="#5B4636"
        strokeWidth="7"
        fill="none"
        opacity=".9"
      />
      <path
        d="M248 133 q12 -3 24 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        opacity=".9"
      />
    </svg>
  );
}

function EmpathyDevelopmentIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="130" cy="115" r="25" fill="#F4C9A0" />
      <path d="M108 105 Q130 82 152 105 Q145 90 130 90 Q115 90 108 105Z" fill="#5B4636" />
      <circle cx="121" cy="116" r="3.5" fill="#7A5A3E" />
      <circle cx="139" cy="116" r="3.5" fill="#7A5A3E" />
      <path
        d="M119 132 q11 2 22 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M105 140 Q130 130 155 140 L160 200 L100 200 Z" fill="#2FA483" />
      <circle cx="270" cy="125" r="22" fill="#F4C9A0" opacity=".85" />
      <path
        d="M250 117 Q270 98 290 117 Q283 104 270 104 Q257 104 250 117Z"
        fill="#5B4636"
        opacity=".85"
      />
      <path
        d="M259 138 q11 -5 22 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        opacity=".85"
      />
      <ellipse cx="255" cy="130" rx="3" ry="5" fill="#7FB1E8" opacity=".7" />
      <path
        d="M175 130 Q195 118 215 130"
        stroke="#E1615A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".6"
      />
    </svg>
  );
}

function MoodSwingsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="115" r="27" fill="#F4C9A0" />
      <path d="M125 104 Q150 78 175 104 Q167 88 150 88 Q133 88 125 104Z" fill="#5B4636" />
      <path
        d="M136 111 q6 -3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 121 q6 3 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M132 132 Q140 126 148 132 Q156 140 164 130"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M125 141 Q150 131 175 141 L180 200 L120 200 Z" fill="#E8A93A" />
      <path
        d="M210 90 Q230 70 250 90 Q270 110 290 90"
        stroke="#8266C9"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity=".6"
      />
    </svg>
  );
}

function ScreenTimeEndsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="90" y="80" width="120" height="85" rx="8" fill="#2E2A4A" />
      <rect x="98" y="88" width="104" height="62" rx="3" fill="#3E7FC1" opacity=".5" />
      <rect x="130" y="165" width="40" height="8" rx="3" fill="#2E2A4A" />
      <circle cx="270" cy="120" r="27" fill="#F4C9A0" />
      <path d="M245 109 Q270 83 295 109 Q287 93 270 93 Q253 93 245 109Z" fill="#5B4636" />
      <ellipse cx="260" cy="132" rx="3.5" ry="6" fill="#7A5A3E" />
      <ellipse cx="280" cy="132" rx="3.5" ry="6" fill="#7A5A3E" />
      <ellipse cx="270" cy="148" rx="9" ry="9" fill="#E1615A" />
      <path d="M245 155 Q270 145 295 155 L300 200 L240 200 Z" fill="#F08A3C" />
      <ellipse cx="248" cy="140" rx="3" ry="6" fill="#7FB1E8" opacity=".85" />
    </svg>
  );
}

function AskingForDeviceIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="112" r="27" fill="#F4C9A0" />
      <path d="M125 101 Q150 75 175 101 Q167 85 150 85 Q133 85 125 101Z" fill="#5B4636" />
      <ellipse cx="140" cy="113" rx="4" ry="6" fill="#7A5A3E" />
      <ellipse cx="160" cy="113" rx="4" ry="6" fill="#7A5A3E" />
      <ellipse cx="150" cy="130" rx="8" ry="7" fill="#B4794F" />
      <path d="M125 139 Q150 129 175 139 L180 200 L120 200 Z" fill="#2C9EA6" />
      <path d="M180 130 L215 108" stroke="#F4C9A0" strokeWidth="9" strokeLinecap="round" />
      <circle cx="222" cy="102" r="9" fill="#F4C9A0" />
      <rect x="245" y="60" width="55" height="90" rx="8" fill="#2E2A4A" />
      <rect x="251" y="68" width="43" height="66" rx="3" fill="#8266C9" opacity=".55" />
      <circle cx="272" cy="140" r="3" fill="#EAF3FC" />
    </svg>
  );
}

function YoutubeObsessionIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="140" y="55" width="150" height="105" rx="10" fill="#2E2A4A" />
      <rect x="150" y="65" width="130" height="85" rx="4" fill="#E1615A" opacity=".8" />
      <path d="M200 90 L200 130 L235 110 Z" fill="#fff" />
      <path
        d="M310 90 Q325 90 325 105 Q325 118 312 121"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".5"
      />
      <circle cx="90" cy="150" r="26" fill="#F4C9A0" />
      <path d="M67 140 Q90 116 113 140 Q106 125 90 125 Q74 125 67 140Z" fill="#5B4636" />
      <circle cx="80" cy="150" r="4" fill="#7A5A3E" />
      <circle cx="100" cy="150" r="4" fill="#7A5A3E" />
      <ellipse cx="90" cy="166" rx="8" ry="7" fill="#E8A93A" />
      <path d="M67 175 Q90 165 113 175 L118 200 L62 200 Z" fill="#E8A93A" />
    </svg>
  );
}

function VideoGamesIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="112" r="27" fill="#F4C9A0" />
      <path d="M125 101 Q150 75 175 101 Q167 85 150 85 Q133 85 125 101Z" fill="#5B4636" />
      <path
        d="M135 106 q7 -5 13 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M157 106 q7 -5 13 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="150" cy="132" rx="10" ry="9" fill="#E1615A" />
      <path d="M125 140 Q150 130 175 140 L180 200 L120 200 Z" fill="#3E7FC1" />
      <rect x="150" y="155" width="70" height="35" rx="16" fill="#2E2A4A" />
      <circle cx="167" cy="172" r="6" fill="#EAF3FC" opacity=".8" />
      <circle cx="203" cy="166" r="4" fill="#E1615A" opacity=".85" />
      <circle cx="203" cy="178" r="4" fill="#2FA483" opacity=".85" />
    </svg>
  );
}

function SocialMediaPressureIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="140" cy="110" r="25" fill="#F4C9A0" />
      <path d="M118 100 Q140 78 162 100 Q155 86 140 86 Q125 86 118 100Z" fill="#5B4636" />
      <ellipse cx="131" cy="111" rx="3.5" ry="5" fill="#7A5A3E" />
      <ellipse cx="149" cy="111" rx="3.5" ry="5" fill="#7A5A3E" />
      <ellipse cx="140" cy="126" rx="7" ry="6" fill="#B4794F" />
      <path d="M118 134 Q140 124 162 134 L166 200 L114 200 Z" fill="#8266C9" />
      <rect x="225" y="80" width="55" height="95" rx="8" fill="#2E2A4A" />
      <rect x="231" y="88" width="43" height="70" rx="3" fill="#F08A3C" opacity=".5" />
      <circle cx="252" cy="95" r="4" fill="#fff" opacity=".7" />
      <path d="M245 148 L259 148 M245 153 L255 153" stroke="#fff" strokeWidth="2" opacity=".6" />
      <text
        x="285"
        y="100"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="800"
        fontSize="18"
        fill="#E1615A"
      >
        ♥
      </text>
    </svg>
  );
}

function ScreensBeforeBedIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="70" y="150" width="240" height="16" rx="8" fill="#D6A97B" />
      <path d="M90 160 Q200 130 300 160 L305 202 Q200 220 95 202 Z" fill="#3E7FC1" />
      <circle cx="150" cy="120" r="24" fill="#F4C9A0" />
      <path d="M128 111 Q150 88 172 111 Q165 97 150 97 Q135 97 128 111Z" fill="#5B4636" />
      <path
        d="M138 122 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 122 q6 -2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="200" y="90" width="46" height="66" rx="7" fill="#2E2A4A" />
      <rect x="205" y="96" width="36" height="48" rx="3" fill="#8266C9" opacity=".6" />
      <path d="M330 55 Q345 55 345 70 Q345 84 330 86" fill="#E8A93A" opacity=".85" />
    </svg>
  );
}

function BoredomWithoutScreensIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="115" r="27" fill="#F4C9A0" />
      <path d="M125 104 Q150 78 175 104 Q167 88 150 88 Q133 88 125 104Z" fill="#5B4636" />
      <path
        d="M136 118 q6 0 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 118 q6 0 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="150" cy="133" rx="6" ry="4" fill="#B4794F" />
      <path d="M125 140 Q150 130 175 140 L180 200 L120 200 Z" fill="#2FA483" />
      <rect
        x="200"
        y="150"
        width="40"
        height="30"
        rx="4"
        fill="none"
        stroke="#D6A97B"
        strokeWidth="3"
        opacity=".5"
      />
      <circle cx="255" cy="165" r="14" fill="none" stroke="#D6A97B" strokeWidth="3" opacity=".5" />
    </svg>
  );
}

function ComparingToInfluencersIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="230" y="55" width="65" height="105" rx="8" fill="#2E2A4A" />
      <rect x="238" y="63" width="49" height="75" rx="3" fill="#E8A93A" opacity=".6" />
      <circle cx="262" cy="82" r="10" fill="#F4C9A0" opacity=".85" />
      <path d="M262 100 Q248 108 248 122 L276 122 Q276 108 262 100Z" fill="#8266C9" opacity=".8" />
      <circle cx="130" cy="120" r="26" fill="#F4C9A0" />
      <path d="M107 109 Q130 85 153 109 Q146 94 130 94 Q114 94 107 109Z" fill="#5B4636" />
      <path
        d="M118 131 q12 -6 24 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="120" cy="121" rx="3.5" ry="6" fill="#7A5A3E" />
      <ellipse cx="140" cy="121" rx="3.5" ry="6" fill="#7A5A3E" />
      <path d="M107 138 Q130 128 153 138 L158 200 L102 200 Z" fill="#E1615A" />
    </svg>
  );
}

function CyberbullyingIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="120" r="27" fill="#F4C9A0" />
      <path d="M125 109 Q150 83 175 109 Q167 93 150 93 Q133 93 125 109Z" fill="#5B4636" />
      <path
        d="M136 122 q6 2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M158 122 q6 2 12 0"
        stroke="#7A5A3E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M139 143 q11 -4 22 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M125 150 Q150 140 175 150 L180 200 L120 200 Z" fill="#6B6690" />
      <rect x="215" y="80" width="55" height="90" rx="8" fill="#2E2A4A" opacity=".85" />
      <rect x="221" y="88" width="43" height="65" rx="3" fill="#E1615A" opacity=".4" />
      <path
        d="M232 165 L253 165 M232 172 L248 172"
        stroke="#E1615A"
        strokeWidth="2.5"
        opacity=".7"
      />
    </svg>
  );
}

function SneakingDevicesIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M100 195 Q220 210 320 190"
        stroke="#D6A97B"
        strokeWidth="10"
        strokeLinecap="round"
        opacity=".4"
      />
      <circle cx="150" cy="120" r="26" fill="#F4C9A0" />
      <path d="M126 109 Q150 85 174 109 Q167 94 150 94 Q133 94 126 109Z" fill="#5B4636" />
      <ellipse cx="139" cy="121" rx="3.5" ry="5" fill="#7A5A3E" />
      <ellipse cx="161" cy="121" rx="3.5" ry="5" fill="#7A5A3E" />
      <ellipse cx="150" cy="135" rx="6" ry="4" fill="#B4794F" />
      <path d="M126 143 Q150 133 174 143 L179 200 L121 200 Z" fill="#F08A3C" />
      <rect
        x="160"
        y="165"
        width="34"
        height="24"
        rx="4"
        fill="#2E2A4A"
        transform="rotate(-8 177 177)"
      />
    </svg>
  );
}

function ScreensAtDinnerIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="200" cy="185" rx="140" ry="16" fill="#D6A97B" opacity=".6" />
      <circle cx="140" cy="140" r="24" fill="#fff" stroke="#EAF3FC" strokeWidth="3" />
      <circle cx="140" cy="140" r="14" fill="#F08A3C" opacity=".6" />
      <circle cx="260" cy="140" r="24" fill="#fff" stroke="#EAF3FC" strokeWidth="3" />
      <circle cx="260" cy="140" r="14" fill="#2FA483" opacity=".6" />
      <rect x="175" y="95" width="50" height="70" rx="7" fill="#2E2A4A" />
      <rect x="181" y="102" width="38" height="50" rx="3" fill="#3E7FC1" opacity=".55" />
    </svg>
  );
}

function OnlineFriendshipsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="130" cy="115" r="25" fill="#F4C9A0" />
      <path d="M108 105 Q130 82 152 105 Q145 90 130 90 Q115 90 108 105Z" fill="#5B4636" />
      <path
        d="M119 128 q11 6 22 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="121" cy="116" rx="3" ry="5" fill="#7A5A3E" />
      <ellipse cx="139" cy="116" rx="3" ry="5" fill="#7A5A3E" />
      <path d="M105 135 Q130 125 155 135 L160 200 L100 200 Z" fill="#2C9EA6" />
      <rect x="220" y="70" width="60" height="90" rx="8" fill="#2E2A4A" />
      <rect x="227" y="78" width="46" height="64" rx="3" fill="#E8A93A" opacity=".55" />
      <circle cx="250" cy="98" r="10" fill="#F4C9A0" opacity=".85" />
      <path
        d="M235 120 Q250 108 265 120"
        stroke="#8266C9"
        strokeWidth="3"
        fill="none"
        opacity=".7"
      />
      <path
        d="M178 118 Q195 108 212 118"
        stroke="#E1615A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".6"
      />
    </svg>
  );
}

function OnlineSchoolDistractionIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="90"
        y="100"
        width="90"
        height="65"
        rx="5"
        fill="#fff"
        stroke="#EAF3FC"
        strokeWidth="3"
      />
      <path
        d="M100 115 L160 115 M100 128 L160 128 M100 141 L140 141"
        stroke="#D6A97B"
        strokeWidth="3"
        opacity=".5"
      />
      <circle cx="230" cy="115" r="24" fill="#F4C9A0" />
      <path d="M208 105 Q230 82 252 105 Q245 91 230 91 Q215 91 208 105Z" fill="#5B4636" />
      <path d="M240 100 L260 82" stroke="#F4C9A0" strokeWidth="8" strokeLinecap="round" />
      <circle cx="266" cy="76" r="8" fill="#F4C9A0" />
      <rect x="290" y="55" width="42" height="65" rx="6" fill="#2E2A4A" />
      <rect x="295" y="61" width="32" height="46" rx="3" fill="#E1615A" opacity=".5" />
      <ellipse cx="219" cy="127" rx="3" ry="5" fill="#7A5A3E" />
      <path
        d="M219 141 q10 4 20 0"
        stroke="#B4794F"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M205 150 Q230 140 255 150 L260 200 L200 200 Z" fill="#8266C9" />
    </svg>
  );
}

function AgeInappropriateContentIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="115" r="25" fill="#F4C9A0" />
      <path d="M128 105 Q150 82 172 105 Q165 90 150 90 Q135 90 128 105Z" fill="#5B4636" />
      <circle cx="139" cy="116" r="4" fill="#7A5A3E" />
      <circle cx="161" cy="116" r="4" fill="#7A5A3E" />
      <ellipse cx="150" cy="131" rx="6" ry="5" fill="#B4794F" />
      <path d="M128 138 Q150 128 172 138 L177 200 L123 200 Z" fill="#E8A93A" />
      <rect x="220" y="80" width="60" height="90" rx="8" fill="#2E2A4A" opacity=".9" />
      <rect x="227" y="88" width="46" height="64" rx="3" fill="#6B6690" opacity=".5" />
      <circle cx="250" cy="120" r="18" fill="none" stroke="#E1615A" strokeWidth="4" />
      <line
        x1="238"
        y1="132"
        x2="262"
        y2="108"
        stroke="#E1615A"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InAppPurchasesIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="150" cy="112" r="26" fill="#F4C9A0" />
      <path d="M126 101 Q150 76 174 101 Q167 86 150 86 Q133 86 126 101Z" fill="#5B4636" />
      <ellipse cx="140" cy="113" rx="4" ry="6" fill="#7A5A3E" />
      <ellipse cx="160" cy="113" rx="4" ry="6" fill="#7A5A3E" />
      <ellipse cx="150" cy="130" rx="8" ry="7" fill="#E8A93A" />
      <path d="M126 138 Q150 128 174 138 L179 200 L121 200 Z" fill="#3E7FC1" />
      <rect x="195" y="140" width="60" height="45" rx="8" fill="#2E2A4A" />
      <rect x="201" y="147" width="48" height="31" rx="3" fill="#F08A3C" opacity=".5" />
      <circle cx="285" cy="100" r="20" fill="#E8A93A" />
      <text
        x="278"
        y="108"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#fff"
      >
        $
      </text>
    </svg>
  );
}

/**
 * Registry mapping each topic's `illustrationId` to its illustration
 * component. Every illustration is authored as real JSX (not raw SVG
 * strings), so nothing here ever touches `dangerouslySetInnerHTML`.
 */
export const illustrationRegistry: Record<string, (props: IllustrationProps) => JSX.Element> = {
  'brushing-teeth': BrushingTeethIllustration,
  'wake-up': WakeUpIllustration,
  'five-more-minutes': FiveMoreMinutesIllustration,
  bath: BathIllustration,
  'getting-dressed': GettingDressedIllustration,
  'combing-hair': CombingHairIllustration,
  breakfast: BreakfastIllustration,
  'slow-mornings': SlowMorningsIllustration,
  school: SchoolIllustration,
  'crying-leaving': CryingLeavingIllustration,
  'postpone-homework': PostponeHomeworkIllustration,
  'sit-still': SitStillIllustration,
  distracted: DistractedIllustration,
  'takes-hours': TakesHoursIllustration,
  'difficult-subjects': DifficultSubjectsIllustration,
  reading: ReadingIllustration,
  'careless-mistakes': CarelessMistakesIllustration,
  forgetting: ForgettingIllustration,
  'give-up': GiveUpIllustration,
  'do-it-later': DoItLaterIllustration,
  'picky-eater': PickyEaterIllustration,
  vegetables: VegetablesIllustration,
  'junk-food': JunkFoodIllustration,
  'meals-forever': MealsForeverIllustration,
  snacks: SnacksIllustration,
  water: WaterIllustration,
  'stops-eating': StopsEatingIllustration,
  sweets: SweetsIllustration,
  'same-food': SameFoodIllustration,
  'play-with-food': PlayWithFoodIllustration,
  'talking-back': TalkingBackIllustration,
  'not-listening': NotListeningIllustration,
  'public-tantrums': PublicTantrumsIllustration,
  'hitting-siblings': HittingSiblingsIllustration,
  sharing: SharingIllustration,
  interrupting: InterruptingIllustration,
  lying: LyingIllustration,
  'testing-limits': TestingLimitsIllustration,
  'meltdowns-change': MeltdownsChangeIllustration,
  whining: WhiningIllustration,
  'refusing-apology': RefusingApologyIllustration,
  clinginess: ClinginessIllustration,
  bossiness: BossinessIllustration,
  'following-instructions': FollowingInstructionsIllustration,
  'sore-loser': SoreLoserIllustration,
  'big-feelings': BigFeelingsIllustration,
  'crying-easily': CryingEasilyIllustration,
  'fear-of-dark': FearOfDarkIllustration,
  'drop-off-anxiety': DropOffAnxietyIllustration,
  'sibling-jealousy': SiblingJealousyIllustration,
  'anger-outbursts': AngerOutburstsIllustration,
  perfectionism: PerfectionismIllustration,
  shyness: ShynessIllustration,
  sadness: SadnessIllustration,
  'fear-of-new-things': FearOfNewThingsIllustration,
  embarrassment: EmbarrassmentIllustration,
  worry: WorryIllustration,
  'difficulty-calming-down': DifficultyCalmingDownIllustration,
  'empathy-development': EmpathyDevelopmentIllustration,
  'mood-swings': MoodSwingsIllustration,
  'screen-time-ends': ScreenTimeEndsIllustration,
  'asking-for-device': AskingForDeviceIllustration,
  'youtube-obsession': YoutubeObsessionIllustration,
  'video-games': VideoGamesIllustration,
  'social-media-pressure': SocialMediaPressureIllustration,
  'screens-before-bed': ScreensBeforeBedIllustration,
  'boredom-without-screens': BoredomWithoutScreensIllustration,
  'comparing-to-influencers': ComparingToInfluencersIllustration,
  cyberbullying: CyberbullyingIllustration,
  'sneaking-devices': SneakingDevicesIllustration,
  'screens-at-dinner': ScreensAtDinnerIllustration,
  'online-friendships': OnlineFriendshipsIllustration,
  'online-school-distraction': OnlineSchoolDistractionIllustration,
  'age-inappropriate-content': AgeInappropriateContentIllustration,
  'in-app-purchases': InAppPurchasesIllustration,
};

export function getIllustration(id: string) {
  return illustrationRegistry[id];
}
