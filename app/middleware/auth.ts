// auth.ts
import { useEffect } from "react";
import { useRouter } from "next/router";
import tokenhandle from "../common/tokenhandle";

export const useAuth = () => {
  const token = tokenhandle.getToken();

  return token; // Return the token
};
