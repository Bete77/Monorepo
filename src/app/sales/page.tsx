"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(quantity * unitPrice);
  }, [quantity, unitPrice]);

  const handleCreate = () => {
    if (!item || quantity === 0 || unitPrice === 0) {
        window.alert("Please make sure all fields are filled in correctly Except Description and Total Price.");
        return;
    }
    console.log({ item, description, quantity, unitPrice, totalPrice });
  };

  return (
    <>
      <div className="min-h-screen dark:bg-slate-800 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 dark:bg-slate-800 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  i
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Create a Sale</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Item *</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm dark:border-slate-800 rounded-md focus:outline-none text-gray-600"
                      placeholder="Bowl"
                      onChange={(e) => setItem(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Description (Optional)</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm dark:border-slate-800 rounded-md focus:outline-none text-gray-600"
                      placeholder="Red Green Yellow Blue Rounded"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Quantity *</label>
                    <input
                      type="number"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm dark:border-slate-800 rounded-md focus:outline-none text-gray-600"
                      placeholder="10000"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">Unit Price *</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm dark:border-slate-800 rounded-md focus:outline-none text-gray-600"
                      placeholder="2.5"
                      value={unitPrice}
                      onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">Total Price (Read Only)</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm dark:border-slate-800 rounded-md focus:outline-none text-gray-600"
                      placeholder="100000"
                      value={totalPrice}
                      disabled
                    />
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={handleCreate}
                    className="dark:bg-slate-800 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
