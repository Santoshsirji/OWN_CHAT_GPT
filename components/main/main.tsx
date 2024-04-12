"use client";

import * as z from "zod";
import axios from "axios";
import { MdContentCopy } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { Loader } from "@/components/loader";
import { Empty } from "@/components/ui/empty";

import { formSchema } from "./constants";

interface Message {
  reply: string;
}

const ConversationPage = () => {
  const router = useRouter();
  const [message, setMessage] = useState<Message>({ reply: '' });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const divRef = useRef<HTMLDivElement>(null);

  const handleInnerTextCopy = async () => {
    const textToCopy = divRef.current?.innerText;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          toast.success('Text copied to clipboard:');
        })
        .catch((error) => {
          console.error('Failed to copy text:', error);
        });
    }
  };

  const handleOuterTextCopy = async () => {
    const divContent = divRef.current?.outerHTML;
    if (divContent) {
      navigator.clipboard.writeText(divContent)
        .then(() => {
          toast.success('HTML copied to clipboard:');
        })
        .catch((error) => {
          toast.error('Failed to copy content:',)
        });
    }
  };

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('/api/generatecontent', values);
      setMessage({ reply: response.data.reply});
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Conversation"
        subtitle="Our most advanced conversation model."
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <div className="col-span-12 lg:col-span-10">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="How do I calculate the radius of a circle?"
                      {...field}
                    />
                  </div>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {message.reply.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            <div
              key={message.reply}
              className="
                p-8 
                w-full 
                flex 
                flex-col 
                items-end 
                gap-x-8 
                rounded-lg 
                bg-muted
              "
            >
              <div className="flex flex-row items-center right-10 space-x-2">
                <button className="text-xs" onClick={handleInnerTextCopy}>
                  <MdContentCopy />
                  Copy Content
                </button>
                <button className="text-xs" onClick={handleOuterTextCopy}>
                  <MdContentCopy />
                  Copy Whole HTML
                </button>
              </div>
              <div className="w-full">
                <div
                  ref={divRef}
                  dangerouslySetInnerHTML={{ __html: message.reply }}
                  className="text-sm text-justify"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
