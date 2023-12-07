export const metadata = {
  title: "Authentication | Genius",
  description: "AI SAAS platform, Authentication page",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex items-center justify-center h-full">{children}</div>
  );
};

export default AuthLayout;
