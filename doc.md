# Tổng quan về Authentication và Authorization

## Authentication (Xác thực)
- Mục đích: Xác minh danh tính người dùng.

- Quá trình: User đăng nhập bằng username/password hoặc các hình thức xác thực khác.

- Server: Sau khi xác thực thành công, server sẽ tạo một token (thường là JWT - JSON Web Token).

- Token: Token này được gửi về cho client (Front-End).

- Sử dụng: Khi Front-End muốn truy cập tài nguyên bảo mật, nó gửi token trong header (thường là Authorization: Bearer <token>) lên server.

- Server: Kiểm tra tính hợp lệ của token, nếu hợp lệ thì cho phép truy cập, ngược lại từ chối.

## Authorization (Phân quyền)
- Mục đích: Xác định user được phép làm gì, truy cập tài nguyên nào sau khi đã xác thực.

- Ví dụ: User A có thể xem, User B có thể sửa hoặc xóa.

- Thông thường: Server sẽ kiểm tra trong token hoặc trong cơ sở dữ liệu để xác định quyền hạn.

- Phân quyền: Có thể dựa trên vai trò (role-based), quyền hạn cụ thể (permission-based), hoặc các chính sách phức tạp hơn.

# Access Token và Refresh Token

## Access Token
- Chức năng: Dùng để truy cập các tài nguyên bảo mật trên server (API, dữ liệu người dùng, v.v.).

- Thời gian sống (TTL): Ngắn, thường từ 15 phút đến 1 giờ, để hạn chế rủi ro nếu token bị lộ.

- Lưu trữ (trên client): Có thể lưu trong memory, localStorage, hoặc sessionStorage (tuỳ chiến lược bảo mật).

- Gửi đi: Thường được gửi kèm trong header của request: Authorization: Bearer <access_token>

## Refresh Token
- Chức năng: Dùng để yêu cầu cấp lại Access Token mới khi token cũ hết hạn.

- Không được dùng để truy cập tài nguyên trên server.

- Thời gian sống: Dài hơn Access Token, thường là 7 ngày đến 30 ngày.

- Lưu trữ:
    - Lý tưởng: Lưu trong HTTPOnly Cookie (an toàn hơn, không bị tấn công XSS).
    - Hoặc lưu server-side (để dễ kiểm soát và thu hồi).

- Flow: Khi Access Token hết hạn → Gửi Refresh Token đến server → Server kiểm tra hợp lệ → Cấp Access Token mới.

## Luồng xử lí Access Token và Refresh Token
