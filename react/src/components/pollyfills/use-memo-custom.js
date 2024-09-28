import { useEffect, useRef } from "react";

function isEqual(prevDeps, currDeps) {
  if (!prevDeps) return false;

  if (prevDeps.length !== currDeps.length) return false;

  for (let i = 0; i < currDeps.length; i++) {
    if (prevDeps[i] !== currDeps[i]) return false;
  }

  return true;
}

const useMemoCustom = (memoizedFn, deps) => {
  // Store value in Ref
  const memoizedValue = useRef();

  // Check if dependancy array changed
  if (!memoizedValue.current || !isEqual(memoizedValue.current.deps, deps)) {
    memoizedValue.current = {
      value: memoizedFn(),
      deps,
    };
  }

  // Clean up when component unmounts for preventing data leaks

  useEffect(() => {
    return () => {
      memoizedFn.current = null;
    };
  }, []);

  //Return memoized value for no change in deps
  return memoizedValue.current.value;
};

export default useMemoCustom;
