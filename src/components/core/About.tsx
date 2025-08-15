import { InViewReveal, RotateOnHover } from "@/components/animations";
import { Body100, Header200, Image, Link } from "@/components/shared";
import { Github, Linkedin } from "@/components/icons";
import ProfileImage from "/david.jpg";

export function About() {
  return (
    <InViewReveal className="flex flex-col gap-8 sm:flex-row sm:gap-10 md:gap-14">
      <div className="h-52 min-h-52 w-48 min-w-48 rounded-lg sm:h-48 sm:min-h-48 sm:w-44 sm:min-w-44 md:h-56 md:min-h-56 md:w-48 md:min-w-48">
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
          I'am a Software Engineer with three years of experience in full-stack
          web development, delivering high-quality solutions across both
          front-end and back-end systems. I'm a member of an amazing team at{" "}
          <Link
            href="https://togethercreative.co.uk"
            external={true}
            animated={true}
            className="text-white"
          >
            Together Creative
          </Link>
          , a happy husband & father, and a travel enthusiast.
        </Body100>

        <div className="mt-6 flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/davidbazashvili"
            external={true}
            className="h-6 w-6"
          >
            <RotateOnHover>
              <Linkedin />
            </RotateOnHover>
          </Link>
          <Link
            href="https://github.com/tc-david"
            external={true}
            className="h-6 w-6"
          >
            <RotateOnHover>
              <Github />
            </RotateOnHover>
          </Link>
        </div>
      </div>
    </InViewReveal>
  );
}
