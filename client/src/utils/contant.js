import { icons } from "./icon";
import project_1 from "../assets/project_1.png";
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
    tech: "Nodejs, Express, Mongodb, React",
    name: "Ecommerce",
    description: "",
    image: "",
    link: "",
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
