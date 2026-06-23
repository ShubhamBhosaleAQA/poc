type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  color?: string;
};

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  color,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 10,
        backgroundColor: variant === 'primary' ? '#aabde4' : 'gray',
        margin: 10,
        color: color || 'black',
        alignSelf: 'flex-start',
        width: fullWidth ? '100%' : 'fit-content',
        padding:
          size === 'sm'
            ? '0.5rem'
            : size === 'md'
            ? '0.75rem'
            : '1rem',
      }}
    >
      {children}
    </button>
  );
};