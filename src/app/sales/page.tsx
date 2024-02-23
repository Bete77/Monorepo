"use client";
import React, { useEffect } from "react";
import { Sales } from "@/models/sales.model";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Page = () => {
  const schema = z.object({
    item: z.string().min(2).max(50),
    description: z.string().optional(),
    quantity: z.number().min(1),
    unitPrice: z.number().min(0.01),
    totalPrice: z.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SalesData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("totalPrice", watch("quantity") * watch("unitPrice"));
  }, [watch("quantity"), watch("unitPrice")]);

  type SalesData = z.infer<typeof schema>;

  const submitData = (data: SalesData) => {
    console.log("IT WORKED", data);
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
              <form onSubmit={handleSubmit(submitData)}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">Item *</label>
                      <input
                        type="text"
                        className={`px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm dark:border-slate-800 rounded-md focus:outline-none text-gray-600 ${
                          errors.item ? "border-red-500" : ""
                        }`}
                        placeholder="Bowl"
                        {...register("item")}
                      />
                      {errors.item && (
                        <span className="text-red-500">
                          {errors.item.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">
                        Description (Optional)
                      </label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm dark:border-slate-800 rounded-md focus:outline-none text-gray-600"
                        placeholder="Red Green Yellow Blue Rounded"
                        {...register("description")}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Quantity *</label>
                      <input
                        type="number"
                        className={`px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm dark:border-slate-800 rounded-md focus:outline-none text-gray-600 ${
                          errors.quantity ? "border-red-500" : ""
                        }`}
                        placeholder="10000"
                        {...register("quantity", { valueAsNumber: true })}
                      />
                      {errors.quantity && (
                        <span className="text-red-500">
                          {errors.quantity.message}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose">Unit Price *</label>
                      <input
                        type="number"
                        className={`px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm dark:border-slate-800 rounded-md focus:outline-none text-gray-600 ${
                          errors.unitPrice ? "border-red-500" : ""
                        }`}
                        placeholder="2.5"
                        {...register("unitPrice", { valueAsNumber: true })}
                      />
                      {errors.unitPrice && (
                        <span className="text-red-500">
                          {errors.unitPrice.message}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose">
                        Total Price (Read Only)
                      </label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm dark:border-slate-800 rounded-md focus:outline-none text-gray-600"
                        placeholder="100000"
                        readOnly
                        {...register("totalPrice", { valueAsNumber: true }) }/>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    <button
                      type="submit"
                      className="dark:bg-slate-800 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
