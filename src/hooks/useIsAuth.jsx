import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../redux/slices/authSlice";

function useIsAuth() {
  const { tokens, isAuth } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return useMemo(() => {
    if ( 
         Boolean(tokens.accessToken?.trim().length) &&
         Boolean(tokens.refreshToken?.trim().length)
      ) {
      console.log(true, "if trueeee");
      dispatch(setAuth(true))
      navigate("/products")
    }
    else {
      console.log(false, "if falseeee");
      dispatch(setAuth(false))
    }
    return isAuth
  }, [tokens])
}

export default useIsAuth;