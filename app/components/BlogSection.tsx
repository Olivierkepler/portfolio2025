"use client";

import { Eye, CalendarDays, MessageSquare } from "lucide-react";
import Image from "next/image";

const blogs = [
  {
    title: "T-shirt design is the part of design",
    category: "Canada",
    date: "July 23, 2023",
    comments: 1,
    views: 152,
    image: "/images/blog-img2.png",
  },
  {
    title: "Services are provided to you by the designers",
    category: "Development",
    date: "July 23, 2023",
    comments: 1,
    views: 201,
    image: "/images/blog-img3.png",
  },
  {
    title: "Mobile app landing design & app maintain",
    category: "Application",
    date: "July 23, 2023",
    comments: 1,
    views: 174,
    image: "/images/blog-img.png",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full px-6 py-20 md:px-20 bg-slate-950/20 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">Feedback</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-slate-800 hover:shadow-xl transition"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="text-green-500 text-sm font-medium mb-2 uppercase">
                {blog.category}
              </p>
              <div className="flex items-center text-slate-400 text-xs gap-4 mb-4">
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" /> {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" /> {blog.comments} Comment
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" /> {blog.views} views
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-snug">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}