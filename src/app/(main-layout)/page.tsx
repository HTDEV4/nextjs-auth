"use client"

import React, { useState } from 'react';
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  Star,
  ArrowRight,
  Play,
  Zap,
  Shield,
  Heart,
  ChevronLeft,
  ChevronRight,
  Globe,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: Zap,
      title: "Nhanh chóng",
      description: "Xử lý siêu nhanh với công nghệ tiên tiến nhất"
    },
    {
      icon: Shield,
      title: "Bảo mật",
      description: "Đảm bảo an toàn tuyệt đối cho dữ liệu của bạn"
    },
    {
      icon: Heart,
      title: "Thân thiện",
      description: "Giao diện đẹp mắt, dễ sử dụng cho mọi người"
    }
  ];

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "CEO, Tech Corp",
      content: "Sản phẩm tuyệt vời! Đã giúp công ty chúng tôi tăng hiệu suất làm việc lên 300%.",
      avatar: "A",
      rating: 5
    },
    {
      name: "Trần Thị B",
      role: "Marketing Director",
      content: "Interface đẹp, tính năng đầy đủ và support team rất nhiệt tình. Highly recommended!",
      avatar: "B",
      rating: 5
    },
    {
      name: "Lê Văn C",
      role: "Founder, StartupXYZ",
      content: "Từ khi sử dụng, doanh thu của chúng tôi đã tăng trưởng ổn định và bền vững.",
      avatar: "C",
      rating: 5
    }
  ];

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "29,990,000₫",
      originalPrice: "32,990,000₫",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "MacBook Air M3",
      price: "28,990,000₫",
      originalPrice: "31,990,000₫",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "iPad Pro 12.9",
      price: "24,990,000₫",
      originalPrice: "27,990,000₫",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "AirPods Pro",
      price: "5,990,000₫",
      originalPrice: "6,990,000₫",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c4749c?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 203
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechStore
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Trang chủ</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sản phẩm</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Dịch vụ</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Về chúng tôi</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Liên hệ</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <User size={20} />
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
                Đăng ký
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Trang chủ</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Sản phẩm</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Dịch vụ</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Về chúng tôi</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Liên hệ</a>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium">
                  Đăng ký
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Khám phá
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Công nghệ{" "}
                </span>
                Tương lai
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Trải nghiệm những sản phẩm công nghệ tiên tiến nhất với chất lượng đỉnh cao và dịch vụ hoàn hảo.
                Chúng tôi mang đến giải pháp toàn diện cho cuộc sống số của bạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center group">
                  Khám phá ngay
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold flex items-center justify-center">
                  <Play size={20} className="mr-2" />
                  Xem video
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                  alt="Technology"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn chúng tôi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm tốt nhất với những ưu điểm vượt trội
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-xl text-gray-600">
              Khám phá những sản phẩm công nghệ hàng đầu với giá tốt nhất
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-xl text-gray-600">
              Hàng nghìn khách hàng đã tin tương và lựa chọn chúng tôi
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  {testimonials[currentSlide].content}
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonials[currentSlide].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonials[currentSlide].name}</div>
                    <div className="text-gray-600">{testimonials[currentSlide].role}</div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu hành trình của bạn?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tham gia cộng đồng hàng triệu người dùng đã tin tưởng và lựa chọn chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              Dùng thử miễn phí
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="ml-3 text-xl font-bold">TechStore</span>
              </div>
              <p className="text-gray-400 mb-6">
                Đơn vị cung cấp công nghệ hàng đầu Việt Nam với chất lượng dịch vụ tuyệt vời.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Sản phẩm</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">iPhone</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MacBook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">iPad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Watch</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AirPods</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Dịch vụ</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bảo hành</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sửa chữa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hỗ trợ kỹ thuật</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đào tạo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tư vấn</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Liên hệ</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  123 Đường ABC, Quận 1, TP.HCM
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +84 123 456 789
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  info@techstore.vn
                </li>
                <li className="flex items-center">
                  <Globe size={16} className="mr-2" />
                  www.techstore.vn
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechStore. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
