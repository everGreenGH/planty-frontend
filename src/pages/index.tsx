import Textfield from "~/components/atoms/Textfield/Textfield";
import { Header } from "~/layout/common/Header/Header";

export const Home = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full flex-col items-start">
        <Header />
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <span className="text-60/landing">Hello, Planty! 🌱</span>
          <Textfield />
        </div>
      </div>
    </div>
  );
};

export default Home;
