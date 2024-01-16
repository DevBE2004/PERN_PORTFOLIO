import axios from "../axios";

export const apiSendMail = (data) =>
  axios({
    url: "/portfolio/send-mail",
    method: "post",
    data,
  });
