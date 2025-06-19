import { Body100, Header200, Image, Link } from "@/components/shared";
import { Github, Linkedin } from "@/components/icons";
import ProfileImage from "/david.jpg";

export function About() {
  return (
    <section>
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-10 md:gap-14">
        <div className="h-52 min-h-52 w-48 min-w-48 rounded-lg sm:h-48 sm:min-h-48 sm:w-44 sm:min-w-44 md:h-56 md:min-h-56 md:w-52 md:min-w-52">
          <Image
            src={ProfileImage}
            alt="David Bazashvili"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        <div>
          <Header200 as="h1">David Bazashvili</Header200>
          <Body100 className="mt-0.5">Software Engineer</Body100>
          <Body100 className="mt-5">
            I help businesses and individuals transform their digital presence
            by developing efficient and user-friendly software solutions. I'm a
            member of an amazing team at{" "}
            <Link
              href="https://togethercreative.co.uk"
              external={true}
              animated={true}
              className="text-white"
            >
              Together Creative
            </Link>
            , a happy husband, and a travel enthusiast.
          </Body100>

          <div className="mt-6 flex items-center gap-4">
            <Linkedin />
            <Github />
          </div>
        </div>
      </div>
    </section>
  );
}
