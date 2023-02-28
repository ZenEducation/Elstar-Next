import React from "react";
// import { Navigate } from 'react-router-dom'
// import Link from 'next/link'
import { useRouter } from "next/router";
import useAuthority from "utils/hooks/useAuthority";

const AuthorityGuard = (props) => {
  const navigate = useRouter();
  const { userAuthority = [], authority = [], children } = props;

  const roleMatched = useAuthority(userAuthority, authority);

  return roleMatched ? children : navigate.push("/access-denied");
};

export default AuthorityGuard;
