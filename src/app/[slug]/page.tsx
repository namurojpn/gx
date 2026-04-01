import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* パンくずリスト */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-[#1a4b8a] transition-colors">
                トップ
              </Link>
              <span>›</span>
              <span className="text-gray-700">公募概要（{project.name}）</span>
            </nav>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[3/1] max-h-72 overflow-hidden bg-gray-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cardImage}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent flex items-center">
            <div className="px-8 sm:px-16">
              <span className="text-white/80 text-sm font-medium">{project.shortName}</span>
              <h1 className="text-white text-2xl sm:text-3xl font-bold mt-1">{project.name}</h1>
            </div>
          </div>
        </div>

        {/* ページ内ナビ */}
        <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex overflow-x-auto gap-0">
              {[
                { href: '#summary', label: '公募概要' },
                { href: '#downloads', label: '資料ダウンロード' },
                { href: '#period', label: '公募期間' },
                { href: '#apply', label: '応募申請' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="shrink-0 px-4 sm:px-6 py-4 text-sm font-medium text-gray-600 hover:text-[#1a4b8a] hover:border-b-2 hover:border-[#1a4b8a] transition-all whitespace-nowrap"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          {/* 公募概要 */}
          <section id="summary">
            <SectionTitle>公募概要</SectionTitle>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mt-6">
              <table className="w-full">
                <tbody className="divide-y divide-gray-100">
                  <TableRow label="予算額">
                    約83,300,000,000円（全区分合計）
                  </TableRow>
                  <TableRow label="補助対象">
                    設計費、建物等取得費、設備費、システム整備費
                  </TableRow>
                  <TableRow label="補助率">
                    最大2/3
                  </TableRow>
                  <TableRow label="事業期間">
                    交付決定日〜令和11年12月31日
                  </TableRow>
                  <TableRow label="対象事業">
                    {project.name}
                  </TableRow>
                </tbody>
              </table>
            </div>
          </section>

          {/* 資料ダウンロード */}
          <section id="downloads">
            <SectionTitle>資料ダウンロード</SectionTitle>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                disabled
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed border border-gray-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                公募要領（後日公開予定）
              </button>
              <button
                disabled
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed border border-gray-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                申請様式（後日公開予定）
              </button>
            </div>
          </section>

          {/* 公募期間 */}
          <section id="period">
            <SectionTitle>公募期間</SectionTitle>
            <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <table className="w-full">
                <tbody className="divide-y divide-gray-100">
                  <TableRow label="公募開始">
                    2026年（令和8年）3月27日（金）
                  </TableRow>
                  <TableRow label="公募締切">
                    <span className="font-semibold text-red-600">
                      2026年（令和8年）5月12日（火）正午
                    </span>
                  </TableRow>
                </tbody>
              </table>
            </div>
          </section>

          {/* 応募申請 */}
          <section id="apply">
            <SectionTitle>応募申請</SectionTitle>
            <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#1a4b8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">jGrants（電子申請システム）による申請</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    本事業への応募申請は、経済産業省の補助金申請システム「jGrants」を通じてオンラインで行っていただきます。
                    申請にはGビズIDの取得が必要です。事前に準備をお願いします。
                  </p>
                </div>
              </div>
              <a
                href="https://jgrants.go.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1a4b8a] hover:bg-[#2680c8] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm"
              >
                jGrants申請ページへ
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-1.5 h-8 bg-[#1a4b8a] rounded" />
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{children}</h2>
    </div>
  );
}

function TableRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <tr className="flex flex-col sm:flex-row">
      <th className="sm:w-40 shrink-0 px-5 py-3 text-sm font-semibold text-left bg-gray-50 text-[#1a4b8a]">
        {label}
      </th>
      <td className="flex-1 px-5 py-3 text-sm text-gray-700">{children}</td>
    </tr>
  );
}
