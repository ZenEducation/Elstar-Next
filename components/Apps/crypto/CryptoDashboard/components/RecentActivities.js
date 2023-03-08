import React from "react";
import { Button } from "components/ui";
import RecentAcivity from "components/Apps/crypto/Portfolio/components/RecentAcivity";
// import { useNavigate } from 'react-router-dom'
import { useRouter } from "next/router";

const RecentActivities = (props) => {
  const navigate = useRouter();

  const handleClick = () => {
    navigate.push("/Apps/crypto/wallets");
  };

  return (
    <RecentAcivity
      title="Recent Activities"
      extra={
        <Button size="sm" onClick={handleClick}>
          Details
        </Button>
      }
      {...props}
    />
  );
};

export default RecentActivities;
