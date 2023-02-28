import { useMemo } from "react";
// import { useLocation } from 'react-router-dom'
import { useRouter } from "next/router";
export default function useQuery() {
  const { search } = useRouter();
  return useMemo(() => new URLSearchParams(search), [search]);
}
