import { toast } from 'react-toastify';

type NotifyType = 'info' | 'success' | 'warning' | 'error' | 'default';

export default function notify(message: string, type: NotifyType) {
  toast(message, {
    position: 'top-right',
    type: type,
    theme: 'colored'
  });
}