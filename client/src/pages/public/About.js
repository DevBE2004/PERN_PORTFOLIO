import React from "react";
import avatar from "../../assets/avatar.png";

const About = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-8 pt-10">
      <img
        src={avatar}
        alt="avatar"
        className="col-span-1 w-full h-full object-fill rounded-md"
      />
      <div className="col-span-1 border-r-0 sm:border-r-2 border-b-2 border-gray-400 sm:border-gray-400">
        <h2 className="text-3xl font-semibold italic text-center text-blue-400">
          About me
        </h2>
        <p className="text-xl">
          Tôi là một lập trình viên PERN (PostgreSQL, Express, React, Node.js)
          với kinh nghiệm đa mặt trong cả frontend và backend development. Tôi
          có kiến thức sâu về PostgreSQL và đã xây dựng và quản lý cơ sở dữ liệu
          hiệu quả. Sử dụng Express và Node.js, tôi đã tạo ra các API và
          endpoints mạnh mẽ để truy xuất dữ liệu từ cơ sở dữ liệu. Tôi cũng có
          kỹ năng trong việc xử lý yêu cầu và tích hợp dữ liệu giữa frontend và
          backend. Đặc biệt, tôi đam mê việc sử dụng React để xây dựng giao diện
          người dùng tương tác. Tôi có kỹ năng quản lý trạng thái ứng dụng và
          tương tác với các API bên ngoài. Mục tiêu của tôi luôn là cung cấp
          trải nghiệm người dùng tốt nhất và tạo ra các ứng dụng web chất lượng
          cao. Nếu bạn đang tìm kiếm một lập trình viên PERN nhiệt huyết và đa
          tài, tôi sẵn lòng tham gia vào các dự án thú vị và đóng góp vào sự
          thành công của chúng.
        </p>
      </div>
    </div>
  );
};

export default About;
