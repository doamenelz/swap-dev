import {
  Button,
  ButtonLabel,
} from "../../../common/components/forms/Buttons/PrimaryButton";
import { PageLayout } from "../../../common/layouts/PageLayout";
import coa from "../../../common/assets/coa.png";
import { TextInput } from "../../../common/components/forms/Inputs/TextInput";
import { CheckBox } from "../../../common/components/forms/Inputs/CheckBox";
import { BUTTON_SKIN } from "../../../common/components/forms/Buttons/ButtonTypes";
import { Link } from "react-router-dom";
import { Footer } from "../../../common/components/Footer";

export const LoginPage = () => {
  return (
    <PageLayout pageTitle="Login">
      <div className="flex flex-col h-screen justify-between">
        <div className="mx-auto max-w-sm text-center space-y-6 mt-10">
          <img src={coa} alt="main-logo" className="w-16 h-16 mx-auto" />
          <h1 className="text-3xl font-semibold text-gray-700">
            Login into your account
          </h1>
          <p className=" text-gray-500">
            Welcome back, please provide your login details
          </p>

          <TextInput
            label="Email"
            placeHolder="Enter your email"
            id="email"
            type="email"
          />
          <TextInput
            label="Password"
            placeHolder="Enter your password"
            id="password"
            type="password"
          />
          <div className="flex justify-between items-center">
            <CheckBox
              id="rememberMe"
              label="Remember me for 30 days"
              handleChange={() => {}}
            />
            <Link className="text-sm text-primary-700 font-semibold" to={"/"}>
              Forgot Password
            </Link>
          </div>
          <Button label="Login" fillWidth />
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <span>
              <Link className="text-sm text-primary-700 font-semibold" to={"/"}>
                Sign up
              </Link>
            </span>
          </p>
        </div>
        <Footer />
      </div>
    </PageLayout>
  );
};
