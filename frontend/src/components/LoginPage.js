import React from "react";

const LoginPage = () => {
  const handleLogin = () => {
    // Redirect to the backend login endpoint
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-2xl shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back!</h2>
        <p className="text-gray-500 mb-8">
          Sign in to access your account and explore our features.
        </p>
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-gray-500 text-white font-medium rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 flex items-center justify-center space-x-4 transform hover:scale-105"
        >
          <img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt="Google Logo"
            className="w-5 h-5" // Slightly smaller logo for a cleaner look
          />
          <span className="text-base font-semibold">Continue with Google</span>
        </button>
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;