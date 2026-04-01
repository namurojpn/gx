import Link from 'next/link';
import { projects } from '@/data/projects';

export default function PurposeSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a4b8a] mb-2">
          申請を検討されている事業者の皆さまへ
        </h2>
        <div className="w-16 h-1 bg-[#1a4b8a] mb-10 rounded" />

        {/* 公募の目的 */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#1a4b8a] rounded inline-block" />
            公募の目的
          </h3>
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
            <p>
              本事業は、2050年カーボンニュートラルの実現及び地域貢献を目的として、脱炭素電源への投資を促進することを目指しています。
              再生可能エネルギーの導入拡大を通じて、地域における経済活性化や雇用創出にも貢献します。
            </p>
            <p>
              補助金の交付を通じて、太陽光発電設備、ペロブスカイト太陽電池、燃料電池、水電解装置等の
              脱炭素電源技術の普及・展開を支援します。
            </p>
          </div>
        </div>

        {/* 補助金対象事業 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#1a4b8a] rounded inline-block" />
            補助金対象事業
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/${project.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row lg:flex-col"
              >
                <div className="relative aspect-[16/9] sm:w-40 sm:shrink-0 lg:w-auto overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.cardImage}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-[#1a4b8a] bg-blue-50 px-2 py-0.5 rounded mb-2 self-start">
                    {project.shortName}
                  </span>
                  <p className="text-sm font-medium text-gray-800 leading-snug">{project.name}</p>
                  <span className="mt-3 text-xs text-[#1a4b8a] font-medium group-hover:underline">
                    詳細を見る →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
