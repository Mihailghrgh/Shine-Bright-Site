"use client";

import { Card, CardBody } from "@heroui/card";
import { ArrowRight } from "lucide-react";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";
import { useMemo } from "react";

function Newsletter() {
  const [value, setValue] = useState("janedow@gmail.com");
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isValid = useMemo(() => {
    if (value === "") {
      return false;
    }

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <div className="my-20 bg-white" id="newsletter">
      <div className="relative max-w-5xl mx-auto bg-white">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl blur-3xl"></div>
        <Card className="relative bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
          <CardBody className="relative p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Trimite un{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Mail!
                  </span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Hai să te ajutăm!
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Fie că ești un locatar de bloc sau o companie care are nevoie
                  de servicii de curătare, echipa noastră poate să te ajute!
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Servicii Rapide
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Oferte profesionale
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Nu îți pierdem timpul
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Input
                    labelPlacement="outside"
                    type="email"
                    label="Email"
                    color={isValid ? "danger" : "success"}
                    value={value}
                    isInvalid={isValid}
                    isClearable
                    variant="bordered"
                    onValueChange={setValue}
                    placeholder="Introduce adresa de email"
                    className="w-full px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <Textarea
                    isClearable
                    labelPlacement="outside"
                    label="Mesaj"
                    variant="bordered"
                    placeholder="Scrie-ne un mesaj"
                    className="w-full px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
                <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center hover:cursor-pointer">
                  Trimite mail
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
export default Newsletter;
