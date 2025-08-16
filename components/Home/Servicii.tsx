import { servicii } from "@/helpers/Servicii";
import { Star, Terminal } from "lucide-react";
import { Card, CardBody } from "@heroui/card";

const pictures = ["picture1.jpg", "picture2.jpg", "picture3.jpg"];

function Servicii() {
  return (
    <section className="py-20 px-4 bg-slate-50" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Ce servicii îți{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            oferim?
          </span>
        </h2>
        <div className="space-y-16">
          {servicii.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <Card className="bg-background border-border hover:shadow-xl transition duration-300">
                  <CardBody className="p-8 ">
                    <div className="flex mb-4">
                      <h1 className="font-bold text-2xl">
                        {testimonial.title}
                      </h1>
                    </div>
                    <blockquote className="text-foreground mb-6 text-lg leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                  </CardBody>
                </Card>
              </div>

              {/* Image */}
              <div className="flex-1 max-w-md">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={pictures[index]}
                    alt={`${testimonial.author} - ${testimonial.role}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Servicii;
