import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle2,
  PlayCircle,
  Star,
  Trophy,
  Users,
  BookOpen
} from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-indigo-50/50 py-20 lg:py-28">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-1.5 text-sm font-semibold text-indigo-700">
              <Star size={16} className="fill-indigo-700" />
              Lựa chọn số 1 của học sinh khá giỏi
            </div>
            <h1 className="text-4xl leading-tight font-extrabold text-slate-900 lg:text-5xl xl:text-6xl">
              Học Toán Cùng Thầy Trung Việt <br />
              <span className="text-indigo-600">Nắm Trọn Điểm 9, 10</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Phương pháp giảng dạy độc quyền, chắt lọc tinh hoa từ hơn 10 năm
              kinh nghiệm. Giúp hàng ngàn học sinh tự tin vượt qua khối lượng
              bài tập khổng lồ một cách nhẹ nhàng nhất.
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#khoa-hoc"
                className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-8 text-base font-semibold text-white shadow-lg transition hover:bg-indigo-700 hover:shadow-indigo-500/25"
              >
                Khám phá khóa học
              </Link>
              <Link
                href="#hoc-thu"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <PlayCircle size={20} />
                Học thử miễn phí
              </Link>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle2 size={18} className="text-green-500" /> Trả góp
                khóa học
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={18} className="text-green-500" /> Cam kết hỗ
                trợ 24/7
              </div>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
            {/* Placeholder cho ảnh Thầy */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-200 to-indigo-100" />
            <Image
              src="/window.svg" // Tạm dùng ảnh placeholder mặc định
              alt="Thầy Nguyễn Trung Việt - Chuyên gia luyện thi Toán"
              fill
              className="object-contain p-12 drop-shadow-2xl"
              priority
            />
            {/* Floating Badges */}
            <div className="absolute top-1/4 -left-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Trophy size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">10+</p>
                  <p className="text-sm font-medium text-slate-500">
                    Năm kinh nghiệm
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-1/4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">5k+</p>
                  <p className="text-sm font-medium text-slate-500">
                    Học sinh đỗ ĐH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Courses Section */}
      <section id="khoa-hoc" className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 flex flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Lộ Trình Học Tập{' '}
              <span className="text-indigo-600">Toàn Diện</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Các khóa học đúc kết kinh nghiệm nhiều năm giảng dạy, được thiết
              kế bài bản bám sát cấu trúc đề thi mới nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Course Card 1 */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-900">
                  <p className="text-2xl font-black tracking-widest text-white/50">
                    TOÁN 12 CẤP TỐC
                  </p>
                </div>
                <div className="absolute top-4 left-4 rounded bg-red-500 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
                  BÁN CHẠY NHẤT
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <BookOpen size={16} /> 45 Bài giảng
                </div>
                <h3 className="mb-3 text-xl leading-tight font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                  Luyện Thi THPT Quốc Gia - Toán 12
                </h3>
                <p className="mb-6 line-clamp-2 flex-1 text-sm text-slate-600">
                  Khóa học lấy điểm 8+ Toán cực kỳ vững chắc. Tổng ôn toàn bộ
                  kiến thức và phân loại phương pháp giải nhanh trắc nghiệm
                  2026.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-indigo-600">
                      1.490.000đ
                    </p>
                    <p className="text-xs font-medium text-slate-400 line-through">
                      2.000.000đ
                    </p>
                  </div>
                  <Link
                    href="/courses/1"
                    className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Đăng ký ngay
                  </Link>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center bg-teal-800">
                  <p className="text-2xl font-black tracking-widest text-white/50">
                    TOÁN 11 NÂNG CAO
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <BookOpen size={16} /> 60 Bài giảng
                </div>
                <h3 className="mb-3 text-xl leading-tight font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                  Chuyên Đề Trọng Tâm Toán 11
                </h3>
                <p className="mb-6 line-clamp-2 flex-1 text-sm text-slate-600">
                  Nắm vững không gian, lượng giác, đạo hàm. Xây chắc nền tảng từ
                  sơ cấp đến nâng cao để chạy đà ôn thi Đại Học.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-indigo-600">
                      1.190.000đ
                    </p>
                  </div>
                  <Link
                    href="/courses/2"
                    className="rounded-xl bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center bg-orange-700">
                  <p className="text-2xl font-black tracking-widest text-white/50">
                    MẤT GỐC TOÁN
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <BookOpen size={16} /> 30 Bài giảng
                </div>
                <h3 className="mb-3 text-xl leading-tight font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                  Lấy Lại Gốc Toán Học Cấp 3
                </h3>
                <p className="mb-6 line-clamp-2 flex-1 text-sm text-slate-600">
                  Dành riêng cho học sinh đang sợ học Toán. Dạy chậm, phân tích
                  chi tiết từng bước, tự tin theo kịp tiến độ trên lớp.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-indigo-600">
                      890.000đ
                    </p>
                  </div>
                  <Link
                    href="/courses/3"
                    className="rounded-xl bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/courses"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-8 text-base font-semibold text-slate-700 transition hover:border-indigo-600 hover:bg-slate-50 hover:text-indigo-600"
            >
              Xem toàn bộ khóa học
            </Link>
          </div>
        </div>
      </section>

      {/* 3. About Tutor Section (Why Choose Us) */}
      <section
        id="ve-thay"
        className="relative bg-slate-900 py-20 text-white lg:py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-indigo-950 opacity-80" />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl leading-tight font-extrabold md:text-5xl">
                Tại sao học sinh luôn chọn
                <br />
                <span className="text-indigo-400">Thầy Trung Việt?</span>
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold">
                      Giảng giải siêu thực tế - 0% Buồn ngủ
                    </h4>
                    <p className="text-base leading-relaxed text-slate-400">
                      Nói không với đọc chép công thức. Tập trung phân tích bản
                      chất vấn đề, phương pháp suy luận áp dụng cho 10 bài tương
                      tự.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold">
                      Hỗ trợ học tập 24/7 trực tiếp
                    </h4>
                    <p className="text-base leading-relaxed text-slate-400">
                      Học sinh không bao giờ bị `&quot;`bỏ rơi`&quot;`. Mọi thắc
                      mắc đều được Thầy và đội ngũ trợ giảng giải đáp cặn kẽ qua
                      nhóm trao đổi riêng.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold">
                      Kho tài liệu + Bài thi khổng lồ
                    </h4>
                    <p className="text-base leading-relaxed text-slate-400">
                      Ngân hàng đề thi PDF trắc nghiệm/tự luận phong phú, có
                      video chữa chi tiết câu hỏi khó, chấm điểm sát sườn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
                <p className="mb-3 text-5xl font-black text-indigo-400">12+</p>
                <p className="font-medium text-slate-300">Năm sư phạm</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
                <p className="mb-3 text-5xl font-black text-indigo-400">
                  5000+
                </p>
                <p className="font-medium text-slate-300">Học sinh đã dạy</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
                <p className="mb-3 text-5xl font-black text-indigo-400">
                  1500+
                </p>
                <p className="font-medium text-slate-300">Video bài giảng</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
                <p className="mb-3 text-5xl font-black text-indigo-400">9.8</p>
                <p className="font-medium text-slate-300">Điểm đánh giá TB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="relative overflow-hidden bg-indigo-600 py-24 text-center text-white">
        <div className="absolute top-0 left-0 h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative container mx-auto px-4 md:px-6">
          <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
            Sẵn sàng bứt phá điểm số môn Toán?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-indigo-100 md:text-xl">
            Hàng ngàn học sinh đã thay đổi kết quả sau 1 tháng. Bạn đã sẵn sàng
            để trở thành người tiếp theo?
          </p>
          <Link
            href="/register"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-indigo-600 shadow-xl transition hover:scale-105 hover:bg-slate-50"
          >
            Đăng ký tài khoản miễn phí
          </Link>
          <p className="mt-6 text-sm text-indigo-200">
            Không yêu cầu thẻ tín dụng • Truy cập các bài học thử
          </p>
        </div>
      </section>
    </div>
  )
}
