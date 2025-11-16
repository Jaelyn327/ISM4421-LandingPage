import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-16">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
          Build Your Personalized AI Assistant in Minutes
        </h1>

        <p className="text-lg opacity-80 leading-relaxed">
          Create, customize, and launch AI-powered workflows without writing a
          single line of code. Transform your ideas into powerful automations
          instantly.
        </p>

        <a href="#get-started" className="btn btn-primary btn-wide">
          Get Started →
        </a>

        <TestimonialsAvatars priority={true} />
      </div>

      <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
          alt={`${config.appName} product demo`}
          priority={true}
          className="w-full"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
