import React from 'react';
import "./land2.css";

export default function land2(){
    return(
        <section className="bg-slate-100" >
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8" id="land2">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Trusted by Patients & Doctors
      </h2>

      <p className="mt-4 text-gray-500 sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
        laborum labore provident impedit esse recusandae facere libero harum
        sequi.
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl
        className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100"
      >
        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Total Patients
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            256
          </dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Official Doctors
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Total Hospitals
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">8</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
    );
}