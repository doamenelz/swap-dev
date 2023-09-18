import { Footer } from "../../../common/components/Footer";
import { PageLayout } from "../../../common/layouts/PageLayout";
import { SignUpBasic } from "../components/SignUpBasic";

export const SignUpLandingPage = () => {
  return (
    <PageLayout pageTitle="Sign Up">
      <div className="lg:fixed lg:inset-0 grid lg:grid-cols-2 lg:overscroll-none bg-pageBg ">
        <div className="my-12">
          <SignUpBasic />
        </div>

        <div className="relative hidden lg:block ">
          <img
            src={"https://source.unsplash.com/9ySEZ-ugtJA"}
            className={`object-cover rounded-tl-3xl w-full h-full`}
            alt={"alt"}
          />
        </div>
      </div>
    </PageLayout>
  );
};
