import Form from "./Form";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Login Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border p-6 sm:p-8 lg:p-10">
                    {/* Header */}
                    <div className="text-center mb-6 sm:mb-8">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                            Đăng nhập
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600">Chào mừng bạn trở lại!</p>
                    </div>

                    {/* Form */}
                    <Form />

                    {/* Divider */}
                    <div className="mt-6 sm:mt-8 flex items-center">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-3 sm:px-4 text-xs sm:text-sm text-gray-500 bg-white">hoặc</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Social Login */}
                    <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button className="flex items-center justify-center px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="text-xs sm:text-sm font-medium text-gray-700">Google</span>
                        </button>
                        <button className="flex items-center justify-center px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span className="text-xs sm:text-sm font-medium text-gray-700">Facebook</span>
                        </button>
                    </div>

                    {/* Sign up link */}
                    <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-600">
                        Chưa có tài khoản?{" "}
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                            Đăng ký ngay
                        </a>
                    </p>
                </div>

                {/* Footer */}
                <p className="mt-6 sm:mt-8 text-center text-xs text-gray-500 px-4">
                    Bằng cách đăng nhập, bạn đồng ý với{" "}
                    <a href="#" className="text-blue-600 hover:underline">Điều khoản dịch vụ</a>{" "}
                    và{" "}
                    <a href="#" className="text-blue-600 hover:underline">Chính sách bảo mật</a>
                </p>
            </div>
        </div>
    );
}