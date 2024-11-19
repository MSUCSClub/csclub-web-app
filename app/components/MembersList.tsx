"use client";

import { useEffect, useState } from "react";

type Member = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

export default function MembersList() {
  const [members, setMembers] = useState<Member[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/members");
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        setError("Failed to fetch members");
      }
    };

    fetchMembers();
  }, []);

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold mb-4">CS Club Members</h2>
      <ul className="space-y-4">
        {members.map((member) => (
          <li key={member._id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}