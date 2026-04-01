import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ProjectCards from '@/components/ProjectCards';
import NewsSection from '@/components/NewsSection';
import PurposeSection from '@/components/PurposeSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Slider */}
        <HeroSlider />

        {/* 事業概要テキストセクション */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1a4b8a] to-[#2680c8]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              本事業は2050年のカーボンニュートラル実現及び地域貢献を目的とし、<br className="hidden sm:block" />
              脱炭素電源への投資を促進することを目指します。
            </p>
          </div>
        </section>

        {/* 事業区分カード */}
        <ProjectCards />

        {/* NEWS */}
        <NewsSection />

        {/* 公募目的 */}
        <PurposeSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
