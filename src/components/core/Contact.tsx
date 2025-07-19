import { InViewReveal, RotateOnHover } from "@/components/animations";
import { Body100, Header100, Link } from "@/components/shared";
import { Linkedin, Telegram, Whatsapp } from "@/components/icons";
import { useWindowSize } from "@/hooks";

export function Contact() {
  const { width } = useWindowSize();

  return (
    <section>
      <InViewReveal>
        <Header100>Get In Touch</Header100>
        <Body100 className="mt-3 max-w-2xl">
          I'm currently working with the amazing team at{" "}
          <Link
            href="https://togethercreative.co.uk"
            external={true}
            animated={true}
            className="text-white"
          >
            Together Creative
          </Link>
          , but I'm always open to hearing about new opportunities and
          interesting projects. Whether you have a question, want to
          collaborate, or just want to say hello, I'd love to connect.
        </Body100>
      </InViewReveal>

      <div className="sm:items-cente mt-10 flex flex-col gap-4 sm:flex-row">
        <div className="order-2 flex items-center gap-4 sm:order-1">
          <InViewReveal delay={0.05}>
            <Link
              href="https://www.linkedin.com/in/davidbazashvili"
              external={true}
              className="h-6 w-6"
            >
              <RotateOnHover>
                <Linkedin />
              </RotateOnHover>
            </Link>
          </InViewReveal>
          <InViewReveal delay={0.1}>
            <Link
              href="https://www.linkedin.com/in/davidbazashvili"
              external={true}
              className="h-6 w-6"
            >
              <RotateOnHover>
                <Telegram />
              </RotateOnHover>
            </Link>
          </InViewReveal>
          <InViewReveal delay={0.15}>
            <Link
              href="https://www.linkedin.com/in/davidbazashvili"
              external={true}
              className="h-6 w-6"
            >
              <RotateOnHover>
                <Whatsapp />
              </RotateOnHover>
            </Link>
          </InViewReveal>
        </div>

        <InViewReveal
          delay={width < 640 ? 0.05 : 0.2}
          className="order-1 sm:order-2"
        >
          <Link
            href="mailto:davidbazashvili@gmail.com"
            external={true}
            animated={true}
          >
            davidbazashvili@gmail.com
          </Link>
        </InViewReveal>
      </div>
    </section>
  );
}
