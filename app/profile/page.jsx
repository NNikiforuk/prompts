"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/profile";

import React from "react";

const Profile = () => {

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }


	return (
		<div>
			<Profile name="My" desc="Welcome to your personalized profile page" data={[]} handleEdit={handleEdit} handleDelete={handleDelete} />
		</div>
	);
};

export default Profile;
Profile;