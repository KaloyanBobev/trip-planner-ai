"use client";

import React, { useEffect } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const createUserMutation = useMutation(api.user.CraeteNewUser);
  const { user } = useUser();

  useEffect(() => {
    if (user) user && createUser();
  }, [user]);

  const createUser = async () => {
    if (user) {
      await createUserMutation({
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user?.imageUrl,
        name: user?.fullName ?? "",
      });
    }
  };

  return (
    <UserDetailContext.Provider value={{}}>
      <div>
        <Header />
        {children}
      </div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
