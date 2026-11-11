# Landing page DrayTek ONT Vigor1100ax — AN PHÁT

**Chủ đề:** Router GPON Cân Bằng Tải Cho Doanh Nghiệp - DrayTek ONT Vigor1100ax

## Bàn giao

- `index.html`: nội dung landing page, SEO, các nút CTA, FAQ.
- `styles.css`: giao diện responsive, màu sắc AN PHÁT, hiệu ứng chiều sâu 3D.
- `script.js`: menu trên di động, hiệu ứng cuộn, chuyển động hero (tôn trọng Reduced Motion).
- `images/`: ảnh gốc thiết bị và logo đã tối ưu, hình tham khảo GPON/RJ45, **15 hình SVG minh họa** độc lập, sắc nét và phóng lớn không vỡ.

Toàn bộ hình trong trang dẫn bằng đường dẫn tương đối `images/...`. Website là HTML/CSS/JS thuần, không cần build hay cài package.

## Đưa lên GitHub Pages

1. Giải nén bộ file, **giữ nguyên cấu trúc thư mục**.
2. Upload toàn bộ nội dung (bao gồm `index.html`, `styles.css`, `script.js`, `images/`) lên **root** của repository, hoặc `/docs` nếu muốn xuất bản theo cách đó.
3. Vào **Settings → Pages → Build and deployment → Deploy from a branch**, chọn nhánh `main` và thư mục `/ (root)` (hoặc `/docs` nếu đã chọn).
4. Truy cập link GitHub Pages sau khi GitHub xác nhận triển khai.
5. Khi có domain chính thức, thêm thẻ canonical và thay `og:image` bằng URL tuyệt đối.

## Trước khi xuất bản thương mại

- Kiểm tra URL Google Form nhận tư vấn sẵn có trong bản HTML tham khảo (đã được giữ lại).
- Kiểm tra cập nhật firmware 5.4.0 và tính năng SSL VPN 16 kênh theo datasheet/release note phù hợp, nhất là khi cam kết triển khai.
- Xác nhận GPON ISP/OLT tương thích, cách đồng bộ SN/SLID/VLAN và chính sách nhà mạng.
- Lưu ý Load Balance không cộng gộp WAN cho một phiên TCP đơn lẻ; PON RX 2.488 Gbps khác NAT ~1 Gbps; Vigor1100ax không có cổng 2.5GbE.

## Hình sử dụng

- `images/vigor1100ax-product.webp` và `images/vigor1100ax-product-sm.webp`: lấy từ **ảnh thiết bị thật do bạn cung cấp**, giữ đủ 4 anten, không tái tạo model khác.
- `images/logo-anphat.png`: cắt khoảng trong suốt từ logo AN PHÁT do bạn cung cấp, không vẽ lại hoặc thay màu.
- `images/gpon-rj45-reference.webp`: tối ưu từ hình GPON/RJ45 được cung cấp.
- Các hình `diagram-*.svg`, `case-*.svg`: minh họa sơ đồ *mang tính khái niệm* và có thể tùy biến; không phải hình chụp WebUI hoặc thiết kế phần cứng thiết bị.

## Màu thương hiệu

`#1F6FD6` (xanh chính), `#1A4F9C` (xanh tiêu đề), `#F0F6FE` (nền), `#D9E4F5` (viền), `#E2231A` (đỏ điểm nhấn), `#14213D` (văn bản), `#4F5D75` (chú thích). Font đề xuất Be Vietnam Pro + Inter, được tải từ Google Fonts; có font dự phòng hệ thống.

## Liên hệ đang dùng

- Hotline `1900.633.641`
- Email `hotro@anphat.vn`
- Website `www.anphat.vn`
- Link Google Forms: thừa kế từ file mẫu `index(2).html`.

**Nguồn biên soạn nội dung:** `Vigor1100ax_Tong_Hop_2026-11-10.md` (ngày cập nhật 10/11/2026) và bản HTML người dùng cung cấp. Giữ nguyên phân biệt giữa thông số xác nhận trong nguồn và những điểm cần xác minh trước khi cam kết bán hàng.
