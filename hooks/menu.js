import { useRequest } from "ahooks";

async function getMenuItems() {
  return menuItems;
}

export function useMenuItems() {
  const { data, error, loading } = useRequest(getMenuItems);

  return {
    data,
    error,
    loading,
  };
}
