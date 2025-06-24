import {
  Body100,
  Chip,
  Header100,
  Header200,
  Image,
  Link,
} from "@/components/shared";
import { InViewReveal } from "@/components/animations";
import { projectsBuilt, projectsMainteined } from "@/constants";

export function Experience() {
  return (
    <section className="p-4">
      <InViewReveal>
        <Header100>What I build</Header100>
        <Body100 className="mt-1">
          Projects that I have either lead or been actively involved in building
          from ground zero / implementing breaking changes to existing services
        </Body100>
      </InViewReveal>

      <div className="mt-14 flex flex-col gap-14 sm:gap-10">
        {projectsBuilt.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>

      <InViewReveal>
        <Header100 className="mt-24">What I maintain</Header100>
        <Body100 className="mt-1">
          Projects that were built by other developers that I either maintain or
          help with bugfixes
        </Body100>
      </InViewReveal>

      <div className="mt-20 flex flex-col gap-14 sm:gap-10">
        {projectsMainteined.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

export interface ProjectProps {
  image: string;
  url: string;
  title: string;
  description: React.ReactNode;
  tech: string[];
}

function Project({ image, url, title, description, tech }: ProjectProps) {
  return (
    <InViewReveal>
      <Link
        href={url}
        external={true}
        className="!flex w-full cursor-pointer flex-col gap-6 rounded-lg outline-offset-8 duration-200 hover:scale-102 hover:outline-2 focus:scale-102 focus:outline-2 sm:flex-row sm:gap-10"
      >
        <Image
          src={image}
          alt="Bluedot Network"
          className="aspect-video h-36 w-full max-w-60 rounded-lg sm:h-24 sm:w-40 sm:max-w-80"
        />

        <div>
          <Header200>{title}</Header200>
          <Body100 className="mt-2">{description}</Body100>
          {tech.length > 0 && (
            <div className="mt-4 flex gap-2">
              {tech.map((tech, i) => (
                <Chip key={i}>{tech}</Chip>
              ))}
            </div>
          )}
        </div>
      </Link>
    </InViewReveal>
  );
}
