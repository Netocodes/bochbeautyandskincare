import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  // lenis options for configuration

  const lenisOptions = {
    lerp: 0.3,
    duration: 0.2,
    smoothTouch: true, //smooth scroll for touch devices
    smooth: false,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
