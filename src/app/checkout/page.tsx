"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const formSchema = z.object({
  // Attendee Information
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, { message: "Invalid phone number" })
    .optional(),
  companyName: z.string().min(1, { message: "Company name is required" }),
  designation: z.string().min(1, { message: "Designation is required" }),
  linkedinProfile: z
    .string()
    .url({ message: "Invalid LinkedIn profile URL" })
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

const AttendeeForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      designation: "",
      linkedinProfile: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted:", data);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        window.location.href = '/thankyou';
      } else {
        alert('Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full">
      <VelocityScroll
        text="DEMO DAY '24"
        default_velocity={5}
        className="font-display text-center text-4xl md:text-6xl font-medium tracking-[-0.02em] text-neutral-100 bg-[#111213] dark:text-white md:leading-[5rem] p-4"
      />
      <div className="w-full flex flex-col justify-center items-start bg-gray-100 gap-8 md:gap-24 p-8 md:p-20 md:flex-row">
        <div className="w-full md:w-4/6 flex bg-white rounded-xl">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-5/6 m-auto mt-16 mb-12"
            >
              <div>
                <h2 className="text-4xl font-semibold text-black">
                  Attendee Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">
                          First Name <span className="text-red-700">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            {...field}
                            className="rounded-xl h-[50px] border-gray-300 text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            {...field}
                            className="rounded-xl h-[50px] border-gray-300 text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">
                          Email <span className="text-red-700">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            className="rounded-xl h-[50px] border-gray-300 text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="9876543210"
                            {...field}
                            className="rounded-xl h-[50px] border-gray-300 text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">
                          Company Name <span className="text-red-700">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Acme Inc."
                            {...field}
                            className="rounded-xl h-[50px] border-gray-300 text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">
                          Designation <span className="text-red-700">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Software Engineer"
                            {...field}
                            className="rounded-xl h-[50px] border-gray-300 text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="linkedinProfile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">
                          LinkedIn Profile
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://www.linkedin.com/in/johndoe"
                            {...field}
                            className="rounded-xl h-[50px] border-gray-300 text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                className="rounded-[8px] bg-[#111213] h-[50px] w-full text-neutral-100 hover:text-[#FB723D] text-lg uppercase"
                type="submit"
              >
                apply for invite
              </Button>
            </form>
          </Form>
        </div>
        <div className="w-full md:w-2/6">
            <div className="w-full h-[200px] md:h-[400px] bg-gray-300 rounded-2xl p-4">
              <div className="w-full h-1/4 flex justify-between p-4 items-center rounded-xl">
                <p className="text-black font-semibold text-lg md:text-xl text-left">
                  Ticket X1
                </p>
                <p className="text-black font-semibold text-lg md:text-xl text-right">
                  ₹2,000
                </p>
              </div>
              <div className="w-full h-1/4 flex justify-between p-4 items-center">
                <p className="text-gray-500 font-semibold text-lg md:text-xl text-left">
                  Subtotal
                </p>
                <p className="text-gray-500 font-semibold text-lg md:text-xl text-right">
                  ₹2,000
                </p>
              </div>
              <div className="w-full h-1/4 flex justify-between p-4 items-center">
                <p className="text-gray-500 font-semibold text-lg md:text-xl text-left">
                  GST
                </p>
                <p className="text-gray-500 font-semibold text-lg md:text-xl text-right">
                  ₹360
                </p>
              </div>
              <div className="w-full h-1/4 flex justify-between p-4 items-center bg-black rounded-xl">
                <p className="text-white font-semibold text-lg md:text-xl text-left">
                  TOTAL
                </p>
                <p className="text-white font-semibold text-lg md:text-xl text-right">
                  ₹2,360
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AttendeeForm;
