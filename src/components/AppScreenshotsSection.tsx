import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, CheckCircle, Bell, UserIcon, Edit3, TrendingUp, Calendar, BookOpen, MessageCircle, Settings } from "lucide-react";

function PhoneWrapper({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-[280px] sm:w-[300px]"
    >
      <div className="relative overflow-hidden rounded-[3rem] border-[12px] border-slate-900 bg-slate-900 shadow-2xl shadow-blue-900/20">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-40 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

        {/* Screen */}
        <div className="relative h-[600px] sm:h-[650px] w-full overflow-hidden rounded-[2.2rem] bg-[#f8f9fa] flex flex-col font-sans">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// 1. Dashboard UI (resembles Admin)
function DashboardDemo() {
  return (
    <div className="flex-1 overflow-hidden flex flex-col relative z-10">
      <div className="px-5 pt-10 pb-4 bg-white shadow-sm flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-blue-100 rounded-full flex justify-center items-center text-blue-700 font-bold">D</div>
          <div>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Overview</p>
            <h4 className="text-sm font-black text-slate-900">Dashboard</h4>
          </div>
        </div>
        <Bell className="w-5 h-5 text-slate-400" />
      </div>

      <div className="p-5 flex-1 overflow-y-auto pb-10">
        <p className="text-2xl font-black text-slate-800 mb-6 tracking-tight">Welcome back!</p>
        
        <div className="flex justify-between gap-3 mb-6">
          <div className="bg-white flex-1 p-3 rounded-2xl shadow-sm border border-slate-100 text-center">
            <p className="text-xl font-black text-blue-600">842</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">Students</p>
          </div>
          <div className="bg-white flex-1 p-3 rounded-2xl shadow-sm border border-slate-100 text-center">
            <p className="text-xl font-black text-violet-600">45</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">Teachers</p>
          </div>
        </div>

        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Quick Access</p>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-[18px] text-white shadow-md">
            <Users className="w-6 h-6 mb-8 text-white/80" />
            <h5 className="font-bold text-sm tracking-tight">Manage Users</h5>
            <p className="text-[10px] text-blue-100 mt-1">All accounts</p>
          </div>
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-[18px] text-white shadow-md">
            <Bell className="w-6 h-6 mb-8 text-white/80" />
            <h5 className="font-bold text-sm tracking-tight">Announcements</h5>
            <p className="text-[10px] text-amber-100 mt-1">Send circulars</p>
          </div>
          <div className="bg-gradient-to-br from-rose-400 to-red-500 p-4 rounded-[18px] text-white shadow-md">
            <TrendingUp className="w-6 h-6 mb-8 text-white/80" />
            <h5 className="font-bold text-sm tracking-tight">Activities</h5>
            <p className="text-[10px] text-rose-100 mt-1">Recent events</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-4 rounded-[18px] text-white shadow-md">
            <Calendar className="w-6 h-6 mb-8 text-white/80" />
            <h5 className="font-bold text-sm tracking-tight">Timetable</h5>
            <p className="text-[10px] text-emerald-100 mt-1">Manage slots</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Nav */}
      <div className="bg-white border-t border-slate-100 h-16 flex justify-around items-center px-4 absolute bottom-0 w-full z-20">
        <div className="flex flex-col items-center text-emerald-500"><UserIcon className="w-5 h-5 mb-1" /><span className="text-[9px] font-bold">Home</span></div>
        <div className="flex flex-col items-center text-slate-400"><Bell className="w-5 h-5 mb-1" /><span className="text-[9px] font-bold">Notices</span></div>
        <div className="flex flex-col items-center text-slate-400"><Settings className="w-5 h-5 mb-1" /><span className="text-[9px] font-bold">Settings</span></div>
      </div>
    </div>
  );
}

// 2. Attendance UI (resembles Teacher class view)
function AttendanceDemo() {
  return (
    <div className="flex-1 overflow-hidden flex flex-col relative z-20">
      <div className="px-5 pt-10 pb-4 bg-white shadow-sm flex justify-between items-center relative z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full text-slate-600">&larr;</div>
          <h4 className="text-sm font-black text-slate-900 ml-2">My Classes</h4>
        </div>
      </div>

      <div className="p-5 flex-1 relative z-10">
        <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-1">Class 10 — A</h3>
        <p className="text-xs text-slate-500 font-medium mb-6">42 students enrolled</p>

        <div className="flex gap-3 mb-8">
          <div className="flex-1 bg-emerald-700 text-white p-4 rounded-2xl shadow-md border border-emerald-600/50">
            <Calendar className="w-5 h-5 mb-3 text-emerald-200" />
            <p className="font-bold text-sm leading-tight">Mark Attendance</p>
            <p className="text-[10px] text-emerald-200 mt-1">Today's roll call</p>
          </div>
          <div className="flex-1 bg-indigo-700 text-white p-4 rounded-2xl shadow-md border border-indigo-600/50">
            <BookOpen className="w-5 h-5 mb-3 text-indigo-200" />
            <p className="font-bold text-sm leading-tight">Assign Homework</p>
            <p className="text-[10px] text-indigo-200 mt-1">Set a new task</p>
          </div>
        </div>

        {/* Modal-like overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-5 pb-6 border-t border-slate-100 z-30">
          <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-5" />
          <div className="flex justify-between items-center mb-5">
            <div>
              <h4 className="font-black text-lg text-slate-900">Mark Attendance</h4>
              <p className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">Today • Class 10-A</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">&times;</div>
          </div>

          <button className="w-full bg-emerald-600 text-white font-bold text-xs py-3 rounded-xl mb-4 hover:bg-emerald-700 transition">
            MARK ALL PRESENT
          </button>

          <div className="space-y-3 mb-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-emerald-100 bg-emerald-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-200 text-emerald-800 rounded-lg flex items-center justify-center font-bold text-xs">S</div>
                  <span className="text-sm font-bold text-slate-800">Student Name</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-sm"><CheckCircle className="w-4 h-4" /></div>
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 flex items-center justify-center">&times;</div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full bg-emerald-600 text-white font-bold text-xs py-4 rounded-xl shadow-lg shadow-emerald-200">
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
}

// 3. Overview UI (resembles Student portal)
function OverviewDemo() {
  return (
    <div className="flex-1 overflow-hidden flex flex-col relative z-10">
      <div className="px-5 pt-10 pb-4 bg-white shadow-sm flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-indigo-100 rounded-full flex justify-center items-center text-indigo-700 font-bold">U</div>
          <div>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Portal</p>
            <h4 className="text-sm font-black text-slate-900">Dashboard</h4>
          </div>
        </div>
        <Bell className="w-5 h-5 text-slate-400" />
      </div>

      <div className="p-5 flex-1 overflow-y-auto pb-16 relative z-10">
        <p className="text-xs text-slate-500 font-bold tracking-widest uppercase mb-1">Today</p>
        <p className="text-2xl font-black text-slate-800 mb-6 tracking-tight">Stay updated!</p>
        
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Overview</p>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-indigo-500 p-4 rounded-[18px] text-white shadow-md text-center flex flex-col items-center justify-center aspect-square">
            <Calendar className="w-6 h-6 mb-3 text-indigo-200" />
            <h5 className="font-extrabold text-3xl tracking-tight mb-1">100%</h5>
            <p className="text-[10px] text-indigo-100 font-medium">Attendance</p>
          </div>
          <div className="bg-orange-500 p-4 rounded-[18px] text-white shadow-md text-center flex flex-col items-center justify-center aspect-square">
            <Edit3 className="w-6 h-6 mb-3 text-orange-200" />
            <h5 className="font-extrabold text-3xl tracking-tight mb-1">2</h5>
            <p className="text-[10px] text-orange-100 font-medium">Homework</p>
          </div>
          <div className="bg-emerald-500 p-4 rounded-[18px] text-white shadow-md text-center flex flex-col items-center justify-center aspect-square">
            <Bell className="w-6 h-6 mb-3 text-emerald-200" />
            <h5 className="font-extrabold text-3xl tracking-tight mb-1">1</h5>
            <p className="text-[10px] text-emerald-100 font-medium">Circulars</p>
          </div>
          <div className="bg-violet-500 p-4 rounded-[18px] text-white shadow-md text-center flex flex-col items-center justify-center aspect-square">
            <MessageCircle className="w-6 h-6 mb-3 text-violet-200" />
            <h5 className="font-extrabold text-3xl tracking-tight mb-1">0</h5>
            <p className="text-[10px] text-violet-100 font-medium">Remarks</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-white border-t border-slate-100 h-16 flex justify-around items-center px-4 absolute bottom-0 w-full z-20">
        <div className="flex flex-col items-center text-emerald-500"><BookOpen className="w-5 h-5 mb-1" /><span className="text-[9px] font-bold">Home</span></div>
        <div className="flex flex-col items-center text-slate-400"><Bell className="w-5 h-5 mb-1" /><span className="text-[9px] font-bold">Notices</span></div>
        <div className="flex flex-col items-center text-slate-400"><Calendar className="w-5 h-5 mb-1" /><span className="text-[9px] font-bold">Classes</span></div>
        <div className="flex flex-col items-center text-slate-400"><UserIcon className="w-5 h-5 mb-1" /><span className="text-[9px] font-bold">Profile</span></div>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Centralized Control",
    desc: "A powerful bird's-eye view of all operations. Manage users, track activities, and send announcements seamlessly.",
    icon: Settings,
    color: "text-blue-600",
    bg: "bg-blue-50",
    demo: <DashboardDemo />
  },
  {
    title: "Fast Operations",
    desc: "Mark attendance, assign homework, and review class histories in just a couple of taps.",
    icon: CheckCircle,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    demo: <AttendanceDemo />
  },
  {
    title: "Instant Updates",
    desc: "Keep everyone in the loop natively. Track homework, read circulars, and monitor real-time attendance.",
    icon: TrendingUp,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    demo: <OverviewDemo />
  },
];

export function AppScreenshotsSection() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  return (
    <section id="screenshots" className="bg-white overflow-hidden py-24 lg:py-32" ref={scrollRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 shadow-sm">
            Intuitive Interface
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl max-w-3xl mx-auto">
            Experience the workflow.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 font-medium">
            Take a look inside the application. Fast, native, beautifully designed modules that simply make sense.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-3 lg:gap-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="flex flex-col items-center">
                
                {/* Text section above the phone */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center mb-10 max-w-sm"
                >
                  <div className={`mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${section.bg} shadow-sm`}>
                    <Icon className={`h-8 w-8 ${section.color}`} />
                  </div>
                  <h3 className="mb-3 text-2xl font-black text-slate-900">
                    {section.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    {section.desc}
                  </p>
                </motion.div>

                {/* Simulated Phone Mockup UI */}
                <PhoneWrapper delay={0.2 + (idx * 0.2)}>
                  {section.demo}
                </PhoneWrapper>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
