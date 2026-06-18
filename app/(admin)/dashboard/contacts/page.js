import { prisma } from "@/lib/db/client";
import { revalidatePath } from "next/cache";
import ContactsClient from "./ContactsClient";

async function getContacts() {
  return prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function updateStatus(id, status) {
  "use server";
  await prisma.contact.update({ where: { id }, data: { status } });
  revalidatePath("/dashboard/contacts");
}

export async function deleteContact(id) {
  "use server";
  await prisma.contact.delete({ where: { id } });
  revalidatePath("/dashboard/contacts");
}

export const metadata = { title: "Messages | SOGIP Admin" };

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl mb-1" style={{ color: "#F0EDE8" }}>
          Messages
        </h1>
        <p style={{ color: "#8A8A8A", fontSize: "0.9rem" }}>
          {contacts.length} message{contacts.length !== 1 ? "s" : ""} reçu
          {contacts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <ContactsClient
        contacts={contacts}
        updateStatus={updateStatus}
        deleteContact={deleteContact}
      />
    </div>
  );
}
