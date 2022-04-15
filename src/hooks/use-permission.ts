import { useStore } from 'vuex';
export function usePermission(pageName: string, handleName: string) {
  const store = useStore();
  const permissions = store.state.login.permissions;
  const verifyPermission = `system:${pageName}:${handleName}`;
  console.log(permissions[3]);
  console.log(verifyPermission);
  return !!permissions.find((item: any) => item == verifyPermission);
}
