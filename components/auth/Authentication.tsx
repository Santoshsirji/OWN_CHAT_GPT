// "use client";

// import { signIn } from "@/auth"
// import React from 'react'
// import { AiFillGithub } from 'react-icons/ai';
// import { FcGoogle } from 'react-icons/fc';
// import { useState } from 'react';
// import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
// import useLoginModal from "../../app/hooks/useLoginModal";
// import Modal from "../models/Modal";
// import Heading from '../Heading';
// import Input from "../inputs/Input";
// import Button from '../Button';
// import { useRouter } from 'next/navigation';

// interface FormData {
//   email: string;
//   password: string;
// }
// const revalidate = 0;

// const LoginModal = () => {
//   const router = useRouter();
//   const loginModal = useLoginModal();
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     defaultValues: {
//       email: '',
//       password: ''
//     }
//   });

//   const onSubmit = (data: FormData) => {
//     setIsLoading(true);

//     signIn('credentials', {
//       ...data,
//       redirect: false
//     })
//       .then((callback) => {
//         setIsLoading(false);

//         if (callback?.ok) {
//           toast.success("Successfully logged in");
//           router.refresh();
//           loginModal.onClose()
//         }

//         if (callback?.error) {
//           toast.error(callback.error);
//         }
//       })
//   }

//   const handleSwitch = () => {
//     loginModal.onClose();
//   }

//   const bodyContent = (
//     <div className="flex flex-col gap-4">
//       <Heading title={"Welcome back to TeachHUB"} subtitle={"Login to your account!"} />
//       <Input
//         id="email"
//         label="Email"
//         disabled={isLoading}
//         register={register}
//         errors={errors}
//         required
//       />
//       <Input
//         id="password"
//         type='password'
//         label="Password"
//         disabled={isLoading}
//         register={register}
//         errors={errors}
//         required
//       />
//     </div>
//   )

//   const footerContent = (
//     <div className='flex flex-col gap-4 mt-3'>
//       <hr />
//       <Button
//         outline
//         label={'Continue With Google'}
//         icon={FcGoogle}
//         onClick={() => signIn('google')}
//         disabled={isLoading}
//       />
//       <Button
//         className={"text-[#316FF6]"}
//         outline
//         label={'Continue With github'}
//         icon={AiFillGithub}
//         disabled={isLoading}
//         onClick={() => signIn('github')}
//       />
//       <div className='text-neutral-500 text-center mt-4 font-light flex w-full justify-center gap-2'>
//         <div className='justify-center flex flex-row items-center gap-2'>
//           Don&apos;t have an Account?
//         </div>
//         <div
//           onClick={handleSwitch}
//           className='text-neutral-800 cursor-pointer hover:underline'>
//           SignUp
//         </div>
//       </div>
//     </div>
//   )

//   return (
//     <Modal
//       disabled={isLoading}
//       isOpen={loginModal.isOpen}
//       title={"Login"}
//       actionLabel={"Continue"}
//       onClose={loginModal.onClose}
//       onSubmit={handleSubmit(onSubmit)}
//       body={bodyContent}
//       footer={footerContent}
//     />
//   )
// }

// export default LoginModal;
