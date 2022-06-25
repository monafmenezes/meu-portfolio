import { Grid } from "@mui/material";
import type { NextPage } from "next";
import { HomeContainer } from "../styles/styles";
import devImage from "../../public/images/dev.png";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <section>
        <div>
          <h3>
            Olá 👩‍💻, eu sou <span>Monalisa Menezes</span> FullStack Developer
          </h3>
        </div>
        <div >
          <Image
            src={devImage}
            alt="Desenvolvimento web"
            width={500}
            height={460}
          />
        </div>
      </section>
    </HomeContainer>
  );
};

export default Home;
