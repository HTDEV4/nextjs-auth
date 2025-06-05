"use client";

import React, { useState } from 'react';
import {
    Users,
    ShoppingCart,
    DollarSign,
    TrendingUp,
    Bell,
    Search,
    Settings,
    Home,
    Package,
    BarChart3,
    FileText,
    LogOut,
    Menu,
    X,
    ChevronDown,
    Eye,
    Edit,
    Trash2,
    Plus
} from 'lucide-react';

export default function AdminPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    const stats = [
        { title: 'Tổng người dùng', value: '12,543', change: '+12%', icon: Users, color: 'bg-blue-500' },
        { title: 'Đơn hàng', value: '1,234', change: '+8%', icon: ShoppingCart, color: 'bg-green-500' },
        { title: 'Doanh thu', value: '245M VNĐ', change: '+15%', icon: DollarSign, color: 'bg-purple-500' },
        { title: 'Tăng trưởng', value: '18.5%', change: '+3%', icon: TrendingUp, color: 'bg-orange-500' }
    ];

    const recentOrders = [
        { id: '#001', customer: 'Nguyễn Văn A', product: 'iPhone 15 Pro', amount: '25,000,000 VNĐ', status: 'Hoàn thành' },
        { id: '#002', customer: 'Trần Thị B', product: 'MacBook Air M3', amount: '32,000,000 VNĐ', status: 'Đang xử lý' },
        { id: '#003', customer: 'Lê Văn C', product: 'iPad Pro', amount: '22,000,000 VNĐ', status: 'Đang giao' },
        { id: '#004', customer: 'Phạm Thị D', product: 'AirPods Pro', amount: '6,500,000 VNĐ', status: 'Hoàn thành' },
        { id: '#005', customer: 'Hoàng Văn E', product: 'Apple Watch', amount: '12,000,000 VNĐ', status: 'Chờ xác nhận' }
    ];

    const menuItems = [
        { id: 'dashboard', label: 'Tổng quan', icon: Home },
        { id: 'users', label: 'Người dùng', icon: Users },
        { id: 'products', label: 'Sản phẩm', icon: Package },
        { id: 'orders', label: 'Đơn hàng', icon: ShoppingCart },
        { id: 'analytics', label: 'Phân tích', icon: BarChart3 },
        { id: 'reports', label: 'Báo cáo', icon: FileText },
        { id: 'settings', label: 'Cài đặt', icon: Settings }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Hoàn thành': return 'bg-green-100 text-green-800';
            case 'Đang xử lý': return 'bg-yellow-100 text-yellow-800';
            case 'Đang giao': return 'bg-blue-100 text-blue-800';
            case 'Chờ xác nhận': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out lg:static lg:inset-0`}>
                <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden text-white hover:bg-white/20 p-1 rounded"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="mt-8 px-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center px-4 py-3 text-left rounded-lg mb-2 transition-all duration-200 ${activeTab === item.id
                                ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <item.icon size={20} className="mr-3" />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <LogOut size={20} className="mr-3" />
                        Đăng xuất
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 lg:ml-0">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden mr-4 p-2 rounded-lg hover:bg-gray-100"
                            >
                                <Menu size={20} />
                            </button>
                            <h2 className="text-2xl font-semibold text-gray-800">Tổng quan</h2>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                                <Bell size={20} />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    3
                                </span>
                            </button>

                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">A</span>
                                </div>
                                <div className="hidden md:block">
                                    <p className="text-sm font-medium text-gray-700">Admin</p>
                                    <p className="text-xs text-gray-500">Quản trị viên</p>
                                </div>
                                <ChevronDown size={16} className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                        <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                                        <p className="text-sm text-green-600 mt-2 flex items-center">
                                            <TrendingUp size={16} className="mr-1" />
                                            {stat.change}
                                        </p>
                                    </div>
                                    <div className={`${stat.color} p-3 rounded-xl`}>
                                        <stat.icon size={24} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Orders */}
                        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-900">Đơn hàng gần đây</h3>
                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                    Xem tất cả
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Mã đơn
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Khách hàng
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Sản phẩm
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Số tiền
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Trạng thái
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Hành động
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {order.id}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {order.customer}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {order.product}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {order.amount}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div className="flex space-x-2">
                                                        <button className="text-blue-600 hover:text-blue-900">
                                                            <Eye size={16} />
                                                        </button>
                                                        <button className="text-green-600 hover:text-green-900">
                                                            <Edit size={16} />
                                                        </button>
                                                        <button className="text-red-600 hover:text-red-900">
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-900">Thao tác nhanh</h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                                    <Plus size={20} className="mr-2" />
                                    Thêm sản phẩm mới
                                </button>
                                <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200">
                                    <Users size={20} className="mr-2" />
                                    Thêm người dùng
                                </button>
                                <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200">
                                    <FileText size={20} className="mr-2" />
                                    Tạo báo cáo
                                </button>
                                <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200">
                                    <Settings size={20} className="mr-2" />
                                    Cài đặt hệ thống
                                </button>
                            </div>

                            {/* Recent Activity */}
                            <div className="border-t border-gray-100 p-6">
                                <h4 className="text-sm font-semibold text-gray-900 mb-4">Hoạt động gần đây</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-sm text-gray-600">Đơn hàng #001 đã được hoàn thành</p>
                                            <p className="text-xs text-gray-400">2 phút trước</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-sm text-gray-600">Người dùng mới đã đăng ký</p>
                                            <p className="text-xs text-gray-400">5 phút trước</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-sm text-gray-600">Sản phẩm iPhone 15 sắp hết hàng</p>
                                            <p className="text-xs text-gray-400">10 phút trước</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
}