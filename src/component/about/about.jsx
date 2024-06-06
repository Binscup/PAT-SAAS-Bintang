import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Comunity of Care",
    description:
      "We are a Community of Care that values respect and inclusivityDesigned by Good Goods, Inc.",
  },
  {
    name: "Engaging with Indonesia",
    description:
      "We engage with Indonesia through collaborative teacher-training programs and the JIS Bhinneka Tunggal Ika (BTI) student scholarship",
  },
  {
    name: "Creating Change",
    description:
      "Creating change alongside service organizations in and out of the classroom",
  },
  {
    name: "Environmental Custodians",
    description:
      "We are serving as environmental custodians for a sustainable future",
  },
  {
    name: "Fostering Wellness",
    description:
      "Promoting wellness for physical, emotional, and creative growth",
  },
  {
    name: "Working with & for the community",
    description:
      "We are working with and for the community as partners in service learning.",
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white- sm:text-4xl">
                What Does It Mean To Be Best For The World?
              </h2>
              <p className="mt-4 text-gray-500">
                Our mission is to “learn in Indonesia to be Best for the World.”
                It means we emphasize creating positive change in our community,
                wherever we are.
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://resources.finalsite.net/images/f_auto,q_auto/v1657263381/jiseduorg/mhpcynz3z7uxxaj65ms9/Community-of-Care---Image-Button.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://resources.finalsite.net/images/f_auto,q_auto/v1687749768/jiseduorg/qepy5igxhsgz7sdkipnv/Principal-Shadowing-at-JIS.jpg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://resources.finalsite.net/images/f_auto,q_auto/v1687749768/jiseduorg/qepy5igxhsgz7sdkipnv/Principal-Shadowing-at-JIS.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://resources.finalsite.net/images/f_auto,q_auto/v1687399428/jiseduorg/yeecgafuu8qb0xsmvrhi/Environment-Custodian---Image-Button.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
