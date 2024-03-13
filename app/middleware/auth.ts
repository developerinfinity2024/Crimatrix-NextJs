// auth.ts
import tokenhandle from "../common/tokenhandle";

export const useAuth = () => {
  const token = tokenhandle.getToken();
  return token;
};
