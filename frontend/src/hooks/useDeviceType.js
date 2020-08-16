import { useMediaQuery, useTheme } from "@material-ui/core";

export default function useDeviceType(type) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  switch (type) {
    case "tablet":
      return isTablet;

    default:
      return false;
  }
}
