import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Footer() {
  return (
    <footer className="bg-[#1a4b8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Site Info */}
          <div>
            <h3 className="font-bold text-lg mb-2">
              脱炭素電源地域貢献型<br />投資促進事業 2026
            </h3>
            <p className="text-blue-200 text-sm mt-3">
              令和8年度「脱炭素電源地域貢献型投資促進事業」
            </p>
            <p className="text-blue-200 text-sm mt-1">
              運営：経済産業省
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-blue-100">ナビゲーション</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-blue-200 hover:text-white transition-colors">
                  トップページ
                </Link>
              </li>
              <li>
                <a href="#news" className="text-sm text-blue-200 hover:text-white transition-colors">
                  NEWS・お知らせ
                </a>
              </li>
              <li>
                <a href="#overview" className="text-sm text-blue-200 hover:text-white transition-colors">
                  事業概要
                </a>
              </li>
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-blue-100">事業区分</h4>
            <ul className="space-y-2">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="text-sm text-blue-200 hover:text-white transition-colors">
                    {p.shortName}：{p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © 2026 脱炭素電源地域貢献型投資促進事業. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
