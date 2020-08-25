import React from "react";
import { Box } from "@material-ui/core";
import { Skeleton as MuiSkeleton } from "@material-ui/lab";
import Image from "material-ui-image";

const Skeleton = () => {
  return (
    <Box>
      <Box mb={1.5}>
        <SkeletonImage />
      </Box>
      <MuiSkeleton variant="text" width="100%" />
      <MuiSkeleton variant="text" width="50%" />
    </Box>
  );
};

const SkeletonImage = () => {
  return (
    <Box position="relative">
      <Image
        src=""
        onClick={() => console.log("onClick")}
        aspectRatio={315 / 240}
        disableSpinner
      />
      <Box
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="999"
      >
        <MuiSkeleton variant="rect" width="100%" height="100%" />
      </Box>
    </Box>
  );
};

export default Skeleton;
