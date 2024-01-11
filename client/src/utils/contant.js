import { icons } from "./icon";
import project_1 from "../assets/project_1.png";
const {
  FaHome,
  RiContactsFill,
  GoProject,
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
    icon: <IoLogoJavascript />,
  },
  {
    id: 2,
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 3,
    name: "CSS",
    icon: <FaCss3 />,
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact />,
  },
  {
    id: 5,
    name: "TailwindCss",
    icon: <BiLogoTailwindCss />,
  },
  {
    id: 6,
    name: "Git/Github",
    icon: <FaGithubSquare />,
  },
  {
    id: 7,
    name: "Express",
    icon: <SiExpress />,
  },
  {
    id: 8,
    name: "Nodejs",
    icon: <FaNodeJs />,
  },
  {
    id: 9,
    name: "Redis",
    icon: <SiRedis />,
  },
  {
    id: 10,
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    id: 11,
    name: "Portgres",
    icon: <DiPostgresql />,
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
