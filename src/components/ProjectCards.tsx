import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectCards() {
  return (
    <section id="overview" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a4b8a] mb-3">事業区分</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            本事業は5つの事業区分に分かれています。各区分の詳細をご確認ください。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${project.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.cardImageWide}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="inline-block text-xs font-semibold text-[#1a4b8a] bg-blue-50 px-2 py-0.5 rounded mb-2">
                  {project.shortName}
                </span>
                <p className="text-sm font-medium text-gray-800 leading-snug">{project.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
