import { newsItems } from '@/data/news';

export default function NewsSection() {
  return (
    <section id="news" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a4b8a]">NEWS</h2>
          <span className="text-sm text-gray-500">お知らせ</span>
        </div>

        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {newsItems.map((item, i) => (
            <div key={i} className="py-4 sm:flex sm:items-start sm:gap-6">
              <time className="shrink-0 text-sm text-gray-500 font-medium w-32">{item.date}</time>
              <p className="mt-1 sm:mt-0 text-sm text-gray-700 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
