import Link from "next/link";
import { projects } from "../../data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="projectPage">
        <Link href="/" className="backLink">
          ← Back
        </Link>
        <h1>Project not found.</h1>
      </main>
    );
  }

  return (
    <main className="projectPage">
      <Link href="/" className="backLink">
        ← Back to Portfolio
      </Link>

      <section className="projectHero">
        <p className="label">{project.type}</p>
        <h1>{project.title}</h1>
        <p>{project.short}</p>

        {project.live && (
          <a href={project.live} target="_blank" className="heroLiveButton">
            Visit Live Product →
          </a>
        )}
      </section>

      <section className="caseGrid">
        <div className="caseCard">
          <p className="label">Problem</p>
          <h2>What I noticed</h2>
          <span>{project.problem}</span>
        </div>

        <div className="caseCard">
          <p className="label">Solution</p>
          <h2>What I built / explored</h2>
          <span>{project.solution}</span>
        </div>

        <div className="caseCard">
          <p className="label">Impact</p>
          <h2>Why it matters</h2>
          <span>{project.impact}</span>
        </div>
      </section>

      <section className="projectDetailBox">
        <p className="label">Stack / Keywords</p>

        <div className="projectTags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {project.live && (
        <section className="productShowcase">
          <div>
            <p className="label">Live Product</p>
            <h2>Product currently live.</h2>
            <p>
              This project has a deployed website or landing page. Open it
              directly for the best experience.
            </p>

            <a href={project.live} target="_blank" className="liveButton">
              Visit Live Site →
            </a>
          </div>

          <div className="previewCard">
            <div className="previewTop">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="previewContent">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span>{project.short}</span>
            </div>
          </div>
        </section>
      )}

      {project.docs && project.docs.length > 0 && (
        <section className="docsShowcase">
          <div className="docsHeader">
            <div>
              <p className="label">Documentation</p>
              <h2>Proof of Work</h2>
            </div>

            <p>
              Pitch decks, validation notes, product screenshots, research
              references, and technical documentation.
            </p>
          </div>

          <div className="docsCarousel">
            {project.docs.map((doc) => (
              <a
                key={doc.title}
                href={doc.file}
                target="_blank"
                className="docPreviewCard"
              >
                <div className="docThumbnail">
                  {doc.thumbnail ? (
                    <img src={doc.thumbnail} alt={doc.title} />
                  ) : (
                    <div className="docFallback">
                      {doc.type.toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="docMeta">
                  <p>{doc.type.toUpperCase()}</p>
                  <h3>{doc.title}</h3>
                  <span>Open file →</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}