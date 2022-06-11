import { useRequest } from "ahooks";

async function getMenuItems() {
  return fetch("/api/menu")
    .then((r) => r.json())
    .then((d) => d.dishes);
}

export function useMenuItems() {
  const { data, error, loading } = useRequest(getMenuItems);

  return {
    data,
    error,
    loading,
  };
}
