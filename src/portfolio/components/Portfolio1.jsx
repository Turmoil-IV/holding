import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom"; // Import Link

export function Portfolio1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-deepSapphire-lightest">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Innovative Ventures Showcase
            </h2>
            <p className="md:text-md">
              Explore our diverse tech-focused portfolio companies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-20">
          <div>
            <div>
              <Link to="/project/tech-innovators">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-6 md:mt-6 md:grid-cols-[1fr_max-content] lg:gap-x-20">
              <div>
                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  <Link to="/project/tech-innovators">Tech Innovators Inc.</Link>
                </h3>
                <p>
                  Pioneering AI solutions for businesses across various industries.
                </p>
              </div>
              <div>
                {/* Wrap the Button with Link for navigation */}
                <Link to="/project/tech-innovators">
                  <Button
                    title="View project"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    View project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Link to="/project/green-energy">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-6 md:mt-6 md:grid-cols-[1fr_max-content] lg:gap-x-20">
              <div>
                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  <Link to="/project/green-energy">Green Energy Co.</Link>
                </h3>
                <p>
                  Transforming renewable energy solutions for a sustainable future.
                </p>
              </div>
              <div>
                  <Link to="/project/green-energy">
                  <Button
                    title="View project"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    View project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          {/* If you have a route for "View all projects" */}
          <Link to="/projects">
            <Button title="View all" variant="secondary" size="primary">
              View all
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
