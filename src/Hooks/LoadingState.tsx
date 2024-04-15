import { useState } from "react";

export function useLoadingState(
  initialState = false
): [boolean, () => void, () => void] {
  const [loading, setLoading] = useState(initialState);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return [loading, startLoading, stopLoading];
}
