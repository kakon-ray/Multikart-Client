import React from "react";
import PageBanner from "../PageBanner/PageBanner";

const Blog = () => {
  return (
    <>
      <PageBanner page="Blog"></PageBanner>
      <div className="px-4 md:px-20 py-30 pb-24 pt-14 dark:bg-black">
        <div className="grid md:grid-cols-3 gap-4 container mx-auto ">
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white dark:bg-slate-900 max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-8 dark:text-slate-400">
                  sql এবং nosql এর মধ্যে পার্থক্যঃ
                </h5>
                <p className="text-gray-700 text-base mb-16 dark:text-slate-400">
                  sql একটি টেবিল বেস ডাটাবেস অপরদিকে nosql একটি ডকুমেন্ট বেশ
                  ডাটাবেস। sql এর ডাটাগুলো টেবিল আকারে সাজানো থাকে অপরদিকে nosql
                  এ ডাটা জাভাস্ক্রিপ্ট এর ডকুমেন্ট আকারে সাজানো থাকে। sql থেকে
                  nosql ডাটাবেস বেশি ডেভেলপার ফ্রেন্ডলি।nosql অপারেশন গুলা অনেক
                  সহজে করা যায়।mongodb একটি nosql ডাটাবেস। অপরদিকে mysql একটি
                  sql ডাটাবেস। sql ডাটাবেস কে কুয়েরি এর মাধ্যমে ডাটা এর অপারেশন
                  করতে হয়। অপরদিকে nosql ডাটাবেস কে প্রোগ্রামিং ল্যাংগুয়েজ যেমন
                  জাভাস্ক্রিপ্ট php এর মাধ্যমে নিয়ন্ত্রণ করা যায়।
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
