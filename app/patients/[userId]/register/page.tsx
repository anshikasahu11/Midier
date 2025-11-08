import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

interface RegisterPageProps {
  params: {
    userId: string;
  };
}

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { userId } = params;

  // Safeguard: check if userId exists
  if (!userId) {
    throw new Error("Missing userId in params");
  }

  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) {
    redirect(`/patients/${userId}/new-appointment`);
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Medier logo"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 Medier</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="Register background"
        className="side-img max-w-[390px]"
      />
    </div>
  );
}
