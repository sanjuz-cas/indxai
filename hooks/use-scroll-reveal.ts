import { useEffect, useRef } from "react";

export function useScrollReveal(delay: number = 0) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add initial classes
    element.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700");
    if (delay) {
      element.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("opacity-0", "translate-y-8");
          element.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay]);

  return ref;
}
