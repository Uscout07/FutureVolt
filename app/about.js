export default function About() {
  return (
    <div className="py-16 bg-[#EDD382]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">About ElectriPro</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/api/placeholder/500/300" alt="About ElectriPro" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="mb-4">
              ElectriPro is a team of skilled electricians dedicated to providing top-notch electrical services to our community. 
              With years of experience and a commitment to excellence, we ensure that every job is done right the first time.
            </p>
            <p className="mb-4">
              Our mission is to deliver safe, reliable, and efficient electrical solutions for homes and businesses. 
              We pride ourselves on our attention to detail, customer service, and staying up-to-date with the latest electrical technologies and safety standards.
            </p>
            <a href="/contact" className="bg-[#FF521B] hover:bg-[#FC9E4F] text-white font-bold py-2 px-4 rounded">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
  