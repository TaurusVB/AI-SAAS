import { UserButton } from "@clerk/nextjs";

const DashBoardPage = () => {
  return (
    <div>
      <p>Dashboard page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashBoardPage;
