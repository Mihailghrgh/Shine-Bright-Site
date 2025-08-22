"use client";

import { Card, CardBody } from "@heroui/card";
import { ArrowRight } from "lucide-react";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";
import { useMemo } from "react";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import axios from "axios";

function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // const validateEmail = (value: string) =>
  //   value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const validateText = (value: string) =>
    value.match(/^[a-zA-Z0-9./&^!?]{10,20}$/);

  const getMessageError = (value: string) => {
    if (value.length < 1) {
      return null;
    }
    if (!value.match(/^[a-zA-Z0-9 ./&^!?]{10,300}$/)) {
      return "Mesajul trebuie sa aiba minim 10 caractere sau maxim 100";
    }

    return null;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget));

    const { data } = await axios.post("/api/email", form);

    console.log(data);

    if(data.status === 200){
      setEmail('')
      setMessage('')
    }
  };

  return (
    <section className="py md:py-20 bg-white" id="newsletter">
      <div className="relative max-w-5xl mx-auto">
        <Card className="relative bg-slate-50 border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardBody className="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row space-y-4 space-x-4">
            <div className="flex-1 text-center md:text-left">
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
                Fie că ești un locatar de bloc sau o companie care are nevoie de
                servicii de curătare, echipa noastră poate să te ajute!
              </p>
              <div className="flex flex-row items-center justify-between sm:items-center text-left sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-500">
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
                  Nu pierde timpul
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Form className="space-y-2" onSubmit={onSubmit}>
                <Input
                  isRequired
                  value={email}
                  onValueChange={setEmail}
                  variant="bordered"
                  color="primary"
                  errorMessage={({ validationDetails }) => {
                    if (validationDetails.valueMissing) {
                      return "Te rog introduce o adresă email";
                    }
                    if (validationDetails.typeMismatch) {
                      return "Te rog introduce o adresă de email corectă";
                    }
                  }}
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Introduce email-ul"
                  type="email"
                  className="text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                />
                <Textarea
                  isRequired
                  value={message}
                  onValueChange={setMessage}
                  isInvalid={getMessageError(message) !== null}
                  errorMessage={getMessageError(message)}
                  isClearable
                  color="primary"
                  type="message"
                  name="message"
                  label="Mesaj"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Scrie-ne un mesaj"
                  className="text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                />
                <Button
                  type="submit"
                  className="w-full px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center hover:cursor-pointer"
                >
                  Trimite mail
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default Newsletter;
