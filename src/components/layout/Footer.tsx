import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold text-slate-900">
            Toán Thầy Trung Việt
          </span>
          <p className="text-sm leading-relaxed text-slate-500">
            Nền tảng học Toán trực tuyến chất lượng cao, giúp học sinh nắm vững
            bản chất, bứt phá điểm số.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-slate-900">Khóa học</h3>
          <Link
            href="#"
            className="text-sm text-slate-500 transition hover:text-indigo-600"
          >
            Toán 12 & Luyện Thi THPT QG
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-500 transition hover:text-indigo-600"
          >
            Toán 11 Nâng Cao
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-500 transition hover:text-indigo-600"
          >
            Toán 10 Nền Tảng
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-slate-900">Về chúng tôi</h3>
          <Link
            href="#"
            className="text-sm text-slate-500 transition hover:text-indigo-600"
          >
            Giới thiệu thầy Trung Việt
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-500 transition hover:text-indigo-600"
          >
            Phương pháp giảng dạy
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-500 transition hover:text-indigo-600"
          >
            Thành tích học viên
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-slate-900">Hỗ trợ</h3>
          <Link
            href="https://zalo.me/0905690632"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-[#0068FF]"
          >
            <Image src="/Icon_of_Zalo.svg" alt="Zalo" width={16} height={16} />
            Zalo Thầy Việt: 0905.690.632
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-500 transition hover:text-indigo-600"
          >
            Hướng dẫn thanh toán
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-500 transition hover:text-indigo-600"
          >
            Câu hỏi thường gặp
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 px-4 pt-8 text-sm text-slate-500 md:flex-row md:px-6">
        <p>© 2026 Toán Thầy Trung Việt. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-indigo-600">
            Điều khoản sử dụng
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Chính sách bảo mật
          </Link>
        </div>
      </div>
    </footer>
  )
}
