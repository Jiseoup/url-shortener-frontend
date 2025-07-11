import { styled } from '@mui/material/styles';

import Button from '../../Common/Button';

export const ShortenButton = styled(Button)({
  background: 'linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '700',
  height: '56px',
  borderRadius: '8px',
  boxShadow: 'none',
  padding: '12px 24px',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  minWidth: '110px',
  '&:hover': {
    background: 'linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)',
    boxShadow: 'none',
  },
});
