import React from 'react';

export function Button({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'md', 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const variantStyles = {
    default: "bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-900",
    primary: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-300",
    ghost: "bg-transparent hover:bg-gray-100 focus-visible:ring-gray-300",
    link: "bg-transparent underline-offset-4 hover:underline focus-visible:ring-gray-300 text-red-600 hover:text-red-700"
  };
  
  const sizeStyles = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 py-3 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
