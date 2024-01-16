import React from "react";
import contact from "../../assets/contact.png";
import { Button, InputForm, InputText } from "../../components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { contactList } from "../../utils/contant";
import { apiSendMail } from "../../apis/app";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmitForm = async (data) => {
    const response = await apiSendMail({
      email: data.Email,
      name: data.Name,
      description: data.Description,
    });
    toast.success(response?.mes);
    reset();
  };
  return (
    <div className="w-full pt-8 pb-8 grid grid-cols-1 md:grid-cols-2 sm:px-10 md:px-32">
      <img
        src={contact}
        alt="contact"
        className="col-span-1 w-full h-full rounded-md object-fill"
      />
      <div className="col-span-1">
        <h2 className="px-2 font-semibold text-blue-500 text-3xl">
          Contact with me:
        </h2>
        <div className="flex items-center justify-center gap-4">
          {contactList.map((el) => (
            <Link key={el.id} target="_blank" to={el.path}>
              <span>{el.icon}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center text-xl p-2">
          <div className="border-black border-b w-full"></div>
          <span className="px-4">Or</span>
          <div className="border-black border-b w-full"></div>
        </div>
        <form>
          <InputForm
            register={register}
            errors={errors}
            id="Name"
            placeholder="Enter your name..."
            validate={{ required: "Filling Requirements" }}
          />
          <InputForm
            register={register}
            errors={errors}
            type="email"
            id="Email"
            placeholder="Enter your email..."
            validate={{ required: "Filling Requirements" }}
          />
          <InputText
            register={register}
            errors={errors}
            id="Description"
            placeholder="Enter your Description..."
            validate={{ required: "Filling Requirements" }}
          />
          <Button
            children="Submit"
            onClick={handleSubmit(onSubmitForm)}
            className="bg-blue-500 animate-none w-full hover:bg-green-500 hover:w-full"
            classNameContainer="w-full text-center mt-6 px-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
