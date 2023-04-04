import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    window.location.href = `mailto:abellan.antony@gmail.com?subject={formdata.subject}&body=Hi, my nanme is ${formdata.name}. ${formdata.message} (${formdata.email})`;
  };

  return (
    <div className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      {" "}
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl  md:text-lg">
        Contact
      </h3>
      <div className="flex flex-col space-y-5 md:space-y-7 xl:space-y-10">
        <h4 className="text-lg xl:text-xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#00CAD5] underline">Lets talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#00CAD5] h-7 w-7 animate-pulse" />
            <p className="text-lg xl:text-xl">06.29.39.35.95</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#00CAD5] h-7 w-7 animate-pulse" />
            <p className="text-lg xl:text-xl">abellan.antony@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#00CAD5] h-7 w-7 animate-pulse" />
            <p className="text-lg xl:text-xl">123 developer Lane</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex flex-col gap-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#00CAD5] py-5 px-10 rounded-md text-black font-bold"
            >
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
