import React from "react";

interface WebAuthnIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const WebAuthnIcon = ({ size = 24, className = '', style, ...props }: WebAuthnIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
    style={style}
    {...props}
  >
    {/* WebAuthn/FIDO2 icon - fingerprint with shield representing biometric security */}
    {/* Shield outline */}
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.67-3.13 8.98-7 10.14-3.87-1.16-7-5.47-7-10.14V6.3l7-3.12z" fill="currentColor"/>
    {/* Fingerprint inside shield */}
    <path d="M12 7c-2.21 0-4 1.79-4 4v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-1.1.9-2 2-2s2 .9 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-2.21-1.79-4-4-4z" fill="currentColor"/>
    <path d="M12 9c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-1.1-.9-2-2-2z" fill="currentColor" opacity="0.7"/>
    <circle cx="12" cy="13" r="1.5" fill="currentColor"/>
  </svg>
);

export default WebAuthnIcon;

