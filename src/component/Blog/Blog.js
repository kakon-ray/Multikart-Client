import React from "react";
import PageBanner from "../PageBanner/PageBanner";

const Blog = () => {
  return (
    <>
      <PageBanner page="Blog"></PageBanner>
      <div className="container mx-auto px-4 md:px-20 py-30 pb-24 pt-14 dark:bg-black">
        <div className="grid md:grid-cols-3 gap-4">
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
                <h5 className="text-gray-900 text-xl font-medium mb-2 dark:text-slate-400">
                  জাভাস্ক্রিপ্ট এবং Node.js এর মধ্যে পার্থক্য
                </h5>
                <p className="text-gray-700 text-base mb-4 dark:text-slate-400">
                  জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ল্যাঙ্গুয়েজ।আর নোড জেস হচ্চে
                  এই জাভাস্ক্রিপ্ট কে ব্যাকএন্ড এ চালানোর রানটাইম ইনভায়রমেন্ট যা
                  ব্রাউজারের বাইরে জাভাস্ক্রিপ্ট কে কম্পাইল করে থাকে। নোড আসার
                  আগে জাভাস্ক্রিপ্ট কে শুধু ব্রাউজারে রান করা যেত। জাভাস্ক্রিপ্ট
                  ব্রাউজারে রান হত ক্রোম বা V8 ইঞ্জিন দ্বারা। Ryan Dahl নামের
                  একজন ব্যক্তি ক্রোম এর' V8 ইঞ্জিন এবং সি ++ এর মাধ্যমে নোড জেস
                  তৈরী করেন।এই নোড জেস এর মাধ্যমে জাভাস্ক্রিপ্ট কে সারর্ভার
                  সাইডে রান করা সম্ভব হচ্চে। তাই বলা যায় জাভাস্ক্রিপ্ট একটি
                  প্রোগ্রামিং ল্যাঙ্গুয়েজ এবং node.js ইনভারমেন্ট আসার পর একটি
                  শক্তিশালী জনপ্রিয় প্রোগ্রামিং ল্যাংগুয়েজের পরিণত হয়েছে
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
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm dark:bg-slate-900">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2 dark:text-slate-400">
                  কখন নোড জেস ব্যবহার করা উচিত ?কখন মঙ্গডিবি ব্যাবহার করা উচিত?
                </h5>
                <p className="text-gray-700 text-base mb-4 dark:text-slate-400">
                  নোড জেস হাই পারফর্ম জাভাস্ক্রিপ্ট রান টাইম এনভায়রমেন্ট। কারণ
                  জাভাস্ক্রিপট একটি এসিনক্রোনাস প্রোগ্রামিং ল্যাঙ্গুয়েজ। আর নোড
                  জেস ও আসিনক্রোনাস ওয়েতে কাজ করে। একারণে অন্যান্য সিনক্রোনাস
                  প্রোগ্রামিং ল্যাঙ্গুয়েজ এর তুলনায় নোড জেস থেকে খুব ভালো
                  পারফর্মেন্স পাওয়া যায়। তাই বলা যায় ছোট থেকে মাঝারি এবং অনেক বড়
                  এপ্লিকেশনে নোড জেস ব্যবহার করে ভালো পারফর্মেন্স পাওয়া যায়।
                  মঙ্গডিবি একটি nosql database .এখানে ডাটা ডকুমেন্ট আকারে সাজানো
                  থাকে।তাই যেসব এপ্লিকেশনে ডেটা ডকুমেন্টেশন আকারে সাজানো প্রয়োজন
                  সেসব এপ্লিকেশনে mongodb ব্যবহার করা উচিত।
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
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm dark:bg-slate-900">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2 dark:text-slate-400">
                  What is JWT
                </h5>
                <p className="text-gray-700 text-base mb-4 dark:text-slate-400">
                  JWT means Json Web Token.JWT টোকেন এর মাধ্যমে ইউজার এর
                  পার্সোনাল ডাটাগুলো সিকিউর করা যায়। অর্থাৎ উজাড় যখন সাইটে লগইন
                  থাকবে তক্ষন ইউজার ডাটাগুলো একসেস করতে পারবে।{" "}
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
