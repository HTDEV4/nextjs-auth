import Link from "next/link";

export default function Forbidden() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-red-100 overflow-hidden">
                    {/* Header with Icon */}
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 px-8 py-12 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-7V6a3 3 0 00-6 0v1.5M6 9h12l-1 9H7L6 9z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2">403</h1>
                        <p className="text-red-100 text-lg font-medium">Forbidden</p>
                    </div>

                    {/* Content */}
                    <div className="px-8 py-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Truy cập bị từ chối
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Bạn không có quyền truy cập trang này. Vui lòng liên hệ quản trị viên nếu bạn cho rằng đây là lỗi.
                        </p>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <Link href="/" className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                Quay về trang chủ
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Mã lỗi: FORBIDDEN_ACCESS_2024</span>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-500"></div>
            </div>
        </div>
    );
}