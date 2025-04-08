interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isFilled?: boolean;
}

const Button = ({ children, isFilled = false, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${props.className} ${isFilled ? 'bg-[#fff] text-[#000]' : 'text-[#000]'}`}>{children}</button>
  )
}

export default Button;