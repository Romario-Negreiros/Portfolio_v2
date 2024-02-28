import Lottie from "react-lottie";

import type { Options, LottieProps } from "react-lottie";

interface Props extends Omit<LottieProps, "options"> {
  animationData: any;
}

export default function Animation({ animationData, ...props }: Props) {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} {...props} />
}
