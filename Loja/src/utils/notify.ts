import { toast } from "react-toastify";

type NotifyType = "info" | "success" | "warning" | "error" | "default";
type ThemeType = "light" | "dark" | "colored";

export default function notify(
  message: string,
  type: NotifyType,
  styleTheme: ThemeType
) {
  toast(message, {
    position: "top-right",
    type: type,
    theme: styleTheme,
  });
}
