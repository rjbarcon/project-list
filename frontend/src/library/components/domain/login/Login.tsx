import { DefaultHeader } from "../../header";

export const Login = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      <div className="w-100 h-100 shadow-2xl rounded-xl">
        <DefaultHeader />

        <div className="flex items-center justify-center mt-10">
          <a
            className="bg-blue-600 text-white px-3 py-1 rounded"
            href="/api/auth/login"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};
