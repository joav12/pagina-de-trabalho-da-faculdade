import About from "./about/about";
import Footer from "./footer/footer";
import Header from "./header/header";
import Members from "./members/members";
import Newsletter from "./newsletter/newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Members />
      <Newsletter />
      <Footer />
    </>
  );
}

