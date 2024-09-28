import { useEffect, useRef } from "react";

function isEqual(prevDeps, currDeps) {
  if (!prevDeps) return false;

  if (prevDeps.length !== currDeps.length) return false;

  for (let i = 0; i < currDeps.length; i++) {
    if (prevDeps[i] !== currDeps[i]) return false;
  }

  return true;
}

const useCallbackCustom = (cb, deps) => {
  // Store the cb to memoize it
  const memoizedValue = useRef();

  //If deps has changed
  if (!memoizedValue.current || !isEqual(memoizedValue.current.deps, deps)) {
    memoizedValue.current = {
      value: cb,
      deps,
    };
  }

  //Clean up for component unmount
  useEffect(() => {
    return () => {
      memoizedValue.current = null;
    };
  }, []);

  //If deps has not changed
  return memoizedValue.current.value;
};

export default useCallbackCustom;
