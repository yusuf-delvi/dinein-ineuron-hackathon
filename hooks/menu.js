import { useRequest } from "ahooks";
import { menuItems } from "../dummy_data";

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
