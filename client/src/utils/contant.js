import { icons } from "./icon";
import project_1 from "../assets/project_1.png";
import project_2 from "../assets/project2.png";
const {
  MdEmail,
  FaHome,
  RiContactsFill,
  GoProject,
  FaFacebookSquare,
  SiAboutdotme,
  MdWork,
  IoMdSchool,
  MdIndeterminateCheckBox,
  FaReact,
  FaHtml5,
  FaCss3,
  IoLogoJavascript,
  BiLogoTailwindCss,
  FaGithubSquare,
  SiExpress,
  FaNodeJs,
  SiRedis,
  SiRedux,
  DiPostgresql,
  SiFirebase,
  FaSquareInstagram,
} = icons;
export const navigationProfile = [
  {
    id: 1,
    path: "",
    icon: <FaHome title="Home" />,
    title: "Home",
  },
  {
    id: 2,
    path: "/about",
    icon: <SiAboutdotme title="About" />,
    title: "About",
  },
  {
    id: 3,
    path: "/work-experince",
    icon: <MdWork title="Work Experince" />,
    title: "Work Experince",
  },
  {
    id: 4,
    path: "/tech-stack",
    icon: <MdIndeterminateCheckBox title="Tech Stack" />,
    title: "Tech Stack",
  },
  {
    id: 5,
    path: "/education",
    icon: <IoMdSchool title="Education" />,
    title: "Education",
  },
  {
    id: 6,
    path: "/projects",
    icon: <GoProject title="Project" />,
    title: "Projects",
  },
  {
    id: 7,
    path: "/contact",
    icon: <RiContactsFill title="Contact" />,
    title: "Contact",
  },
];
export const techStackList = [
  {
    id: 1,
    name: "Javascript",
    path: "https://www.javascript.com/",
    icon: <IoLogoJavascript />,
  },
  {
    id: 2,
    name: "HTML",
    path: "https://html.com/",
    icon: <FaHtml5 />,
  },
  {
    id: 3,
    name: "CSS",
    path: "https://www.javascript.com/",
    icon: <FaCss3 />,
  },
  {
    id: 4,
    name: "React",
    path: "https://react.dev/",
    icon: <FaReact />,
  },
  {
    id: 5,
    name: "TailwindCss",
    path: "https://tailwindcss.com/",
    icon: <BiLogoTailwindCss />,
  },
  {
    id: 6,
    name: "Git/Github",
    // path: "",
    icon: <FaGithubSquare />,
    path: "https://github.com/",
  },
  {
    id: 7,
    name: "Express",
    // path: "",
    icon: <SiExpress />,
  },
  {
    id: 8,
    name: "Nodejs",
    // path: "",
    icon: <FaNodeJs />,
  },
  {
    id: 9,
    name: "Redis",
    // path: "",
    icon: <SiRedis />,
  },
  {
    id: 10,
    name: "Redux",
    // path: "",
    icon: <SiRedux />,
  },
  {
    id: 11,
    name: "Portgres",
    // path: "",
    icon: <DiPostgresql />,
  },
  {
    id: 12,
    name: "FireBase",
    // path: "",
    icon: <SiFirebase />,
  },
];
export const projectList = [
  {
    id: 1,
    tech: "Nodejs, Express, Mongodb, React",
    name: "Ecommerce",
    description:
      "Đây là một ứng dụng web hoàn chỉnh cho phép người dùng mua và bán sản phẩm trực tuyến. Dự án này bao gồm các chức năng như đăng ký và đăng nhập, quản lý sản phẩm, giỏ hàng, thanh toán và xử lý đơn hàng.",
    image: project_1,
    link: "https://e-commerce-project-le-anh-tus-projects.vercel.app/",
  },
  {
    id: 2,
    tech: "Nodejs, Express, Postgres, React",
    name: "Real Estate",
    description: `Dự án bất động sản viết bằng PERN là một ứng dụng web đầy đủ tính năng được thiết kế để quản lý thông tin và quy trình liên quan đến bất động sản. Ứng dụng này cung cấp các chức năng sau:

    Quản lý thông tin bất động sản: Người dùng có thể thêm, xem, sửa đổi và xóa thông tin về các căn hộ, nhà ở, đất đai, khu đô thị và các loại tài sản bất động sản khác. Thông tin chi tiết về tài sản bao gồm địa chỉ, mô tả, diện tích, giá trị, hình ảnh và thông tin liên hệ.
    
    Quản lý khách hàng: Ứng dụng cho phép quản lý thông tin về khách hàng, bao gồm tên, địa chỉ, thông tin liên hệ và lịch sử giao dịch. Người dùng có thể thêm, chỉnh sửa và xóa khách hàng khỏi hệ thống.
    
    Giao dịch và hợp đồng: Ứng dụng hỗ trợ quản lý giao dịch bất động sản và tạo hợp đồng liên quan. Người dùng có thể tạo và quản lý các hợp đồng mua bán, cho thuê, hoặc chuyển nhượng bất động sản. Thông tin về các giao dịch và hợp đồng bao gồm thông tin về tài sản, khách hàng, giá trị, điều kiện và thời hạn.
    
    Tìm kiếm và lọc: Người dùng có thể tìm kiếm và lọc thông tin bất động sản dựa trên các tiêu chí như địa điểm, loại tài sản, mức giá và diện tích. Điều này giúp người dùng dễ dàng tìm kiếm các tài sản phù hợp với nhu cầu và yêu cầu của họ.
    
    Báo cáo và thống kê: Ứng dụng cung cấp các báo cáo và thống kê về thông tin bất động sản và hoạt động giao dịch. Người dùng có thể xem và xuất báo cáo về doanh thu, tình trạng tài sản, khách hàng`,
    image: project_2,
    link: "https://real-estate-project-rust.vercel.app/",
  },
  {
    id: 3,
    tech: "Nodejs, Express, Mongodb, React",
    name: "Ecommerce",
    description: "",
    image: "",
    link: "",
  },
];
export const educationList = [
  {
    id: 1,
    date: "2022 - 2026",
    title: "MCA",
    description: "IIT Mumbai, IN",
  },
  {
    id: 2,
    date: "2022 - 2026",
    title: "BCA",
    description: "IIT Mumbai, IN",
  },
  {
    id: 3,
    date: "2022 - 2026",
    title: "Bằng đại học chuyên ngành công nghệ thông tin",
    description:
      "tốt nghiệp đại học tại trường ĐH giao thông vận tải Hồ Chí Minh ",
  },
];
export const contactList = [
  {
    id: 1,
    path: "https://www.facebook.com/tydz.2004/",
    icon: <FaFacebookSquare size={30} color="blue" />,
  },
  {
    id: 2,
    path: "https://github.com/DevBE2004",
    icon: <FaGithubSquare size={30} />,
  },
  {
    id: 3,
    path: "https://www.instagram.com/tule795/",
    icon: <FaSquareInstagram size={30} color="#d13282ff" />,
  },
  // { id: 4, path: "", icon: <MdEmail size={36} /> },
];
