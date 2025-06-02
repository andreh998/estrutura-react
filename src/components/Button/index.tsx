import { Button as MuiButton, Icon } from '@mui/material';

interface ButtonProp {
  icon?: string;
  text: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'warning';
  onClick: () => void;
}

export default function Button({ icon, text, disabled, size, color, onClick}: ButtonProp) {

  return (
    <MuiButton
      size={size}
      variant="contained"
      color={color}
      startIcon={<Icon>{ icon }</Icon>}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
}