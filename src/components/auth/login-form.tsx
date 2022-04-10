//import Alert from "../ui/alert";
import Button from "../ui/button";
import Input from "../ui/input";
import PasswordInput from "../ui/password-input";
import { useRouter } from "next/router";
//import { useState } from "react";
import { useForm } from "react-hook-form";
//import { ROUTES } from "@utils/routes";
//import { useLoginMutation } from "@data/user/use-login.mutation";
import { useTranslation } from "next-i18next";
import { ROUTES } from "../../utils/route";
//import { yupResolver } from "@hookform/resolvers/yup";
//import * as yup from "yup";
//import Link from "../ui/link";
//import Alert from "../ui/alert";
//import { allowedRoles, hasAccess, setAuthCredentials } from "@utils/auth-utils";

type FormValues = {
  email: string;
  password: string;
};
// const loginFormSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email("form:error-email-format")
//     .required("form:error-email-required"),
//   password: yup.string().required("form:error-password-required"),
// });
const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  //const { mutate: login, isLoading: loading } = useLoginMutation();
  //const [errorMsg, setErrorMsg] = useState("");
  const { t } = useTranslation();
  const router = useRouter();
  console.log(router, 'route')
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    //resolver: yupResolver(loginFormSchema),
  });
  //const router = useRouter();

  function onSubmit({ email, password }: FormValues) {
    console.log('hello', email, password)
    router.push(`${ROUTES.DASHBOARD}`)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label={t("Email")}
          {...register("email")}
          placeholder={'admin'}
          type="email"
          variant="outline"
          className="mb-5"
          error={t(errors?.email?.message!)}
        />
        <PasswordInput
          label={t("Password")}
          // forgotPassHelpText={t("form:input-forgot-password-label")}
          {...register("password")}
          placeholder={'admin'}
          error={t(errors?.password?.message!)}
          variant="outline"
          className="mb-5"
          forgotPageLink="/forgot-password"
        />
        <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >
         {/* loading={loading} disabled={loading}> */}
          {t("LOGIN")}
        </Button>

        {/* <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8">
          <hr className="w-full" />
          <span className="absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light">
            {t("OR")}
          </span>
        </div>

        <div className="text-sm sm:text-base text-body text-center">
          {t("No Account")}{" "}
          <Link
            href="/register"
            className="ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-700 hover:no-underline focus:no-underline"
          >
            {t("Register")}
          </Link>
        </div> */}

        {/* {errorMsg ? (
          <Alert
            message={t(errorMsg)}
            variant="error"
            closeable={true}
            className="mt-5"
            onClose={() => setErrorMsg("")}
          />
        ) : null} */}
      </form>
    </>
  );
};

export default LoginForm;
