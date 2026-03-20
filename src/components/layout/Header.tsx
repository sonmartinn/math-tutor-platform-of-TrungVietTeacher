import Link from 'next/link'
import { BookOpen, User, LogIn } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <BookOpen size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Toán Thầy Trung Việt</span>
        </Link>
        
        <nav className="hidden gap-8 md:flex">
          <Link href="#khoa-hoc" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Khóa học</Link>
          <Link href="#ve-thay" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Về thầy</Link>
          <Link href="#hoc-thu" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Học thử</Link>
          <Link href="#cam-nhan" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Cảm nhận</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            <LogIn size={16} />
            <span className="hidden sm:inline">Đăng nhập</span>
          </Link>
          <Link href="/register" className="hidden rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 sm:block">
            Đăng ký học
          </Link>
        </div>
      </div>
    </header>
  )
}
